import { Badge } from "@/components/ui/badge";
import { ExternalLink, Rocket } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Blog() {
  const categories = ["All Posts", "Java", "Performance", "Architecture", "Career Stories", "Coming Soon"];
  const [activeCategory, setActiveCategory] = useState("All Posts");
  
  const posts = [
    {
      date: "Published on Medium",
      badge: "CLEAN CODE",
      title: "The Art of Clean Code: How Great Engineers Think Before They Type",
      excerpt: "Deep dive into writing maintainable, elegant code that stands the test of time",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*6MpUux0FpH-EBter6AUU0Q.png",
      link: "https://medium.com/@mharshavardhan165/the-art-of-clean-code-how-great-engineers-think-before-they-type-1019931e34c1",
      category: "Architecture",
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      emoji: "🎯"
    },
    {
      date: "Published on Medium",
      badge: "JAVA PERFORMANCE",
      title: "Unlocking Java Performance: Understanding JVM Warm-up, JIT, and Microbenchmarking Like a Pro",
      excerpt: "Master the internals of Java performance optimization and JVM tuning",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*JR53sw_FdQtGNnA07F48iQ.jpeg",
      link: "https://medium.com/@mharshavardhan165/unlocking-java-performance-understanding-jvm-warm-up-jit-and-microbenchmarking-like-a-pro-88793493b577",
      category: "Java",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      emoji: "⚡"
    },
    {
      date: "Published on Medium",
      badge: "BIG DATA",
      title: "Kafka and Zookeeper: The Real-Time Heroes Behind Big Tech",
      excerpt: "Explore how distributed systems power real-time data processing at scale",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*TWx6VVub0ptqCejzKtLhpg.png",
      link: "https://medium.com/@mharshavardhan165/kafka-and-zookeeper-the-real-time-heroes-behind-big-tech-949826830c7b",
      category: "Architecture",
      gradient: "from-green-500/20 via-teal-500/20 to-cyan-500/20",
      emoji: "🚀"
    },
    {
      date: "Published on Medium",
      badge: "INTERNSHIP STORY",
      title: "My Microsoft SDE Internship Journey: A Tale of Resilience and Growth",
      excerpt: "Real experiences, challenges, and lessons from interning at Microsoft",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*-cAPSOapai_inSznHefzXg.jpeg",
      link: "https://medium.com/@mharshavardhan165/my-microsoft-sde-internship-journey-a-tale-of-resilience-and-growth-4baf3ac95285",
      category: "Career Stories",
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
      emoji: "💼"
    },
  ];

  const filteredPosts = activeCategory === "All Posts" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Blog</h1>
        <p className="text-muted-foreground mb-8">Sharing insights on engineering, performance, and career growth</p>

        {/* Category Filter - Glassy */}
        <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-white/10">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category
                ? "bg-primary/20 backdrop-blur-md border-primary/30 text-primary shadow-[0_4px_12px_0_rgba(99,102,241,0.2)] cursor-pointer" 
                : "hover:bg-white/10 dark:hover:bg-white/5 cursor-pointer backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-300"}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Coming Soon Message */}
        {activeCategory === "Coming Soon" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-primary/30 shadow-[0_12px_48px_0_rgba(99,102,241,0.3)]">
              <CardContent className="p-12 text-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="text-8xl mb-6"
                >
                  ✍️
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">More Content Brewing! ☕</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Currently crafting more technical deep dives, tutorials, and stories.
                  <br />
                  <span className="text-primary font-semibold">Stay tuned for weekly updates!</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-foreground">
                    <Rocket className="h-5 w-5 text-primary" />
                    <span className="font-semibold">New posts every week</span>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-muted-foreground">
                  💡 Tip: Check back under "All Posts" to see what's already published!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <>
            {/* Blog Posts - Glassy */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map((post, i) => (
                  <a
                    key={i}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row gap-6 p-5 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary/30 hover:shadow-[0_8px_32px_0_rgba(99,102,241,0.15)] transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Thumbnail - Gradient with Emoji */}
                    <div className={`flex-shrink-0 w-full sm:w-48 h-32 sm:h-28 rounded-lg overflow-hidden bg-gradient-to-br ${post.gradient} border border-white/20 group-hover:border-primary/30 transition-all duration-300 flex items-center justify-center backdrop-blur-md`}>
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                          {post.emoji}
                        </span>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 text-sm flex-wrap">
                        <time className="text-muted-foreground">{post.date}</time>
                        <Badge variant="outline" className="text-xs backdrop-blur-md border-white/20 bg-white/5">
                          {post.badge}
                        </Badge>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        {post.excerpt}
                        <ExternalLink className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">No posts in this category yet. Check back soon! 🚀</p>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
