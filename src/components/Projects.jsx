import React from 'react';
import { Shapes, FileEdit, Code2, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '2D Graphics Editor',
    icon: Shapes,
    badge: 'Console Application',
    summary: 'A C-based menu-driven 2D graphics editor using a 2D character-array canvas for rendering and geometric object manipulation.',
    features: [
      'Menu-driven interactive console interface',
      'Uses a 2D character-array as the rendering canvas',
      'Supports rendering circle, rectangle, line, and triangle',
      'Supports adding, deleting, modifying, and displaying objects',
    ],
    technologies: ['C'],
    githubUrl: 'https://github.com/Dhanushree12340/2D-Graphics-Editor',
  },
  {
    id: 2,
    title: 'Line Editor',
    icon: FileEdit,
    badge: 'Systems Utility',
    summary: 'A C-based line editor that enables users to create, manipulate, and persist text lines through structured file I/O operations.',
    features: [
      'Interactive text line creation and editing',
      'Supports line insert, delete, and modify operations',
      'Includes file save and load functionalities',
      'Structured buffer management written in C',
    ],
    technologies: ['C'],
    githubUrl: 'https://github.com/Dhanushree12340/Simple-Line-Editor-C',
  },
  {
    id: 3,
    title: 'LeetCode Solutions',
    icon: Code2,
    badge: 'Algorithms & Data Structures',
    summary: 'A structured repository of C programming solutions for data-structure and algorithmic problems, systematically maintained with Git and GitHub.',
    features: [
      'Algorithmic problem solutions implemented in C',
      'Covers fundamental data structures and problem patterns',
      'Version controlled and documented via Git commits',
      'Hosted and organized on GitHub for continuous practice',
    ],
    technologies: ['C', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Dhanushree12340/leetcode-solutions',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
            Featured Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Academic & Programming Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real implementations built in C and version controlled with Git, focusing on systems programming, data structures, and practical problem solving.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Bulleted Capabilities */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Meta & Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-4">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link / GitHub Action */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-medium text-xs sm:text-sm border border-slate-200 hover:border-blue-600 transition-all duration-150 group/btn"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
