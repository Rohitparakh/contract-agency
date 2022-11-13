import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Testimonials from 'sections/testimonials';

export default function TestimonialsPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Testimonails | Rohcodes Contracts" />
          <Testimonials />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
