import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, phone } = req.body || {};
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

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
