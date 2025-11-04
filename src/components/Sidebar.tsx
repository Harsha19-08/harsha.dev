import { Home, User, FileText, Briefcase, Mail } from 'lucide-react';

export const Sidebar = () => {
  const navItems = [
    { icon: Home, href: '#', label: 'Home' },
    { icon: User, href: '#about', label: 'About' },
    { icon: FileText, href: '#blog', label: 'Blog' },
    { icon: Briefcase, href: '#projects', label: 'Projects' },
    { icon: Mail, href: '#contact', label: 'Contact' },
  ];

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-6 p-4 bg-card/80 backdrop-blur-md rounded-lg border border-border">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={item.label}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </aside>
  );
};
