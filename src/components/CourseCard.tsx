import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onQuickEnquire?: (courseTitle: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onQuickEnquire }) => {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-200/90 hover:border-[#f8c9c3] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Course Image & Badge */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={course.heroImage}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-white/95 text-slate-800 shadow-xs backdrop-blur-xs">
            {course.category}
          </span>
          {course.isSampleCourse && (
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-[#9d3626] text-white shadow-xs">
              Sample Course
            </span>
          )}
        </div>
      </div>

      {/* Course Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#9d3626] transition-colors line-clamp-1 mb-2">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {course.shortDescription}
          </p>

          {/* Metadata Specs */}
          <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#9d3626] shrink-0" />
              <span className="truncate"><strong>Duration:</strong> {course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-[#9d3626] shrink-0" />
              <span className="truncate"><strong>Eligibility:</strong> {course.eligibility}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#9d3626] shrink-0" />
              <span className="truncate"><strong>Certification:</strong> Course Completion</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          {onQuickEnquire && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onQuickEnquire(course.title);
              }}
              className="text-xs font-semibold text-slate-700 hover:text-[#9d3626] transition-colors py-1.5 px-2.5 rounded hover:bg-slate-100"
            >
              Enquire
            </button>
          )}
          <Link
            to={`/courses/${course.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#9d3626] hover:bg-[#82291b] px-3.5 py-2 rounded-lg transition-colors shadow-xs"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
