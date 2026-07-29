import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Router, Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';

// Pages
import Home from '@/pages/Home';
import ServicesHub from '@/pages/ServicesHub';
import ServicePage from '@/pages/ServicePage';
import Portfolio from '@/pages/Portfolio';
import PortfolioCaseStudy from '@/pages/PortfolioCaseStudy';
import About from '@/pages/About';
import BlogListing from '@/pages/BlogListing';
import BlogPost from '@/pages/BlogPost';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import NotFound from '@/pages/not-found';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesHub} />
      <Route path="/services/:slug" component={ServicePage} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:id" component={PortfolioCaseStudy} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={BlogListing} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

export function render(url: string) {
  const helmetContext: { helmet?: any } = {};
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router ssrPath={url}>
            <AppRouter />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
