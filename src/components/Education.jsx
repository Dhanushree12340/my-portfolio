import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
            Academic Background
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Current undergraduate degree program and academic standing.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      Undergraduate
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                      Currently Enrolled
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                    Engineering
                  </h3>
                  <p className="text-base font-semibold text-blue-600 mt-1">
                    2nd Year, 3rd Semester
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">
              <p>
                Currently undertaking second-year core engineering curriculum, focusing on foundational principles of computer science, programming logic, data structures, and computational thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
