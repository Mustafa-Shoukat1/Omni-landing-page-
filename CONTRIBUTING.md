# Contributing to Omnipresent Agent

Thank you for your interest in contributing to Omnipresent Agent! This document provides guidelines for contributing to the project.

## Code of Conduct

Please be respectful and constructive in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Omni-landing-page-.git
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Locally

```bash
npm run dev
```

### Code Style

- Use TypeScript for all new code
- Follow existing component patterns
- Use Tailwind CSS utility classes
- Keep components focused and single-purpose

### Commit Messages

Use clear, descriptive commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `refactor:` for code refactoring
- `style:` for formatting changes

Example: `feat: Add voice agent playback controls`

## Pull Request Process

1. Ensure your code builds without errors
2. Update documentation if needed
3. Create a Pull Request with a clear description
4. Link any related issues

## Component Guidelines

### File Structure

```
components/
├── ComponentName.tsx    # Component implementation
```

### Component Template

```tsx
import React from 'react';

interface Props {
  isDarkMode: boolean;
  // ... other props
}

const ComponentName: React.FC<Props> = ({ isDarkMode }) => {
  // Component logic
  return (
    <section>
      {/* JSX */}
    </section>
  );
};

export default ComponentName;
```

## Questions?

Open an issue for any questions or suggestions.
