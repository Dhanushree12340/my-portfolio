import React from 'react';
import { ArrowUpRight, FolderGit2, Mail, Github, Linkedin, BookOpen, Terminal } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>2nd Year Engineering • 3rd Semester</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dhanushree A R
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-blue-600 tracking-tight">
            2nd Year Engineering Student | C Programmer | Web Development Learner
          </p>

          {/* Genuine Student-focused Intro */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            I am an undergraduate engineering student currently in my 3rd semester, actively building
            a strong foundation in core computer programming and software development. My current focus
            is on mastering C programming, strengthening problem-solving skills, and learning modern
            web development to build clean, functional applications.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-sm transition-all duration-150 hover:shadow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-medium text-sm sm:text-base border border-slate-300 transition-all duration-150 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 shadow-xs"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Connect & Presence */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Quick Links:</span>
            <a
              href="https://github.com/Dhanushree12340"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dhanushree-gowda-7ba149410/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:ugcet2502718@reva.edu.in"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span>ugcet2502718@reva.edu.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
