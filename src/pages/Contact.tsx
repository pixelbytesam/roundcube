import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import { SITE_CONFIG } from '@/constants/config';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: '', email: '', subject: '', message: '' };

function HeroBanner() {
  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-20 left-16 size-20 border-2 border-brand-primary/20 rounded-full" />
      <div className="absolute bottom-14 right-20 size-16 bg-brand-secondary/15 rounded-xl rotate-12" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Let's start{' '}
            <span className="text-brand-primary">building</span> together
          </h1>
          <p className="mt-5 text-lg text-brand-gray-300 max-w-2xl text-pretty">
            Whether you have a fully fleshed-out spec or just a napkin sketch — we're here to listen and make it real.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please fill in all required fields.',
      });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm(INITIAL_FORM);
      toast({
        title: 'Message sent!',
        description: "We'll get back to you within 24 hours.",
      });
    }, 1200);
  };

  const inputBase =
    'w-full px-4 py-3 text-[15px] bg-white border-2 border-brand-dark rounded-xl shadow-brutal-sm placeholder:text-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-shadow';

  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 md:p-10 shadow-brutal">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputBase}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Select a topic</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="custom">Custom Software</option>
                    <option value="design">UI/UX Design</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and budget..."
                    rows={5}
                    className={`${inputBase} resize-none`}
                  />
                </div>
                <BrutalButton type="submit" variant="primary" className="w-full sm:w-auto">
                  {sending ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send className="size-4" />
                    </>
                  )}
                </BrutalButton>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5 animate-fade-up stagger-2">
            <div className="space-y-6">
              <div className="bg-brand-dark border-2 border-brand-dark rounded-2xl p-8 shadow-brutal text-white">
                <h3 className="text-xl font-bold mb-6">Get in touch directly</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="size-10 flex items-center justify-center bg-brand-primary rounded-lg shrink-0">
                      <Mail className="size-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-gray-400">Email</p>
                      <p className="font-semibold">{SITE_CONFIG.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 flex items-center justify-center bg-brand-primary rounded-lg shrink-0">
                      <Phone className="size-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-gray-400">Phone</p>
                      <p className="font-semibold">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 flex items-center justify-center bg-brand-primary rounded-lg shrink-0">
                      <MapPin className="size-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-gray-400">Office</p>
                      <p className="font-semibold">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-brand-dark rounded-2xl p-8 shadow-brutal">
                <h3 className="text-lg font-bold text-brand-dark mb-3">What happens next?</h3>
                <ol className="space-y-3">
                  {[
                    'We respond within 24 hours',
                    '30-min discovery call to understand your needs',
                    'Detailed proposal with timeline & estimate',
                    'Kickoff within the week',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="size-6 flex items-center justify-center bg-brand-secondary text-brand-dark border border-brand-dark rounded-md text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-brand-gray-500">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <main>
      <HeroBanner />
      <ContactForm />
    </main>
  );
}
