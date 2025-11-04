import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: "Buildspace s5 Grant",
    description: "Grant recipient from Buildspace Season 5",
    image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Buildspace",
    link: "#"
  },
  {
    title: "Patent (pending) @ Cloudflare",
    description: "Pending patent for embedded function calling",
    image: "https://via.placeholder.com/300x200/fb923c/ffffff?text=Cloudflare",
    link: "#"
  },
  {
    title: "Mentor @ Calhacks",
    description: "Mentored participants at Calhacks hackathon",
    image: "https://via.placeholder.com/300x200/60a5fa/ffffff?text=Calhacks",
    link: "#"
  },
  {
    title: "Neo Scholar finalist",
    description: "Selected as finalist for Neo Scholar program",
    image: "https://via.placeholder.com/300x200/a78bfa/ffffff?text=Neo",
    link: "#"
  },
  {
    title: "Winner #2, Calhacks",
    description: "Second place winner at Calhacks hackathon",
    image: "https://via.placeholder.com/300x200/34d399/ffffff?text=Winner",
    link: "#"
  },
  {
    title: "Winner #2, Sunhacks",
    description: "Second place winner at Sunhacks hackathon",
    image: "https://via.placeholder.com/300x200/fbbf24/ffffff?text=Sunhacks",
    link: "#"
  }
];

export const Achievements = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.link}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group block rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
