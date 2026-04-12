import React from 'react';
import { Award, GraduationCap, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 text-gray-900 opacity-[0.02] text-[10rem] lg:text-[16rem] font-display font-bold leading-none pointer-events-none">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-5 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Get to know me</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
            About
            <span className="block gradient-text">Me</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-24 bg-gray-900"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Summary */}
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {data.summary}
            </p>

            {/* Certifications Card */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover-lift">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-600 rounded-2xl shadow-lg">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Certifications</h3>
                  <ul className="space-y-3">
                    {data.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-lg text-gray-700 font-medium">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* AI Training Card */}
            {data.aiTraining && (
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover-lift">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-purple-600 rounded-2xl shadow-lg">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">AI Training</h3>
                    <ul className="space-y-3">
                      {data.aiTraining.map((training, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span className="text-lg text-gray-700 font-medium">{training}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )}

            {/* Education Card */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover-lift">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-purple-600 rounded-2xl shadow-lg">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Education</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-lg text-gray-700 font-medium">MBA — {data.education.mba}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-lg text-gray-700 font-medium">{data.education.undergrad}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid gap-6">
            {data.stats.map((stat, index) => {
              const colors = [
                'from-blue-500 to-indigo-600',
                'from-purple-500 to-pink-600',
                'from-emerald-500 to-teal-600'
              ];
              const bgColors = [
                'from-blue-50 to-indigo-50',
                'from-purple-50 to-pink-50',
                'from-emerald-50 to-teal-50'
              ];
              
              return (
                <Card 
                  key={index} 
                  className={`relative p-10 bg-gradient-to-br ${bgColors[index]} border-0 hover-lift overflow-hidden group`}
                >
                  {/* Background Number */}
                  <div className="absolute top-1/2 right-6 transform -translate-y-1/2 text-8xl font-display font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                    {stat.value}
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`inline-block text-7xl font-display font-bold bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent mb-3`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-lg font-semibold">{stat.label}</div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${colors[index]} opacity-10 rounded-tl-full`}></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
