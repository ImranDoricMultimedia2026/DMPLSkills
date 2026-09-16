import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  GraduationCap,
  Award,
  MapPin,
  CheckCircle2,
  Briefcase,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Calendar,
  Share2,
  ChevronRight,
  Layers
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { coursesData } from '../data/courses';

interface CourseDetailPageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const relatedCourses = coursesData.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div id="course-detail-page" className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Courses', href: '/courses' },
          { label: course.title }
        ]}
      />

      {/* 1. Course Hero */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#9d3626] text-white">
                  {course.category}
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-white/10 text-slate-200 border border-white/15">
                  {course.level} Level
                </span>
                {course.isSampleCourse && (
                  <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Sample Syllabus Framework
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {course.shortDescription}
              </p>

              {/* Quick Spec Pills */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
                  <span className="font-semibold text-white mt-0.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#9d3626]" /> {course.duration}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Mode</span>
                  <span className="font-semibold text-white mt-0.5 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#9d3626]" /> {course.mode}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Eligibility</span>
                  <span className="font-semibold text-white mt-0.5 truncate flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#9d3626]" /> 10th / 12th Pass
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                  <span className="font-semibold text-white mt-0.5 truncate flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#9d3626]" /> Partner Centers
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Hero CTA Card */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 text-slate-900 shadow-2xl border border-slate-200">
                <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-slate-100">
                  <img
                    src={course.heroImage}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">
                  Enroll in this Course
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Connect with a training advisor to check center availability, batch timings, and registration criteria.
                </p>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry(course.title)}
                  className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#9d3626] hover:bg-[#82291b] transition-colors shadow-md shadow-[#9d3626]/20 cursor-pointer"
                >
                  Enquire for This Course
                </button>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                  Structured Vocational Curriculum by DMPL Skills
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* 2. Course Overview */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9d3626] bg-[#fdf2f0] px-2.5 py-1 rounded inline-block mb-2">
                  Program Overview
                </span>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  About the Course
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {course.overview}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <strong className="text-slate-800 block mb-1">Official Minimum Eligibility:</strong>
                    {course.eligibility}
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <strong className="text-slate-800 block mb-1">Assessment & Certification:</strong>
                    {course.certification}
                  </div>
                </div>
              </div>

              {/* 3. Who Should Apply */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                  Who Should Apply
                </h3>
                <div className="space-y-3">
                  {course.whoShouldApply.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-[#fdf2f0] text-[#9d3626] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Learning Outcomes */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                  Key Learning Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9d3626] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Curriculum Breakdown (Modules) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9d3626] bg-[#fdf2f0] px-2.5 py-1 rounded inline-block mb-1">
                      Structured Syllabus
                    </span>
                    <h3 className="text-xl font-heading font-bold text-slate-900">
                      Course Curriculum
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {course.curriculum.length} Core Modules
                  </span>
                </div>

                <div className="space-y-4">
                  {course.curriculum.map((module, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#9d3626] text-white">
                          {module.weekOrModule}
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {module.title}
                        </span>
                      </div>

                      <ul className="space-y-1.5 pl-2">
                        {module.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="text-[#9d3626] mt-0.5">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Skills You'll Gain */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                  Competencies & Skills You'll Gain
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.skillsGained.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#fdf2f0] text-[#9d3626] font-semibold text-xs border border-[#f8c9c3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 7. Career Opportunities */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                  Career Pathways & Potential Job Roles
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Graduates of this vocational track are positioned for entry-level opportunities across commercial enterprises, studios, and service outlets:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.careerOpportunities.map((role, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 flex items-center gap-2.5 text-xs font-bold text-slate-800"
                    >
                      <Briefcase className="w-4 h-4 text-[#9d3626]" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-slate-500 mt-4 italic">
                  * Note: DMPL Skills provides practical competency training, mock interviews, and career counseling. In compliance with fair practices, guaranteed employment is not promised.
                </p>
              </div>

              {/* 8. Course FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {course.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-[#9d3626] shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs text-slate-600 mt-2 pl-6 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sticky Summary Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs sticky top-24">
                <h3 className="font-heading font-bold text-base text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  Course Factsheet
                </h3>

                <ul className="space-y-3.5 text-xs">
                  <li className="flex items-start justify-between gap-2">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-bold text-slate-800 text-right">{course.duration}</span>
                  </li>
                  <li className="flex items-start justify-between gap-2">
                    <span className="text-slate-500">Delivery Mode:</span>
                    <span className="font-bold text-slate-800 text-right">{course.mode}</span>
                  </li>
                  <li className="flex items-start justify-between gap-2">
                    <span className="text-slate-500">Skill Level:</span>
                    <span className="font-bold text-slate-800 text-right">{course.level}</span>
                  </li>
                  <li className="flex items-start justify-between gap-2">
                    <span className="text-slate-500">Eligibility:</span>
                    <span className="font-bold text-slate-800 text-right max-w-[180px]">{course.eligibility}</span>
                  </li>
                  <li className="flex items-start justify-between gap-2">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-slate-800 text-right">{course.location}</span>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(course.title)}
                    className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#9d3626] hover:bg-[#82291b] shadow-md shadow-[#9d3626]/20 transition-all cursor-pointer"
                  >
                    Enquire Now
                  </button>
                  <Link
                    to="/contact"
                    className="w-full block text-center py-2.5 rounded-lg text-xs font-bold text-slate-700 hover:text-[#9d3626] border border-slate-200 hover:border-[#9d3626] transition-colors"
                  >
                    Locate Nearest Training Center
                  </Link>
                </div>
              </div>

              {/* Related Courses */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h4 className="font-heading font-bold text-sm text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Other Recommended Courses
                </h4>
                <div className="space-y-3">
                  {relatedCourses.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/courses/${rel.slug}`}
                      className="group flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <img
                        src={rel.heroImage}
                        alt={rel.title}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#9d3626] line-clamp-1">
                          {rel.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">{rel.duration}</p>
                        <span className="text-[10px] font-bold text-[#9d3626] inline-flex items-center gap-0.5 mt-1">
                          Details <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-[#0a1128] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white">
            Have Questions About {course.title}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Submit an enquiry or call our student helpdesk to discuss admission procedures and batch schedules.
          </p>
          <button
            type="button"
            onClick={() => onOpenEnquiry(course.title)}
            className="px-6 py-3 rounded-lg font-bold text-sm text-white bg-[#9d3626] hover:bg-[#82291b]"
          >
            Apply / Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
};
