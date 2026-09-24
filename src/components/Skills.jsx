import React, { useState } from 'react';
import {
  Terminal,
  Cpu,
  FileCode,
  Globe,
  Layers,
  Code2,
  Boxes,
  GitBranch,
  Github,
  Database,
} from 'lucide-react';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      {
        name: 'C',
        icon: Terminal,
        tag: 'Core Systems & Data Structures',
      },
      {
        name: 'Java',
        icon: Cpu,
        tag: 'Object-Oriented Programming',
      },
      {
        name: 'Python',
        icon: FileCode,
        tag: 'Scripting & Problem Solving',
      },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      {
        name: 'HTML',
        icon: Globe,
        tag: 'Semantic Markup & Web Structure',
      },
      {
        name: 'CSS',
        icon: Layers,
        tag: 'Responsive Styling & Layouts',
      },
      {
        name: 'JavaScript',
        icon: Code2,
        tag: 'Dynamic Scripting & Logic',
      },
      {
        name: 'React',
        icon: Boxes,
        tag: 'Component-Based UI Architecture',
      },
    ],
  },
  {
    category: 'Version Control & Databases',
    skills: [
      {
        name: 'Git',
        icon: GitBranch,
        tag: 'Version Control System',
      },
      {
        name: 'GitHub',
        icon: Github,
        tag: 'Repository Hosting & Collaboration',
      },
      {
        name: 'MySQL',
        icon: Database,
        tag: 'Relational Database Queries',
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
            Technical Skills
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Languages, Tools & Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A clear summary of the programming languages, web fundamentals, and development tools
            I work with and am currently learning.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {skillCategories.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skillIdx}
                      className="group p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-400 hover:bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          {skill.tag}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Continuous Learning */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between flex-wrap gap-3">
          <p className="text-xs sm:text-sm text-slate-600">
            <strong className="text-slate-800">Learning in Progress:</strong> Actively solving C algorithmic problems and building modular web components to expand practical proficiency.
          </p>
          <span className="text-xs font-medium text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-full">
            Engineering Coursework + Self-Study
          </span>
        </div>
      </div>
    </section>
  );
}
