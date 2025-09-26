import TechnicalSpecification from "./pages/TechnicalSpecification";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Materials from "./pages/Materials";
import MaterialDetail from "./pages/MaterialDetail";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
// import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import CorporateIdentity from "./pages/CorporateIdentity";
import Search from "./pages/Search";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Benefits from "./pages/Benefits";
import GetQuote from "./pages/GetQuote";
import NotFound from "./pages/NotFound";
import CaseStudiesGlobal from "./pages/CaseStudiesGlobal";
import SafetyGuidelines from "./pages/SafetyGuidelines";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/materials/:slug" element={<MaterialDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/search" element={<Search />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/get-quote" element={<GetQuote />} />
              <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
              <Route path="/case-studies-global" element={<CaseStudiesGlobal />} />
              <Route path="/technical-specification" element={<TechnicalSpecification />} />
              <Route path="/corporate-identity" element={<CorporateIdentity />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
