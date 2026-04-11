import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-16 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-4xl font-display font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {data.name.split(' ')[0]}
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Product Manager & Product Owner building impactful enterprise solutions across fintech, life sciences & infrastructure.
            </p>
            <div className="flex gap-4">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-xl transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 rounded-xl transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Projects', 'Skills', 'Timeline', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Location</h3>
            <p className="text-gray-400 mb-2">{data.location}</p>
            <p className="text-sm text-gray-500">Open to remote opportunities</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {data.name}. Crafted with React & Tailwind CSS.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-xl transition-all duration-300 group"
          >
            <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
