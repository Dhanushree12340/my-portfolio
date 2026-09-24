import React from 'react';
import { BookOpen, Terminal, Globe, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Academic Status',
      description: '2nd Year Engineering Student currently in the 3rd Semester, pursuing foundational engineering concepts.',
    },
    {
      icon: Terminal,
      title: 'C Programming',
      description: 'Strengthening programming logic, memory structures, and algorithmic fundamentals using C.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Learning modern web development principles to build responsive, accessible, and clean user interfaces.',
    },
    {
      icon: Code2,
      title: 'Practical Application',
      description: 'Developing practical skills by building hands-on academic projects and solving programming problems.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
            About Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Engineering Student & Aspiring Developer
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A concise overview of my academic background, programming journey, and technical focus.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base leading-relaxed">
            <p>
              I am Dhanushree A R, a <strong className="text-slate-900 font-semibold">2nd Year Engineering Student</strong> currently in my <strong className="text-slate-900 font-semibold">3rd Semester</strong>. My academic journey is centered around developing solid programming fundamentals and understanding how software systems work from the ground up.
            </p>
            <p>
              I am actively learning <strong className="text-slate-900 font-semibold">C programming</strong>, focusing on procedural programming logic, pointers, memory management, and data structures. Concurrently, I am expanding my technical breadth into <strong className="text-slate-900 font-semibold">web development</strong>, exploring how to structure, style, and build interactive web applications.
            </p>
            <p>
              Rather than just studying theoretical concepts, I prioritize <strong className="text-slate-900 font-semibold">building programming and academic projects</strong>. Through project development and consistent problem solving, I strive to develop practical coding habits, clean logic, and a dependable engineering mindset.
            </p>

            <div className="pt-3">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3.5">
                <span className="p-2 rounded-lg bg-blue-600 text-white shrink-0">
                  <Terminal className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Current Academic Objective</h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-600">
                    Deepen core data structures knowledge, complete hands-on C utilities, and continue learning component-driven web interfaces with React and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all duration-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
