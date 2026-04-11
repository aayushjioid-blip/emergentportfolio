import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Timeline = ({ timeline }) => {
  return (
    <section id="timeline" className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 text-gray-900 opacity-[0.02] text-[10rem] lg:text-[16rem] font-display font-bold leading-none pointer-events-none">
        JOURNEY
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 rounded-full px-5 py-2 mb-6">
            <Calendar className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">My Journey</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Career
            <span className="block gradient-text">Timeline</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-24 bg-gray-900"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const colors = [
                { badge: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200' },
                { badge: 'from-purple-500 to-pink-600', bg: 'from-purple-50 to-pink-50', border: 'border-purple-200' },
                { badge: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200' },
                { badge: 'from-amber-500 to-orange-600', bg: 'from-amber-50 to-orange-50', border: 'border-amber-200' }
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  } pl-20 md:pl-0`}>
                    <div className={`bg-gradient-to-br ${color.bg} border-2 ${color.border} rounded-2xl p-8 hover-lift`}>
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${color.badge} text-white rounded-full font-bold mb-4 shadow-lg`}>
                        <Calendar className="h-4 w-4" />
                        <span>{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3 leading-tight">
                        {item.event}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{item.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2">
                    <div className={`w-6 h-6 bg-gradient-to-r ${color.badge} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
