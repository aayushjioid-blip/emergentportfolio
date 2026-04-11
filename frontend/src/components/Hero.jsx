import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // TODO: Implement actual resume download
    console.log('Download resume');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  {data.personal.role}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {data.hero.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {data.hero.subheadline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-200"
              >
                See my work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              {data.about.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={data.personal.avatar}
                  alt={data.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-6 py-4 border border-gray-100">
                <div className="text-sm text-gray-600">Based in</div>
                <div className="text-lg font-semibold text-gray-900">{data.personal.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
