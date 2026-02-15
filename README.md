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
pages/
├── index.mdx                    # Home page
├── getting-started.mdx          # Getting started guide
├── concepts/                    # Core concepts
│   ├── idea-repositories.mdx
│   ├── lifecycle-management.mdx
│   ├── idea-evolution.mdx
│   ├── knowledge-graph.mdx
│   ├── collaboration.mdx
│   └── quality-control.mdx
├── standards/                   # Standards & guidelines
│   ├── overview.mdx
│   ├── diagramming.mdx
│   └── documentation.mdx
├── guides/                      # How-to guides
│   ├── create-first-idea.mdx
│   ├── contributing.mdx
│   └── lifecycle-progression.mdx
└── reference/                   # Reference documentation
    ├── lifecycle-states.mdx
    ├── required-files.mdx
    └── evaluation-criteria.mdx
```

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Documentation:** [Nextra](https://nextra.site/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript

## Contributing

This is an alpha version of the Humanet documentation. We welcome contributions!

### Adding Pages

1. Create a new `.mdx` file in the appropriate directory
2. Add frontmatter with title
3. Update `_meta.json` to include the new page in navigation

Example:

```mdx
---
title: Your Page Title
---

# Your Page Title

Your content here...
```

### Updating Navigation

Edit `_meta.json` files to control sidebar navigation:

```json
{
  "page-slug": "Display Name",
  "another-page": "Another Page"
}
```

## Styling

This site uses Tailwind CSS. The theme configuration is in:
- `tailwind.config.js` - Tailwind configuration
- `theme.config.tsx` - Nextra theme configuration

## License

MIT License - see [LICENSE](LICENSE) file for details

## Links

- **Repository:** [github.com/TheFakeCreator/humanet-docs](https://github.com/TheFakeCreator/humanet-docs)
- **NPM Package:** [create-humanet](https://www.npmjs.com/package/create-humanet)
- **Template:** [.humanet template](https://github.com/TheFakeCreator/.humanet)
- **Live Documentation:** [Coming Soon]

---

Built with Nextra
