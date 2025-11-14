export default function Resume() {
  const technicalSkills = {
    "Languages": ["Java", "C++", "C", "Python", "JavaScript", "MongoDB", "HTML", "CSS", "MySQL", "Node", "Express", "React", "Redux", "Git & Github"],
    "Technologies": ["AWS", "GCP", "Lamda", "IAM", "S3", "RDS", "VPS", "Cloud Computing", "Jenkins", "Docker", "CI/CD", "Nightwatch", "OOP"],
    "Core Concepts": ["Microservices", "Distributed Systems", "Agile Methodology", "Data Structures", "Algorithms", "DBMS", "Computer Networks"]
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">My Resume</h1>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">🎓</span> Education
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-lg">Bachelor of Technology in Computer Science & Engineering</h3>
                      <p className="text-primary font-medium">MLR Institute of Technology (MLRIT), Hyderabad</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">2022 - 2026</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">CGPA:</span> 8.8/10
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-lg">Intermediate (12th Grade)</h3>
                      <p className="text-primary font-medium">Narayana Junior College, Hyderabad</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">2020 - 2022</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Score:</span> 97%
                  </p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">💼</span> Experience
              </h2>
              
              <div className="space-y-6">
                {/* DRDO - ITR */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg flex items-center justify-center border border-white/20 p-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Defence_Research_and_Development_Organisation.svg/250px-Defence_Research_and_Development_Organisation.svg.png" 
                        alt="DRDO" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-lg">Research Trainee</h3>
                          <p className="text-primary font-medium">DRDO - ITR</p>
                          <p className="text-sm text-muted-foreground">Odissa</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">09/2025 - Current</span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                        <li>Conducting research on <strong className="text-foreground">deep neural networks (DNNs)</strong>, focusing on adversarial attacks, robustness evaluation, and adaptive model optimization using <strong className="text-foreground">RNN, GradMDM, SkipNet(Python)</strong></li>
                        <li>Designed and implemented <strong className="text-foreground">ML-based solutions</strong> for unmanned aerial vehicle <strong className="text-foreground">(UAV)</strong> routing and trajectory planning, supporting secure and reliable guidance systems for defense applications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Infosys */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg flex items-center justify-center border border-white/20 p-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/220px-Infosys_logo.svg.png" 
                        alt="Infosys" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-lg">Software Engineer, Intern</h3>
                          <p className="text-primary font-medium">Infosys</p>
                          <p className="text-sm text-muted-foreground">Hyderabad</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">10/2024 - 12/2024</span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                        <li>Developed and deployed <strong className="text-foreground">full-stack Python web applications</strong> using <strong className="text-foreground">Django</strong>, building <strong className="text-foreground">RESTful APIs</strong> and secure user authentication to support <strong className="text-foreground">500+ active users</strong> and scalable front-end user interfaces for a seamless user experience</li>
                        <li>Collaborated in an <strong className="text-foreground">agile virtual team</strong>, performing code reviews and version control with <strong className="text-foreground">Git</strong>, and applying <strong className="text-foreground">unit testing</strong> to ensure high-quality scalable software, leading to a <strong className="text-foreground">25% reduction</strong> in post-deployment bugs</li>
                      </ul>
                    </div>
                  </div>
                </div>                {/* Infosys */}
                {/* <div className="p-6 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-white/20">
                      <span className="text-3xl">�</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-lg">Software Engineer, Intern</h3>
                          <p className="text-primary font-medium">Infosys</p>
                          <p className="text-sm text-muted-foreground">Hyderabad</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">10/2024 - 12/2024</span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                        <li>Developed and deployed <strong className="text-foreground">full-stack Python web applications</strong> using <strong className="text-foreground">Django</strong>, building <strong className="text-foreground">RESTful APIs</strong> and secure user authentication to support <strong className="text-foreground">500+ active users</strong> and scalable front-end user interfaces for a seamless user experience</li>
                        <li>Collaborated in an <strong className="text-foreground">agile virtual team</strong>, performing code reviews and version control with <strong className="text-foreground">Git</strong>, and applying <strong className="text-foreground">unit testing</strong> to ensure high-quality scalable software, leading to a <strong className="text-foreground">25% reduction</strong> in post-deployment bugs</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
          </div>

          {/* Sidebar - Technical Skills */}
          <div className="space-y-8">
            <section className="sticky top-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">⚡</span> Technical Skills
              </h3>
              
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="p-4 rounded-xl border border-white/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg">
                    <h4 className="font-semibold text-sm text-primary mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 text-xs rounded-lg hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
