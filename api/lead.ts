import type { VercelRequest, VercelResponse } from '@vercel/node';

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  website?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const PHONE_ALLOWED_REGEX = /^[0-9\s()\-+]+$/;

function normalizeField(value: unknown): string {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
}

function validatePayload(body: unknown): { valid: true; payload: LeadPayload } | { valid: false; message: string } {
  if (!body || typeof body !== 'object') {
    return { valid: false, message: 'Invalid request body.' };
  }

  const raw = body as Record<string, unknown>;
  const payload: LeadPayload = {
    name: normalizeField(raw.name),
    email: normalizeField(raw.email).toLowerCase(),
    phone: normalizeField(raw.phone),
    website: normalizeField(raw.website)
  };

  // Honeypot: bots often fill hidden fields.
  if (payload.website) {
    return { valid: false, message: 'Invalid submission.' };
  }

  if (!payload.name || !payload.email || !payload.phone) {
    return { valid: false, message: 'Missing required fields.' };
  }

  if (payload.name.length < 2 || payload.name.length > 80) {
    return { valid: false, message: 'Name must be between 2 and 80 characters.' };
  }

  if (!NAME_REGEX.test(payload.name)) {
    return { valid: false, message: 'Name contains invalid characters.' };
  }

  if (payload.email.length > 254 || !EMAIL_REGEX.test(payload.email)) {
    return { valid: false, message: 'Invalid email format.' };
  }

  if (payload.phone.length < 7 || payload.phone.length > 20 || !PHONE_ALLOWED_REGEX.test(payload.phone)) {
    return { valid: false, message: 'Invalid phone format.' };
  }

  const phoneDigits = payload.phone.replace(/\D/g, '');
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return { valid: false, message: 'Phone number must include 7 to 15 digits.' };
  }

  return { valid: true, payload };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const contentType = (req.headers['content-type'] || '').toLowerCase();
  if (!contentType.includes('application/json')) {
    return res.status(415).json({ success: false, message: 'Content-Type must be application/json.' });
  }

  const validation = validatePayload(req.body);
  if (!validation.valid) {
    return res.status(422).json({ success: false, message: validation.message });
  }

  const { name, email, phone } = validation.payload;

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;

  if (!scriptUrl || !secret) {
    return res.status(500).json({
      success: false,
      message: 'Server env missing',
      missing: {
        GOOGLE_SCRIPT_URL: !scriptUrl,
        GOOGLE_SCRIPT_SECRET: !secret
      }
    });
  }

  try {
    const r = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret,
        name,
        email,
        phone,
        source: 'omni-landing-page',
        userAgent: req.headers['user-agent'] || ''
      })
    });

    const text = await r.text();
    let data: any = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!r.ok || data.ok === false) {
      return res.status(502).json({
        success: false,
        message: 'Sheet write failed',
        detail: data,
        upstreamStatus: r.status
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal error', error: String(err) });
  }
}
