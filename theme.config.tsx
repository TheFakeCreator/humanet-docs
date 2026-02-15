import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>Humanet</span>,
  project: {
    link: 'https://github.com/yourusername/humanet',
  },
  docsRepositoryBase: 'https://github.com/yourusername/humanet-docs',
  footer: {
    text: `© ${new Date().getFullYear()} Humanet. Built with Nextra.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Humanet',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Humanet Documentation" />
      <meta property="og:description" content="GitHub for Ideas + Notion for Structure + Obsidian's Knowledge Graph" />
    </>
  ),
  primaryHue: 190,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
