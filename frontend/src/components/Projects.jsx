import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
            <Briefcase className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">{project.role}</span> • {project.domain}
            </p>
            <p className="text-gray-700">{project.oneLiner}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="pt-4 border-t border-gray-100 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
              <p className="text-gray-700">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Approach</h4>
              <p className="text-gray-700">{project.approach}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
              <p className="text-gray-700">{project.outcome}</p>
            </div>
          </div>
        )}

        {/* Expand Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise product delivery across fintech, life sciences, and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
