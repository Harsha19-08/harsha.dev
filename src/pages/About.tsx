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
              src="/src/assets/harshaimage.png"
              alt="Harshavardhan"
              className="w-full h-[400px] object-cover"
              loading="lazy"
              decoding="async"
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
                Beyond building applications, I have a deep passion for <span className="text-foreground font-semibold">research 
                and algorithmic thinking</span>. I'm fascinated by the intricate workings of algorithms, dissecting 
                their efficiency, understanding their complexities, and discovering optimal solutions to challenging problems. 
                Every algorithm is a puzzle waiting to be solved, and I thrive on diving deep into data structures, 
                optimization techniques, and computational theory.
              </p>

              <p>
                What sets me apart is not just my technical skills, but my approach to problem-solving. 
                I don't just write code, I craft solutions that are elegant, maintainable, and built to last. 
                Every project is an opportunity to push boundaries and create something remarkable.
              </p>
              
              <p className="border-l-4 border-primary pl-4 italic text-foreground">
                "I sometimes wonder about not cracking IITs or NITs, those prestigious names everyone chases. 
                But here's what I've learned: <span className="font-semibold">I never regret the journey</span>. 
                I achieved something more valuable, an <span className="text-primary font-semibold">IIT-level skillset</span>, 
                real-world experience at top companies like Microsoft, and a career that I'm genuinely proud of. 
                The institution doesn't define you; your <span className="text-primary font-semibold">skills, dedication, and impact</span> do. 
                That's the real validation."
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
