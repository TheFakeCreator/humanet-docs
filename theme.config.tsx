import * as React from 'react';

const config = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>Humanet</span>,
  project: {
    link: 'https://github.com/TheFakeCreator/.humanet',
  },
  docsRepositoryBase: 'https://github.com/TheFakeCreator/humanet-docs/tree/main',
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
