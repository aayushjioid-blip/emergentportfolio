import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">AR</div>
            <p className="text-gray-400">
              Product Manager & Product Owner
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {data.name}. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
