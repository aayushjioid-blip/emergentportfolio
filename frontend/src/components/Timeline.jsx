import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const Timeline = ({ timeline }) => {
  return (
    <section id="timeline" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Career Timeline</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="h-4 w-4" />
                      <span className="text-sm">{item.company}</span>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
