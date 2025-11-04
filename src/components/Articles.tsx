import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  category?: string;
}

const articles: Article[] = [
  {
    title: "The FSE 150 experience: Best class of my life?",
    description: "This is my reflection on a class I took in my second semester at ASU. It is probably the best class of my life.",
    date: "APR 28, 2024",
    readTime: "5 MIN READ",
    image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=FSE+150"
  },
  {
    title: "Redis became closed source, so I made my own in Golang",
    description: "I shipped a drop-in replacement of the in memory key-value store Redis, made in Golang",
    date: "MAR 27, 2024",
    readTime: "3 MIN READ",
    image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Radish"
  },
  {
    title: "Solving my embarrassment and low attention span using AI",
    description: "I shipped an open source app that transcripts a lecture live with an instant chatbot whom I can ask all my doubts to",
    date: "FEB 12, 2024",
    readTime: "2 MIN READ",
    image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Lecture+Chat"
  }
];

export const Articles = () => {
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
    },
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Latest Articles
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="text-blue-500 hover:underline inline-flex items-center gap-2"
          >
            View all articles →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
