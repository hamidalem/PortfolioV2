"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const PROJECTS = [
  {
    title: "Naftal DRA Expense",
    description: "Full Stack Web App",
    tech: ["Laravel", "Vue.js", "MySQL"],
    link: "https://github.com/hamidalem/NAFTAL_PFE2025",
    github: "https://github.com/hamidalem/NAFTAL_PFE2025",
    featured: true,
  },
  {
    title: "Laptop  Manager",
    description: "Manage a Laptop Store",
    tech: ["Laravel","React.js" ,"Tailwind CSS"],
    link: "https://github.com/hamidalem/LaptopManager",
    github: "https://github.com/hamidalem/LaptopManager",
    featured: true,
  },
  {
    title: "DecaPlast",
    description: "Stock Manager App",
    tech: ["Laravel", "Vue.js","electron.js"],
    link: "https://github.com/hamidalem/DecaPlast",
    github: "https://github.com/hamidalem/DecaPlast",
    featured: false,
  },
   {
    title: "Laptop Presenter",
    description: "An App to display the laptop Information in a laptop store",
    tech: ["Laravel", "Vue.js","electron.js"],
    link: "https://github.com/hamidalem/LaptopPresenter",
    github: "https://github.com/hamidalem/LaptopPresenter",
    featured: false,
  },
 
];

export default function WorksSection() {
  return (
    <section id="works" className="min-h-screen py-24 relative px-6 md:px-12 bg-obsidian">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4 flex items-center gap-4">
            <span className="text-neon-green">02.</span> Works
            <div className="h-px bg-gradient-to-r from-neon-green/50 to-transparent flex-grow ml-4"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Hacker-style hover effect background */}
              <div className="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/5 transition-colors duration-500 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-full glass p-8 rounded-xl border border-white/10 group-hover:border-neon-green/50 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-neon-green group-hover:scale-110 transition-transform duration-300">
                      <FolderGit2 size={40} strokeWidth={1.5} />
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} className="text-gray-400 hover:text-neon-green transition-colors" target="_blank" rel="noreferrer">
                          <Github size={22} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} className="text-gray-400 hover:text-neon-green transition-colors" target="_blank" rel="noreferrer">
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-3 font-mono text-sm">
                  {project.tech.map((t) => (
                    <li key={t} className="text-cyber-blue/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
