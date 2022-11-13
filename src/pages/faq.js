import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import FAQ from 'sections/faq';

export default function FaqPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="FAQ | Rohcodes Contracts" />
          <FAQ />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
