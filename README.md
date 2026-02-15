# Humanet Documentation

> **GitHub for Ideas + Notion for Structure + Obsidian's Knowledge Graph**

This repository contains the documentation for Humanet, a structured collaboration platform that treats ideas like code—with versioning, lifecycle management, quality validation, and knowledge graph connections.

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Documentation Structure

```
app/
├── page.mdx                           # Home page
├── layout.tsx                         # Root layout with Nextra theme
├── getting-started/
│   └── page.mdx                       # Getting started guide
├── concepts/                          # Core concepts
│   ├── idea-repositories/
│   │   └── page.mdx
│   ├── lifecycle-management/
│   │   └── page.mdx
│   └── _meta.json
├── standards/                         # Standards & guidelines
│   ├── overview/
│   │   └── page.mdx
│   ├── diagramming/
│   │   └── page.mdx
│   └── _meta.json
├── guides/                            # How-to guides
│   ├── create-first-idea/
│   │   └── page.mdx
│   └── _meta.json
├── reference/                         # Reference documentation
│   ├── cli/
│   │   └── page.mdx
│   └── _meta.json
└── _meta.json                         # Root navigation
```

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Documentation:** [Nextra 4](https://nextra.site/)
- **Theme:** [Nextra Docs Theme 4](https://nextra.site/docs/docs-theme/start)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript

## Contributing

This is an alpha version of the Humanet documentation. We welcome contributions!

### Adding Pages

1. Create a new folder in the appropriate directory
2. Add a `page.mdx` file inside the folder
3. Update `_meta.json` to include the new page in navigation

Example:

```bash
# Create new page
mkdir app/concepts/new-concept
echo "# New Concept" > app/concepts/new-concept/page.mdx
```

```mdx
# app/concepts/new-concept/page.mdx
# New Concept

Your content here...
```

### Updating Navigation

Edit `_meta.json` files to control sidebar navigation:

```json
{
  "new-concept": "New Concept Title",
  "another-page": "Another Page"
}
```

## Styling

This site uses Tailwind CSS 4. The configuration files are:
- `app/globals.css` - Global styles with Tailwind import
- `tailwind.config.js` - Tailwind configuration
- `app/layout.tsx` - Root layout with Nextra theme components

## License

MIT License - see [LICENSE](LICENSE) file for details

## Links

- **Repository:** [github.com/TheFakeCreator/humanet-docs](https://github.com/TheFakeCreator/humanet-docs)
- **NPM Package:** [create-humanet](https://www.npmjs.com/package/create-humanet)
- **Template:** [.humanet template](https://github.com/TheFakeCreator/.humanet)
- **Live Documentation:** [humanet-docs](https://humanet-docs.vercel.app/)

---

Built with Nextra
