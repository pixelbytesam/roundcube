import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, Check, X, RockingChair, Rocket, MailCheck } from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import { SITE_CONFIG } from '@/constants/config';
import { useToast } from '@/hooks/use-toast';
import { FAQSection } from './Pricing';
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  whatsapp: 'yes' | 'no' | '';
  subject: string;
  budget: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: '', email: '', phone: '', whatsapp: '', subject: '', budget: '', message: '' };

function HeroBanner() {
  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-20 left-16 size-20 border-2 border-brand-primary/20 rounded-full" />
      <div className="absolute bottom-14 right-20 size-16 bg-brand-secondary/15 rounded-xl rotate-12" />
      <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Let's start{' '}
            <span className="text-brand-primary">building</span> together
          </h1>
          <p className="mt-5 text-lg text-brand-gray-300 max-w-2xl mx-auto text-center text-pretty">
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
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      // alert("Please fill required fields");
      toast({
        title: "Missing required fields",
        description: "Please fill in your name, email, and message before submitting.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_lbjl02q",
        "template_jdjmv54",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          whatsapp: form.whatsapp,
          subject: form.subject,
          budget: form.budget,
          message: form.message,
        },
        "D2oBYmXL3GTrHSXtZ"
      )
      .then(
        () => {
          setSubmitted(true);
          setForm(INITIAL_FORM);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => setSending(false));
  };

  const inputBase =
    'w-full px-4 py-3 text-[15px] bg-white border-2 border-brand-dark rounded-xl shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] placeholder:text-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-shadow';

  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Form / Success */}
          <div className="lg:col-span-7 animate-fade-up">
            {submitted ? (
              <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 md:p-10 shadow-brutal flex flex-col items-center justify-center text-center min-h-[420px] gap-6">
                <div className="size-16 flex items-center justify-center bg-brand-primary rounded-2xl border-2 border-brand-dark shadow-brutal-sm">
                  <MailCheck className="size-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">
                    Message received. <Rocket className="size-10 text-brand-primary inline-block " />
                  </h2>
                  <p className="text-brand-gray-500 text-sm max-w-sm mx-auto text-pretty">
                    We'll be in your inbox within 24 hours — usually much sooner. Sit tight, good things are coming.
                  </p>
                </div>
                <BrutalButton variant="primary" onClick={() => setSubmitted(false)}>
                  Send another message
                </BrutalButton>
              </div>
            ) : (
              <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 md:p-10 shadow-brutal">
                <h2 className="text-2xl font-bold text-brand-dark mb-1">Send us a message</h2>
                <p className="text-sm text-brand-gray-500 mb-6">
                  Fill in the details below and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Row 1 — Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Full Name <span className="text-brand-primary">*</span>
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
                        Email Address <span className="text-brand-primary">*</span>
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

                  {/* Row 2 — Phone & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Is this number on WhatsApp?
                      </label>
                      <div className="flex gap-3 mt-1">
                        {(['yes', 'no'] as const).map((val) => (
                          <label
                            key={val}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold border-2 rounded-xl cursor-pointer transition-all shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] select-none
                              ${form.whatsapp === val
                                ? 'bg-brand-primary text-white border-brand-dark'
                                : 'bg-white text-brand-dark border-brand-dark hover:bg-brand-cream'
                              }`}
                          >
                            <input
                              type="radio"
                              name="whatsapp"
                              value={val}
                              checked={form.whatsapp === val}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {val === "yes" ? (
                              <span className="flex items-center gap-1 text-green-600">
                                <Check className="size-4" />
                                Yes
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-red-600">
                                <X className="size-4" />
                                No
                              </span>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Row 3 — Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Service Needed
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="custom">Custom Software</option>
                        <option value="design">UI/UX Design</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="retainer">Hire Us / Retainer</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Approximate Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="">Select a range</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                        <option value="1l-3l">₹1,00,000 – ₹3,00,000</option>
                        <option value="3l-5l">₹3,00,000 – ₹5,00,000</option>
                        <option value="5l+">₹5,00,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4 — Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Tell us about your project <span className="text-brand-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, and any timeline or tech requirements..."
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
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 animate-fade-up stagger-2">
            <div className="space-y-6">

              {/* Contact info */}
              <div className="bg-brand-dark border-2 border-brand-dark rounded-2xl p-8 shadow-brutal text-white">
                <h3 className="text-xl font-bold mb-6">Get in touch directly</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@flatorbit.com' },
                    { icon: Phone, label: 'Phone', value: '+91 89653 28689' },
                    { icon: MapPin, label: 'Office', value: 'Pune, Maharashtra, India' },
                    { icon: Clock, label: 'Working Hours', value: 'Mon – Sat, 10am – 7pm IST' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="size-10 flex items-center justify-center bg-brand-primary rounded-lg shrink-0">
                        <Icon className="size-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-brand-gray-400">{label}</p>
                        <p className="font-semibold">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-white border-2 border-brand-dark rounded-2xl p-8 shadow-brutal">
                <h3 className="text-lg font-bold text-brand-dark mb-1">What happens next?</h3>
                <p className="text-sm text-brand-gray-500 mb-4">Here's our typical onboarding flow.</p>
                <ol className="space-y-3">
                  {[
                    'We review your message & reply within 24 hours',
                    '30-min discovery call to understand your needs',
                    'Detailed proposal with timeline & fixed estimate',
                    'Project kickoff within the week',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="size-6 flex items-center justify-center bg-brand-secondary text-brand-dark border border-brand-dark rounded-md text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-brand-gray-500 leading-relaxed">{step}</span>
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
      <FAQSection />
    </main>
  );
}