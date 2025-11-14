export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi. I'm Muddada <span className="text-primary">Harshavardhan</span>
            </h1>
            <span className="text-4xl">👋</span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop"
              alt="Profile"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">My Story</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                I'm a <span className="text-foreground font-semibold">passionate developer</span> who believes in the power of 
                code to transform ideas into reality. My journey in tech is driven by curiosity, creativity, 
                and an unwavering commitment to excellence.
              </p>

              <p>
                As a <span className="text-foreground font-semibold">Full Stack Developer</span>, I specialize in building 
                modern, scalable web applications that deliver exceptional user experiences. From crafting pixel-perfect 
                UIs to architecting robust backend systems, I thrive at every layer of the stack.
              </p>

              <p>
                My expertise spans across <span className="text-primary font-medium">React</span>, {" "}
                <span className="text-primary font-medium">TypeScript</span>, {" "}
                <span className="text-primary font-medium">Node.js</span>, and modern DevOps practices. 
                I'm constantly exploring emerging technologies and best practices to stay at the cutting edge 
                of web development.
              </p>

              <p>
                What sets me apart is not just my technical skills, but my approach to problem-solving. 
                I don't just write code—I craft solutions that are elegant, maintainable, and built to last. 
                Every project is an opportunity to push boundaries and create something remarkable.
              </p>

              <p>
                When I'm not immersed in code, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe in continuous 
                learning and the power of collaboration.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-bold mb-4">What Drives Me</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Creating intuitive, performant web applications that users love</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Mastering modern frameworks and architectural patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Contributing to meaningful projects that make a difference</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Collaborating with talented teams to build the future of the web</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
