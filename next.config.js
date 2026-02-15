import nextra from 'nextra';

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
});

export default withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  }
});
