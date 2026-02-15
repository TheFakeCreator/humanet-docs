import type { ReactNode } from 'react';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import './globals.css';
 
export const metadata = {
  title: 'Humanet Documentation',
  description: 'GitHub for Ideas + Notion for Structure + Obsidian\'s Knowledge Graph',
};
 
const banner = <Banner storageKey="alpha-notice">Humanet is currently under active development. Not all features are available yet.</Banner>;
const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700, fontSize: '1.5rem' }}>Humanet</span>}
    projectLink="https://github.com/TheFakeCreator/.humanet"
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Humanet. Built with Nextra.</Footer>;
 
export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Humanet Documentation" />
        <meta property="og:description" content="GitHub for Ideas + Notion for Structure + Obsidian's Knowledge Graph" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/TheFakeCreator/humanet-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}