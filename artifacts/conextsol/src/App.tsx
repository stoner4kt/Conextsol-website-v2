import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "@/pages/Home";
import ServicesHub from "@/pages/ServicesHub";
import ServicePage from "@/pages/ServicePage";
import About from "@/pages/About";
import BlogListing from "@/pages/BlogListing";
import BlogPost from "@/pages/BlogPost";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesHub} />
      <Route path="/services/:slug" component={ServicePage} />
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

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
