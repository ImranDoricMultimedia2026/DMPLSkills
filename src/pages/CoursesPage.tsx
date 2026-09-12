import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  Filter,
  RotateCcw,
  BookOpen,
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CourseCard } from '../components/CourseCard';
import { coursesData } from '../data/courses';
import { generalFaqs } from '../data/siteData';

interface CoursesPageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenEnquiry }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedMode, setSelectedMode] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  // Sync category param if URL changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = ['All', 'IT & Digital', 'Management & Retail', 'Services & Wellness'];
  const durations = ['All', '2 Months', '3 Months'];
  const modes = ['All', 'Classroom / In-Person'];
  const levels = ['All', 'Foundational'];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      // Search match
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skillsGained.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category match
      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      // Duration match
      const matchesDuration =
        selectedDuration === 'All' || course.duration.includes(selectedDuration);

      // Mode match
      const matchesMode =
        selectedMode === 'All' || course.mode === selectedMode;

      // Level match
      const matchesLevel =
        selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesDuration && matchesMode && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedDuration, selectedMode, selectedLevel]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedDuration('All');
    setSelectedMode('All');
    setSelectedLevel('All');
    setSearchParams({});
  };

  return (
    <div id="courses-page" className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: 'Courses & Programs' }]} />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#9d3626] text-white mb-3">
              Vocational Curricula Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white">
              Skill Development & Vocational Courses
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore hands-on training courses designed for job-readiness, digital literacy, service excellence, and entrepreneurship in India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Course Explorer */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Search & Category Filter bar */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs mb-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Search bar */}
              <div className="lg:col-span-6 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by course title, keyword, or skill (e.g. Graphic, Retail, SEO)..."
                  className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#9d3626]/20 focus:border-[#9d3626]"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-600 font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Quick Tabs */}
              <div className="lg:col-span-6 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (cat === 'All') setSearchParams({});
                      else setSearchParams({ category: cat });
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#9d3626] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub Filters: Duration, Mode, Level */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Filter className="w-3.5 h-3.5 text-[#9d3626]" />
                  <span>Filters:</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Duration:</span>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="py-1 px-2.5 rounded-md border border-slate-200 bg-slate-50 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#9d3626]"
                  >
                    {durations.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Mode */}
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Mode:</span>
                  <select
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                    className="py-1 px-2.5 rounded-md border border-slate-200 bg-slate-50 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#9d3626]"
                  >
                    {modes.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Level */}
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Level:</span>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="py-1 px-2.5 rounded-md border border-slate-200 bg-slate-50 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#9d3626]"
                  >
                    {levels.map((lvl) => (
                      <option key={lvl} value={lvl}>{lvl}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reset Filters button */}
              {(searchTerm || selectedCategory !== 'All' || selectedDuration !== 'All' || selectedMode !== 'All' || selectedLevel !== 'All') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#9d3626]"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Results Summary & Grid */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-600">
              Showing <span className="text-[#9d3626] font-bold">{filteredCourses.length}</span> Course Curricula
            </p>
            <span className="text-[11px] text-slate-500 italic">
              * Sample course listings formatted for rapid organizational adaptation
            </span>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onQuickEnquire={onOpenEnquiry}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No matching courses found</h3>
              <p className="text-xs text-slate-600">
                Try clearing your search terms or resetting the active filters to see all available vocational programs.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#9d3626] hover:bg-[#82291b]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Courses FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9d3626] bg-[#fdf2f0] px-3 py-1 rounded inline-block">
              Course Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight mt-2">
              Frequently Asked Questions About Courses
            </h2>
          </div>

          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white transition-colors"
              >
                <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#9d3626] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0a1128] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Need Guidance on Choosing the Right Course?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our admissions counselors can evaluate your current qualification, discuss local market demands, and recommend the best vocational track.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 rounded-lg font-bold text-sm text-white bg-[#9d3626] hover:bg-[#82291b] shadow-md shadow-[#9d3626]/30 cursor-pointer"
            >
              Speak with a Counselor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
