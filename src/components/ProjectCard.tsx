import React from 'react';
import { Calendar, MapPin, Building, ShieldCheck, Info } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 hover:border-[#f8c9c3] shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#9d3626]" />

      <div>
        {/* Placeholder tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <Info className="w-3 h-3 text-amber-600" />
            Project Information Coming Soon
          </span>
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {project.year}
          </span>
        </div>

        <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#9d3626] transition-colors mb-3">
          {project.name}
        </h3>

        {/* Key Info Points */}
        <div className="space-y-2 mb-4 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <Building className="w-3.5 h-3.5 text-[#9d3626] shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-slate-700">Department / Partner:</span>{' '}
              <span className="text-slate-500 italic">{project.organization}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#9d3626] shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-slate-700">Location:</span> {project.location}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9d3626] shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-slate-700">Doric Skills' Role:</span> {project.role}
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
          <p className="font-medium text-slate-800 mb-1">Objective Summary:</p>
          {project.objective}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="italic">Documentation Under Review</span>
        {onSelectProject && (
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="font-bold text-[#9d3626] hover:text-[#82291b] transition-colors"
          >
            View Scope →
          </button>
        )}
      </div>
    </div>
  );
};
