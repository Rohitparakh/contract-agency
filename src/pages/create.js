import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Create from 'components/create/create';

export default function CreatePage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Create Contract | Rohcodes Contracts" />
          <Create/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
