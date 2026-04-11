import React from 'react';
import { Lightbulb, Rocket, Search, BarChart, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const skillIcons = {
  'Product craft': Lightbulb,
  'Delivery & agile': Rocket,
  'Discovery & design': Search,
  'Analytics & data': BarChart
};

const Skills = ({ skills }) => {
  const colors = [
    { bg: 'from-blue-500 to-indigo-600', icon: 'bg-blue-600', card: 'from-blue-50 to-indigo-50', border: 'border-blue-200' },
    { bg: 'from-purple-500 to-pink-600', icon: 'bg-purple-600', card: 'from-purple-50 to-pink-50', border: 'border-purple-200' },
    { bg: 'from-emerald-500 to-teal-600', icon: 'bg-emerald-600', card: 'from-emerald-50 to-teal-50', border: 'border-emerald-200' },
    { bg: 'from-amber-500 to-orange-600', icon: 'bg-amber-600', card: 'from-amber-50 to-orange-50', border: 'border-amber-200' }
  ];

  return (
    <section id="skills" className="relative py-32 px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 opacity-[0.02] text-[12rem] lg:text-[20rem] font-display font-bold leading-none pointer-events-none">
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-5 py-2 mb-6">
            <Zap className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">What I bring to the table</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Skills &
            <span className="block gradient-text">Expertise</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-24 bg-gray-900"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillIcons[skillGroup.category] || Lightbulb;
            const color = colors[index % colors.length];
            
            return (
              <Card 
                key={index} 
                className={`p-8 bg-gradient-to-br ${color.card} border-2 ${color.border} hover-lift group`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 ${color.icon} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                {/* Category Title */}
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  {skillGroup.category}
                </h3>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {skillGroup.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 ${color.icon} rounded-full`}></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
