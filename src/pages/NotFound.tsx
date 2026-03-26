import { ArrowRight } from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="text-center px-4">
        <div className="text-8xl md:text-9xl font-bold text-brand-dark/10 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Page Not Found</h1>
        <p className="text-brand-gray-500 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <BrutalButton to="/" variant="primary">
          Back to Home <ArrowRight className="size-4" />
        </BrutalButton>
      </div>
    </main>
  );
}
