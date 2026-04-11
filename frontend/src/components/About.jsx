import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Summary */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.summary}
            </p>

            {/* Certifications */}
            <Card className="p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
                  <ul className="space-y-1">
                    {data.certifications.map((cert, index) => (
                      <li key={index} className="text-gray-700">{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                  <ul className="space-y-1">
                    <li className="text-gray-700">MBA — {data.education.mba}</li>
                    <li className="text-gray-700">{data.education.undergrad}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-1 gap-6">
            {data.stats.map((stat, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
