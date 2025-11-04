import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Subscribe', href: '#guestbook' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Mail, href: 'mailto:hi@example.com', label: 'Email', color: 'hover:text-red-400' },
  ];

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Additional Links</h3>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              Thanks for visiting my site! Glad to have you here.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href="#guestbook" className="text-blue-500 hover:underline">
                Leave a message on my guestbook
              </a>
              <span className="text-muted-foreground">·</span>
              <a href="mailto:hi@example.com" className="text-blue-500 hover:underline">
                Send an email
              </a>
              <span className="text-muted-foreground">·</span>
              <a href="#sponsor" className="text-blue-500 hover:underline">
                Sponsor me on github
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-muted-foreground text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> © {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};
