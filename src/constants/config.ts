import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export const SITE_CONFIG = {
  name: 'FlatOrbit',
  tagline: 'We Build Digital Products That Matter',
  description: 'Premium IT services agency specializing in web, mobile, and custom software development with bold design and cutting-edge technology.',
  email: 'support@flatorbit.com',
  phone: '+91-8965328689',
  address: '42 Pune, Maharashtra, India',
  social: {
    github: {
      url: "https://github.com/...",
      icon: Github,
    },
    instagram: {
      url: "https://instagram.com/...",
      icon: Twitter,
    },
    linkedin: {
      url: "https://linkedin.com/...",
      icon: Linkedin,
    },
    youtube: {
      url: "https://youtube.com/...",
      icon: Youtube,
    },


  },
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
];
