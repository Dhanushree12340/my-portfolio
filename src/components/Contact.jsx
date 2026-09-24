import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'ugcet2502718@reva.edu.in';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      name: 'Email',
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      isExternal: false,
      icon: Mail,
      actionText: 'Send Email',
      description: 'Direct institutional email for inquiries and communication.',
      hasCopy: true,
    },
    {
      name: 'LinkedIn',
      value: 'dhanushree-gowda-7ba149410',
      href: 'https://www.linkedin.com/in/dhanushree-gowda-7ba149410/',
      isExternal: true,
      icon: Linkedin,
      actionText: 'Connect on LinkedIn',
      description: 'Professional networking and academic updates.',
    },
    {
      name: 'GitHub',
      value: 'github.com/Dhanushree12340',
      href: 'https://github.com/Dhanushree12340',
      isExternal: true,
      icon: Github,
      actionText: 'View GitHub Profile',
      description: 'Browse repositories, C source code, and solutions.',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Contact & Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Have questions about my projects or want to connect? Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{method.name}</h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-slate-800 break-all">
                    {method.value}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={method.href}
                    target={method.isExternal ? '_blank' : undefined}
                    rel={method.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                    aria-label={`${method.actionText}: ${method.value}`}
                  >
                    <span>{method.actionText}</span>
                    {method.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                  </a>

                  {method.hasCopy && (
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Message Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Open to Collaborative Learning & Academic Discussions
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Feel free to connect on LinkedIn or reach out via email. I will respond as soon as possible.
            </p>
          </div>
          <a
            href={`mailto:${emailAddress}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Write Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
