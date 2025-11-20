import { Github, Twitter, Linkedin, Mail, Instagram, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PixelGrid } from "@/components/PixelGrid";
import { motion } from "framer-motion";

export default function Home() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Harsha19-08", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/harsha_199", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harsh199/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mharshavardhan199@gmail.com", label: "Email" },
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Pixel Grid - Glassy */}
      <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.18)] transition-all duration-300">
        <PixelGrid />
      </div>

      {/* Introduction */}
      <div className="space-y-6">
        <div>
          <p className="text-muted-foreground mb-2">Hi, I'm <span className="text-primary font-semibold">Harsha</span></p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I craft <span className="text-blue-500">digital experiences</span> that{" "}
            <span className="text-green-500">inspire</span>
          </h1>
        </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Full Stack Developer & Creative Technologist</span>
                <span className="inline-flex items-center">✨ <span className="text-foreground font-medium">Building the Future</span></span>
              </p>
              
              <p className="leading-relaxed">
                Code architect, UI/UX enthusiast, Problem solver, and Innovation driver. 
                I transform ideas into elegant solutions that make a difference.
              </p>

              <p className="leading-relaxed">
                Passionate about <span className="text-foreground font-medium">cutting-edge technologies</span> and{" "}
                <span className="text-foreground font-medium">clean, scalable code</span>. 
                Specializing in <span className="text-primary font-medium">React</span>, {" "}
                <span className="text-primary font-medium">Node.js</span>, and{" "}
                <span className="text-primary font-medium">modern web architectures</span>. 
                I believe in creating experiences that are not just functional, but unforgettable.
              </p>
            </div>

            {/* Social Links & Download Resume - Side by Side */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              {/* Social Links - Left Side */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/30 hover:shadow-[0_8px_24px_0_rgba(99,102,241,0.2)] transition-all duration-300 hover:scale-110 active:scale-95"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              {/* Download Resume Button - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a
                  href="https://drive.google.com/file/d/18G5Bi6QuGthdpdBqmhX4h0jjD-uQsOsD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 via-green-500 to-white text-foreground font-semibold text-sm rounded-full overflow-hidden shadow-[0_4px_16px_0_rgba(59,130,246,0.3)] hover:shadow-[0_8px_24px_0_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
                >
                  {/* Animated background gradient on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white via-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Icon with animation */}
                  <motion.span
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <Download className="h-4 w-4" />
                  </motion.span>
                  
                  {/* Text */}
                  <span className="relative z-10">Download Resume</span>
                  
                  {/* Arrow with slide animation */}
                  <motion.span
                    className="relative z-10"
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                  
                  {/* Shine effect */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Social Stats - Links with Icons */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-3">... i like creating content too!</p>
              <div className="flex gap-6">
                <Link 
                  to="/social"
                  className="text-primary hover:text-primary/80 underline font-medium text-sm flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  45k followers
                </Link>
                <Link 
                  to="/social"
                  className="text-primary hover:text-primary/80 underline font-medium text-sm flex items-center gap-1.5 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  35k followers
                </Link>
              </div>
            </div>

            {/* Latest Articles - Glassy Cards */}
            <div className="pt-8">
              <h2 className="text-2xl font-bold mb-6">Featured Work & Insights</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "The Art of Clean Code: How Great Engineers Think Before They Type",
                    date: "Recent",
                    excerpt: "Deep dive into writing maintainable, elegant code that stands the test of time",
                    link: "https://medium.com/@mharshavardhan165/the-art-of-clean-code-how-great-engineers-think-before-they-type-1019931e34c1",
                  },
                  {
                    title: "My Microsoft SDE Internship Journey: A Tale of Resilience and Growth",
                    date: "Featured",
                    excerpt: "Real experiences, challenges, and lessons from interning at Microsoft",
                    link: "https://medium.com/@mharshavardhan165/my-microsoft-sde-internship-journey-a-tale-of-resilience-and-growth-4baf3ac95285",
                  },
                ].map((article, i) => (
                  <a
                    key={i}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary/30 hover:shadow-[0_8px_32px_0_rgba(99,102,241,0.15)] transition-all duration-300 group"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{article.date}</p>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
    </div>
  );
}
