import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Linkedin, Rocket, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Social() {
  const comingSoonPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-purple-600 via-pink-600 to-orange-500",
      message: "Dropping fire content soon! 📸",
      tagline: "Visual stories that'll make you stop scrolling",
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "from-blue-400 to-blue-600",
      message: "Tech threads incoming! 🐦",
      tagline: "Hot takes, dev tips, and spicy memes",
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      message: "Tutorials loading... ⏳",
      tagline: "Code walkthroughs that actually make sense",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      message: "Professional mode: Activating 💼",
      tagline: "Career insights without the corporate cringe",
    },
  ];

  const funnyMemes = [
    {
      emoji: "👀",
      title: "Me preparing my first post",
      subtitle: "Opening VS Code to write the caption",
      reaction: "Peak developer behavior"
    },
    {
      emoji: "📈",
      title: "My content strategy:",
      subtitle: "1. Learn something cool\n2. Share it\n3. ???\n4. Followers",
      reaction: "It's that simple"
    },
    {
      emoji: "🎬",
      title: "Current status:",
      subtitle: "Recording my 47th take because I said 'um'",
      reaction: "Perfectionism hits different"
    },
    {
      emoji: "🚀",
      title: "Future me with 100K followers:",
      subtitle: "Still debugging at 3 AM",
      reaction: "Some things never change"
    },
    {
      emoji: "💡",
      title: "My content calendar:",
      subtitle: "Post when inspiration strikes (2 AM)",
      reaction: "Sleep is for the weak"
    },
    {
      emoji: "🎯",
      title: "Goal: Consistent posting",
      subtitle: "Reality: Posting when Mercury is in retrograde",
      reaction: "I'll get there... eventually"
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="text-8xl mb-6"
          >
            🎬
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Content Creator
            </span>
            <br />
            <span className="text-4xl md:text-5xl">In The Making 🔥</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Building in public. Learning in public. Growing in public.
            <br />
            <span className="text-primary font-semibold">Watch me level up! 📈</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block"
          >
            <Card className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-primary/30 shadow-[0_12px_48px_0_rgba(99,102,241,0.3)]">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Launching Soon™ (Actually this time!)
                  <Rocket className="h-5 w-5 text-primary" />
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Coming Soon Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Where You'll Find Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comingSoonPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <Card className="overflow-hidden bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_12px_48px_0_rgba(99,102,241,0.25)] h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-5`}></div>
                    
                    <CardContent className="relative p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className={`p-4 rounded-2xl bg-gradient-to-br ${platform.color} shadow-lg`}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-1">{platform.name}</h3>
                          <p className="text-sm text-muted-foreground italic">{platform.tagline}</p>
                        </div>
                      </div>
                      
                      <div className="text-center p-4 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20">
                        <p className="text-lg font-semibold text-primary">{platform.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Funny Memes Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">Meanwhile... 😄</h2>
            <p className="text-muted-foreground text-lg">My journey to becoming a content creator</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funnyMemes.map((meme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-xl border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_12px_48px_0_rgba(99,102,241,0.3)] h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3 + index * 0.5,
                      }}
                      className="text-6xl mb-4"
                    >
                      {meme.emoji}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{meme.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 whitespace-pre-line">{meme.subtitle}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold">
                      {meme.reaction}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-primary/30 shadow-[0_12px_48px_0_rgba(99,102,241,0.3)]">
            <CardContent className="p-12">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Zap className="h-16 w-16 mx-auto mb-4 text-primary" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Grind Never Stops 💪</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Currently cooking up something special. Building skills, gathering knowledge, 
                and preparing to share my journey with the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Progress: Loading...</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Rocket className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Launch: Coming Soon™</span>
                </div>
              </div>
              <p className="mt-6 text-primary font-bold text-xl">
                Stay tuned. It's gonna be worth the wait! 🚀
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
