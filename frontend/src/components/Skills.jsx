import React from 'react';
import { Lightbulb, Rocket, Search, BarChart } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const skillIcons = {
  'Product craft': Lightbulb,
  'Delivery & agile': Rocket,
  'Discovery & design': Search,
  'Analytics & data': BarChart
};

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => {
            const Icon = skillIcons[skillGroup.category] || Lightbulb;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    >
                      {item}
                    </Badge>
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
