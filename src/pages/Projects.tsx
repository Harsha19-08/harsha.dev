import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: "🧠",
      title: "Supermemory",
      description: "AI second brain for your team. Supermemory is a tool that helps you capture, organize, and retrieve information from your team's conversations and documents.",
    },
    {
      icon: "🗄️",
      title: "Supermemory DB",
      description: "Vector database I made for Supermemory. Fully serverless and infinitely scalable by using Cloudflare R2 and Durable objects.",
    },
    {
      icon: "⚡",
      title: "Markdowner",
      description: "Converts websites to LLM-ready markdown data. I built this to help me with Supermemory.",
    },
    {
      icon: "🤖",
      title: "Discord Bot to Portfolio",
      description: "A discord bot that creates a website for yours as you talk to it.",
    },
    {
      icon: "📻",
      title: "Radish",
      description: "Super fast drop-in replacement of the in memory key-value store Redis, made in Golang",
    },
    {
      icon: "💬",
      title: "Lecture Chat",
      description: "A virtual TA that listens to the lecture and answers your doubts in real time.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Some cool stuff I've built</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="group hover:shadow-[0_12px_48px_0_rgba(99,102,241,0.2)] hover:border-primary/30 transition-all duration-300 cursor-pointer bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border-white/10 hover:bg-white/10 dark:hover:bg-white/5 hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                  <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
