import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import ScrollProgressBar from '@/components/features/ScrollProgressBar';
import { motion } from 'framer-motion';
import LoadingFallback from './pages/LoadingFallback';

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



export default function App() {
  return (
    <BrowserRouter>

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
  
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
