# Contributing to Humanet Documentation

Thank you for your interest in contributing to Humanet documentation! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

If you find errors, typos, or unclear explanations in the documentation:

1. Check if the issue already exists in [GitHub Issues](https://github.com/TheFakeCreator/humanet-docs/issues)
2. If not, create a new issue with:
   - Clear description of the problem
   - Page/section where the issue occurs
   - Suggested improvement (if applicable)

### Suggesting Improvements

Have ideas for new content or better explanations?

1. Open an issue to discuss your proposal
2. Wait for feedback before starting work
3. Once approved, submit a pull request

### Submitting Pull Requests

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your changes:
   ```bash
   git checkout -b docs/improve-section-name
   ```
4. **Make your changes**:
   - Follow the existing style and formatting
   - Use clear, concise language
   - Test your changes locally with `npm run dev`
5. **Commit** with a descriptive message:
   ```bash
   git commit -m "docs: improve lifecycle management explanation"
   ```
6. **Push** to your fork:
   ```bash
   git push origin docs/improve-section-name
   ```
7. **Open a Pull Request** with:
   - Clear title describing the change
   - Description of what changed and why
   - Reference to any related issues

## Documentation Guidelines

### Writing Style

- **Be clear and concise** - Avoid jargon when possible
- **Use active voice** - "Click the button" not "The button should be clicked"
- **Be consistent** - Follow existing patterns and terminology
- **Use examples** - Concrete examples help understanding
- **No emojis** - Keep it professional

### File Structure

- Place files in the appropriate directory (`concepts/`, `guides/`, `standards/`, `reference/`)
- Update `_meta.json` to add pages to navigation
- Use descriptive filenames with hyphens: `create-first-idea.mdx`

### MDX Format

All documentation pages should include:

```mdx
---
title: Your Page Title
---

# Your Page Title

Content goes here...
```

### Code Examples

- Use proper syntax highlighting
- Include comments for complex examples
- Test code examples before submitting

### Links

- Use relative links for internal pages: `/guides/create-first-idea`
- Use full URLs for external resources
- Check all links work before submitting

## Development Setup

### Prerequisites

- Node.js 18+ installed
- Git installed
- Text editor (VS Code recommended)

### Setup Steps

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser

### Making Changes

1. Edit `.mdx` files in the `pages/` directory
2. Changes will hot-reload automatically
3. Check the browser to see your changes
4. Verify no errors in the terminal

### Building

Before submitting, ensure the site builds successfully:

```bash
npm run build
```

## Questions?

- Open an issue for questions about contributing
- Check existing documentation for examples
- Look at recent pull requests for reference

## Code of Conduct

This project follows a Code of Conduct. By participating, you agree to:

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Accept differing viewpoints
- Act professionally

Thank you for contributing to Humanet!
