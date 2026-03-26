import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import ScrollProgressBar from '@/components/features/ScrollProgressBar';

const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const About = lazy(() => import('@/pages/About'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('@/pages/TermsConditions'));
const RefundPolicy = lazy(() => import('@/pages/RefundPolicy'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 flex justify-center items-center bg-brand-primary border-2 border-brand-dark rounded-xl shadow-brutal animate-pulse" >
          <span className='text-2xl text-white text-center'>N</span>
        </div>
        <p className="text-sm font-medium text-brand-gray-400">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollProgressBar />
        <Navbar />
        <div className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/refund" element={<RefundPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </div>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
