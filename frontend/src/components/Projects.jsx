import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = [
    { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700' },
    { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', icon: 'bg-purple-600', badge: 'bg-purple-100 text-purple-700' },
    { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', icon: 'bg-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
    { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'bg-amber-600', badge: 'bg-amber-100 text-amber-700' }
  ];

  const color = colors[index % colors.length];

  return (
    <Card className={`relative overflow-hidden hover-lift bg-gradient-to-br ${color.bg} border-2 ${color.border} transition-all duration-300`}>
      {/* Project Number */}
      <div className="absolute top-6 right-6 text-6xl font-display font-bold opacity-10">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="p-8 relative z-10">
        {/* Header */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className={`p-4 ${color.icon} rounded-2xl shadow-lg`}>
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-700">{project.role}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{project.domain}</span>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
              <ArrowUpRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {project.oneLiner}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <Badge 
              key={idx} 
              variant="secondary" 
              className={`${color.badge} border-0 px-4 py-1.5 text-sm font-medium rounded-full`}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Problem</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.problem}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Approach</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.approach}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Outcome</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
              </div>
            </div>
          </div>
        )}

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-6 bg-white/70 hover:bg-white rounded-xl font-medium text-gray-900 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Read case study <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </Card>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 text-gray-900 opacity-[0.02] text-[12rem] lg:text-[20rem] font-display font-bold leading-none pointer-events-none">
        WORK
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-gray-700" />
            <span className="text-sm font-semibold text-gray-700">Featured Work</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Selected
            <span className="block gradient-text">Projects</span>
          </h2>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gray-900"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enterprise product delivery across fintech, life sciences, and infrastructure
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`fade-in-up stagger-${Math.min(index + 1, 4)}`}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Interested in seeing more details?</p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6 text-base font-semibold transition-all duration-300"
          >
            View Full Portfolio
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
