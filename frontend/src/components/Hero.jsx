import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="bg-text font-display">PRODUCT</div>
      </div>

      {/* Floating Badge */}
      <div className="absolute top-32 right-12 hidden lg:block">
        <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100 rotate-6 hover:rotate-12 transition-transform duration-300">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-900">5+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Year Badge */}
      <div className="absolute bottom-32 left-12 hidden lg:block">
        <div className="writing-mode-vertical transform rotate-180 text-sm font-medium text-gray-400 tracking-widest">
          2025
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Greeting */}
            <div className="space-y-6 fade-in-up">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-gray-900 leading-none">
                  Hello
                  <span className="inline-block ml-4 text-6xl lg:text-7xl">👋</span>
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-20 bg-blue-600"></div>
                  <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                    I'm {data.personal.name.split(' ')[0]}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
                {data.personal.tagline}
              </h2>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                {data.hero.subheadline}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 fade-in-up stagger-1">
              {data.about.stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-4xl lg:text-5xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-2">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white group text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-base px-8 py-6 rounded-full transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Role Badge */}
            <div className="inline-block fade-in-up stagger-3">
              <div className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium shadow-lg">
                {data.personal.role}
              </div>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end fade-in-up stagger-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
                {/* Decorative Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full"></div>
                
                {/* Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                  <img
                    src={data.personal.avatar}
                    alt={data.personal.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl p-4 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-2xl font-bold text-gray-900">4+</div>
                    <div className="text-xs text-gray-600 text-center">Enterprise Clients</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-900 rounded-2xl shadow-xl p-4 -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-2xl font-bold text-white">6</div>
                    <div className="text-xs text-gray-300 text-center">Domains</div>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-8 py-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Based in</div>
                    <div className="text-sm font-bold text-gray-900">{data.personal.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
