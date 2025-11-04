import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Supermemory",
    description: "AI second brain for your team. Supermemory is a tool that helps you capture, organize, and retrieve information from your team's conversations and documents.",
    link: "#"
  },
  {
    name: "Supermemory DB",
    description: "Vector database I made for Supermemory. Fully serverless and infinitely scalable by using Cloudflare R2 and Durable objects.",
    link: "#"
  },
  {
    name: "Markdowner",
    description: "Converts websites to LLM-ready markdown data. I built this to help me with Supermemory.",
    link: "#"
  },
  {
    name: "Discord Bot to Portfolio",
    description: "A discord bot that creates a website for yours as you talk to it.",
    link: "#"
  },
  {
    name: "Radish",
    description: "Super fast drop-in replacement of the in memory key-value store Redis, made in Golang",
    link: "#"
  },
  {
    name: "Lecture Chat",
    description: "A virtual TA that listens to the lecture and answers your doubts in real time.",
    link: "#"
  }
];

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Latest projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group block p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-muted-foreground">
            See a list of all my projects{' '}
            <a href="#" className="text-blue-500 hover:underline">
              On my projects page
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
