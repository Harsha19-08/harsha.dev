import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ExternalLink, 
  Wallet, 
  GraduationCap, 
  Search, 
  Coffee, 
  FileText, 
  Bitcoin, 
  Brain, 
  CheckSquare, 
  Shield, 
  BookOpen, 
  Zap, 
  Radio 
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: Wallet,
      title: "Financial Tracker",
      description: "Full-stack expense management application with real-time tracking, budget planning, and analytics. Built with React, Node.js, and MongoDB for seamless financial oversight.",
      link: "https://github.com/Harsha19-08/Financial-Tracker",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      icon: GraduationCap,
      title: "CollegeChariot",
      description: "Smart college transportation management system streamlining campus commute with route optimization, real-time tracking, and student scheduling features.",
      link: "https://github.com/Harsha19-08/CollegeChariot",
      tags: ["Full Stack", "Transportation", "Optimization"]
    },
    {
      icon: Search,
      title: "Scoping Platform",
      description: "Project scoping and estimation tool for software development teams. Automates project breakdown, time estimation, and resource allocation with AI-powered insights.",
      link: "https://github.com/Harsha19-08/scoping",
      tags: ["AI", "Project Management", "Automation"]
    },
    {
      icon: Coffee,
      title: "Java Portfolio",
      description: "Comprehensive collection of Java projects showcasing OOP principles, data structures, algorithms, and design patterns with clean, production-ready code.",
      link: "https://github.com/Harsha19-08/Java-Portfolio",
      tags: ["Java", "OOP", "Algorithms"]
    },
    {
      icon: FileText,
      title: "Grievance Handling System",
      description: "Enterprise-grade complaint management platform with ticketing system, workflow automation, and analytics dashboard for efficient issue resolution.",
      link: "https://github.com/Harsha19-08/Grievance-Handling-System",
      tags: ["Enterprise", "Workflow", "Dashboard"]
    },
    {
      icon: Bitcoin,
      title: "CryptoFullStack",
      description: "Cryptocurrency portfolio tracker with real-time price updates, market analytics, and trading insights. Features secure authentication and responsive design.",
      link: "https://github.com/Harsha19-08/CryptoFullStack",
      tags: ["Crypto", "Real-time", "Analytics"]
    },
    {
      icon: Brain,
      title: "Predicting Dyslexia",
      description: "ML-powered early detection system for dyslexia using NLP and cognitive assessment patterns. Helps educators identify learning disabilities proactively.",
      link: "https://github.com/Harsha19-08/PredictingDyslexia",
      tags: ["Machine Learning", "NLP", "Healthcare"]
    },
    {
      icon: CheckSquare,
      title: "Todo List Application",
      description: "Feature-rich task management app with drag-and-drop, priority levels, categories, and due date reminders. Clean UI with local storage persistence.",
      link: "https://github.com/Harsha19-08/Todo-List",
      tags: ["React", "Productivity", "UI/UX"]
    },
    {
      icon: Shield,
      title: "Strong Password Generator",
      description: "Secure password generation tool with customizable complexity, strength analysis, and encryption. Includes password manager integration and security best practices.",
      link: "https://github.com/Harsha19-08/StrongPassword_Generator",
      tags: ["Security", "Encryption", "Utility"]
    },
    {
      icon: BookOpen,
      title: "Library Management System",
      description: "Complete library automation system built with Java. Features book cataloging, member management, circulation tracking, and fine calculation with intuitive GUI.",
      link: "https://github.com/Harsha19-08/JavaPrjct_LibraryManagement",
      tags: ["Java", "Database", "GUI"]
    },
    {
      icon: Zap,
      title: "Markdowner",
      description: "Converts websites to LLM-ready markdown data. I built this to help me with Supermemory.",
      link: "#",
      tags: ["Markdown", "Web Scraping", "LLM"]
    },
    {
      icon: Radio,
      title: "Radish",
      description: "Super fast drop-in replacement of the in memory key-value store Redis, made in Golang",
      link: "#",
      tags: ["Golang", "Database", "Performance"]
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Some cool stuff I've built</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="group hover:shadow-[0_12px_48px_0_rgba(99,102,241,0.2)] hover:border-primary/30 transition-all duration-300 cursor-pointer bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border-white/10 hover:bg-white/10 dark:hover:bg-white/5 hover:scale-[1.02] h-full"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
