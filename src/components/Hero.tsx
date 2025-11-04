import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Code } from 'lucide-react';
import { PixelGrid } from './PixelGrid';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Code, href: '#', label: 'Code' },
    { icon: Mail, href: 'mailto:hi@example.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:px-20 xl:px-32 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        <PixelGrid />
        
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-4">
          Hi, I'm
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          Dhravya Shah
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            I love{' '}
            <span className="inline-block">
              <span className="text-gradient">AI research</span>
            </span>
            <br />
            and infra
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">Founder and CEO</span>{' '}
            <a href="#" className="text-blue-500 hover:underline">
              supermemory
            </a>
          </p>
          
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Developer, 2x acquired Founder, Indie Hacker, OSS Contributor, Guitarist and Student. 
            I play read, write and travel for fun.
          </p>
          
          <p className="text-muted-foreground mt-4 leading-relaxed">
            dropped out from{' '}
            <a href="#" className="text-blue-500 hover:underline">ASU</a>
            {' '}and previously @ Workers AI and Devrel + building in OSS @{' '}
            <a href="#" className="text-blue-500 hover:underline">Cloudflare</a>
            ! I'm also a{' '}
            <a href="#" className="text-blue-500 hover:underline">Neo</a>
            {' '}Scholar finalist and co-founder of{' '}
            <a href="#" className="text-blue-500 hover:underline">devlabs</a>
            {' '}at ASU.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-muted-foreground">
          <p className="mb-2">... i like creating content too!</p>
          <div className="flex gap-4 text-sm">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <span className="text-pink-500">📷</span>
              <span>45k followers</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <span className="text-blue-400">🐦</span>
              <span>35k followers</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
