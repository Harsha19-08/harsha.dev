import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, FileText, Briefcase, MessageSquare, Code, ExternalLink, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "About", path: "/about" },
  { icon: FileText, label: "Blog", path: "/blog" },
  { icon: Briefcase, label: "Projects", path: "/projects" },
  { icon: Code, label: "Resume", path: "/resume" },
  { icon: MessageSquare, label: "Guestbook", path: "/guestbook" },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isResumePage = location.pathname === "/resume";
  const { toast } = useToast();
  
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  // Initialize EmailJS (you'll add your public key here)
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_SUBSCRIBER = import.meta.env.VITE_EMAILJS_TEMPLATE_SUBSCRIBER || "";
  const EMAILJS_TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN || "";
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || "22r21a12h1@mlrit.ac.in";

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    setSubscribing(true);
    try {
      // Check if email already exists
      const q = query(collection(db, "newsletter"), where("email", "==", email.trim().toLowerCase()));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        toast({
          title: "Already Subscribed!",
          description: "This email is already on our newsletter list.",
          variant: "default",
        });
        setSubscribing(false);
        return;
      }

      // Save to Firestore
      const docRef = await addDoc(collection(db, "newsletter"), {
        email: email.trim().toLowerCase(),
        subscribedAt: serverTimestamp(),
        source: "website_sidebar"
      });

      // Send confirmation email to subscriber (if EmailJS is configured)
      if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_SUBSCRIBER) {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_SUBSCRIBER,
            {
              to_email: email.trim(),
              to_name: email.split('@')[0],
              from_name: "Harsha"
            },
            EMAILJS_PUBLIC_KEY
          );
        } catch (emailError) {
          console.log("Email notification skipped:", emailError);
        }
      }

      // Send notification to admin (if EmailJS is configured)
      if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ADMIN) {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ADMIN,
            {
              to_email: ADMIN_EMAIL,
              subscriber_email: email.trim(),
              subscription_time: new Date().toLocaleString(),
            },
            EMAILJS_PUBLIC_KEY
          );
        } catch (emailError) {
          console.log("Admin notification skipped:", emailError);
        }
      }

      toast({
        title: "Successfully Subscribed! 🎉",
        description: "Check your inbox for a confirmation email.",
      });
      
      setEmail("");
      setSubscribed(true);
      
      // Reset subscribed state after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);

    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-background pb-20 md:pb-0">
      {/* Left Sidebar Navigation - Hidden on mobile, shown on larger screens */}
      <aside className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-16 lg:w-20 flex-col items-center py-8 gap-2 border-r border-white/10 bg-background/80 backdrop-blur-xl">
        {/* Profile Photo - Only on non-home pages - Glassy */}
        {!isHomePage && (
          <Link to="/" className="mb-2">
            <Avatar className="h-11 w-11 border-2 border-white/20 hover:border-primary/50 transition-all duration-300 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_0_rgba(99,102,241,0.2)] hover:scale-105">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>HV</AvatarFallback>
            </Avatar>
          </Link>
        )}

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "group relative flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur-md border transition-all duration-300",
                  isActive
                    ? "text-primary bg-primary/20 border-primary/30 shadow-[0_4px_16px_0_rgba(99,102,241,0.2)]"
                    : "text-muted-foreground bg-white/10 dark:bg-white/5 border-white/10 hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/20 hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.1)]"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="absolute left-full ml-4 px-3 py-1.5 bg-foreground/90 backdrop-blur-md text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle at Bottom */}
        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile Bottom Navigation - Fixed at bottom on mobile only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_16px_0_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around px-2 py-3 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl backdrop-blur-md border transition-all duration-300 min-w-[60px]",
                  isActive
                    ? "text-primary bg-primary/20 border-primary/30 shadow-[0_4px_12px_0_rgba(99,102,241,0.2)]"
                    : "text-muted-foreground bg-white/30 dark:bg-white/5 border-white/20 hover:text-foreground hover:bg-white/50 dark:hover:bg-white/10"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Wrapper - Responsive margins */}
      <div className="md:ml-16 lg:ml-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Mobile Theme Toggle - Top right on mobile, below grid */}
          <div className="md:hidden mb-4 flex justify-end">
            <ThemeToggle />
          </div>

          {/* Content Grid - Stack on mobile, side-by-side on large screens */}
          <div className={cn(
            "grid gap-6 lg:gap-8",
            !isResumePage ? "grid-cols-1 lg:grid-cols-[1fr_320px]" : "grid-cols-1"
          )}>
            {/* Page Content */}
            <main className="min-w-0 w-full">
              {children}
            </main>

            {/* Right Sidebar - Below content on mobile, side-by-side on large screens */}
            {!isResumePage && (
              <aside className="w-full lg:w-auto space-y-4 order-last lg:order-none">
                {/* Music Playlist Widget - Glassy */}
                <Card className="overflow-hidden border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.18)] transition-all duration-300">
                  <CardContent className="p-0">
                    <a 
                      href="https://open.spotify.com/playlist/5os8ovA7O1ywjWFhW7J4jT?si=ykMOU3K5R2S7f4ptmx9Zvw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-44 group cursor-pointer"
                    >
                      <img
                        src="/spotify.jpg"
                        alt="Music playlist"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-4 transition-all group-hover:from-black/100">
                        <p className="text-white font-bold text-sm leading-snug mb-1.5">
                          playlist: songs i was once hooked to
                        </p>
                        <p className="text-white/95 text-xs leading-relaxed">
                          these songs are the ones that I was atleast once in my life obsessed with. obsessed as in, listen to it on repeat kinda obsessed
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Welcome Message - Glassy */}
                <Card className="border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.18)] hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="text-2xl">👋</span>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">Thanks for visiting my site!</p>
                        <p className="font-semibold text-foreground text-sm">Glad to have you here.</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/10 space-y-2.5">
                      <Link to="/guestbook" className="text-primary hover:underline flex items-center gap-1.5 text-sm">
                        Leave a message on my guestbook
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                      <a href="mailto:mharshavardhan199@gmail.com" className="text-primary hover:underline flex items-center gap-1.5 text-sm">
                        Send an email
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a href="https://github.com/Harsha19-08" className="text-primary hover:underline flex items-center gap-1.5 text-sm">
                        Sponsor me on github
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter - Glassy */}
                <Card className="border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.18)] hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex -space-x-2 mb-3">
                      <div className="w-9 h-9 rounded-full border-2 border-background overflow-hidden">
                        <img 
                          src="https://i.pravatar.cc/150?img=1" 
                          alt="Subscriber"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-9 h-9 rounded-full border-2 border-background overflow-hidden">
                        <img 
                          src="https://i.pravatar.cc/150?img=2" 
                          alt="Subscriber"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-9 h-9 rounded-full border-2 border-background overflow-hidden">
                        <img 
                          src="https://i.pravatar.cc/150?img=3" 
                          alt="Subscriber"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-9 h-9 rounded-full border-2 border-background overflow-hidden">
                        <img 
                          src="https://i.pravatar.cc/150?img=4" 
                          alt="Subscriber"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground text-base">Subscribe to my newsletter!</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Follow my journey, I write about tech, my experiences and more.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-2.5 pt-1">
                      <Input 
                        placeholder="Your email..." 
                        className="h-10 text-sm border-border"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={subscribing || subscribed}
                      />
                      <Button 
                        type="submit"
                        className={cn(
                          "w-full h-10 text-sm font-semibold text-white transition-all",
                          subscribed 
                            ? "bg-green-500 hover:bg-green-600" 
                            : "bg-cyan-500 hover:bg-cyan-600"
                        )}
                        size="sm"
                        disabled={subscribing || subscribed}
                      >
                        {subscribing ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Subscribing...
                          </>
                        ) : subscribed ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Subscribed!
                          </>
                        ) : (
                          "Subscribe"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Content Creator */}
                <Card className="border-border">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground text-sm mb-2">I create content!</p>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1.5 text-sm">
                      Check out Harsha's Content
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </CardContent>
                </Card>
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
