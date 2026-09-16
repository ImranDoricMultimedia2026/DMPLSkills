import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Building2,
  Calendar,
  ArrowRight,
  Shield,
  TrendingUp,
  Briefcase,
  Award,
  Play,
} from 'lucide-react';



interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Pradhan Mantri Kaushal Vikas Yojana',
      subtitle: 'PMKVY 4.0',
      description:
        "Government of India's flagship skill development initiative. Empowering youth with industry-relevant training and nationally recognised certification.",
      image: '/Images/BannerSlide/dmpl-pmkvy-4-0-skill-development-training1.png',
      stats: [
        { label: 'Trainees Trained', value: '14,256+', icon: <Users className="w-4 h-4" /> },
        { label: 'Successfully Placed', value: '8,902+', icon: <Briefcase className="w-4 h-4" /> },
        { label: 'Active Programs', value: '25+', icon: <Calendar className="w-4 h-4" /> },
      ],
      ctaText: 'Explore PMKVY Projects',
      ctaLink: '/projects/pmkvy-4-0',
    },
    {
      id: 2,
      title: 'Skill Development Programs',
      subtitle: 'Ministry of Minority Affairs',
      description:
        'Seekho Aur Kamao, Nai Manzil & Gharib Nawaz — specialised initiatives focused on skill enhancement and sustainable livelihood generation.',
      image:
        '/Images/BannerSlide/dmpl-skills-minority-affairs-skill-development.jpg',
      stats: [
        { label: 'Minority Programs', value: '6', icon: <Building2 className="w-4 h-4" /> },
        { label: 'Total Trained', value: '4,270+', icon: <Users className="w-4 h-4" /> },
        { label: 'Placement Rate', value: '74%', icon: <TrendingUp className="w-4 h-4" /> },
      ],
      ctaText: 'View Minority Programs',
      ctaLink: '/projects/ministry-of-minority-affairs',
    },
    {
      id: 3,
      title: 'State Skill Development Missions',
      subtitle: 'Punjab • Haryana • Assam',
      description:
        'Collaborative training programs with Punjab, Haryana and Assam Skill Development Missions delivering job-ready skills at scale.',
      image:
        '/Images/BannerSlide/dmpl-skills-state-skill-development-missions1.png',
      stats: [
        { label: 'State Programs', value: '15+', icon: <Building2 className="w-4 h-4" /> },
        { label: 'Trainees Trained', value: '3,400+', icon: <Users className="w-4 h-4" /> },
        { label: 'Placement Rate', value: '68%', icon: <TrendingUp className="w-4 h-4" /> },
      ],
      ctaText: 'See State Programs',
      ctaLink: '/projects',
    },
    {
      id: 4,
      title: 'National Skill Development',
      subtitle: "Building India's Workforce",
      description:
        'Comprehensive training ecosystem aligned with National Skill Development Mission, NSDC standards and real industry demand.',
      image:
        '/Images/BannerSlide/dmpl-skills-national-skilled-workforce.jpg',
      stats: [
        { label: 'Total Programs', value: '50+', icon: <Award className="w-4 h-4" /> },
        { label: 'Industry Partners', value: '100+', icon: <Briefcase className="w-4 h-4" /> },
        { label: 'Certification', value: 'NSDC Aligned', icon: <Shield className="w-4 h-4" /> },
      ],
      ctaText: 'View All Programs',
      ctaLink: '/projects',
    },
  ];

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
  }, [isPaused, slides.length]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevSlide();
      if (e.key === 'ArrowRight') goToNextSlide();
      
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const changeSlide = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 600);
    startAutoPlay();
  };

  const goToNextSlide = () => changeSlide((currentSlide + 1) % slides.length);
  const goToPrevSlide = () => changeSlide((currentSlide - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => changeSlide(index);

  const current = slides[currentSlide];

  return (

<>

<section
  id="hero-section"
  className="relative overflow-hidden bg-gradient-to-b from-[#173a68] via-[#102d55] to-[#0a203d] text-white"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  {/* Tricolor accent */}
  <div className="absolute top-0 left-0 right-0 h-1.5 flex z-20" aria-hidden="true">
    <span className="flex-1 bg-[#ff9933]" />
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#138808]" />
  </div>

  {/* Background pattern + glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5rem_5rem]" />
    <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-[#ff9933]/10" />
    <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full border border-[#ff9933]/8" />
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#ff9933]/10 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#ff9933]/5 blur-3xl" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[540px]">

      {/* LEFT CONTENT */}
      <div
        key={current.id}
        className="space-y-6 animate-fadeIn"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#ff9933] shadow-[0_0_12px_rgba(255,153,51,0.8)] animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-white/90">
            Skill Development & Training Projects
          </span>
        </div>

        {/* Subtitle + Title */}
        <div>
          <p className="text-sm sm:text-base font-semibold text-[#ff9933] uppercase tracking-[0.18em] mb-3">
            {current.subtitle}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] xl:text-[3.35rem] font-bold leading-[1.15] tracking-tight text-white">
            {current.title}
          </h1>
        </div>

        <p className="text-base sm:text-lg text-blue-100/85 max-w-xl leading-relaxed">
          {current.description}
        </p>

        {/* Stats */}
        {current.stats && (
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            {current.stats.map((stat, i) => (
              <div
                key={i}
                className="group bg-white/[0.055] hover:bg-white/[0.1] backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-[#ff9933]/35 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-1.5 text-[#ff9933] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                  {stat.icon}
                  <span className="truncate">{stat.label}</span>
                </div>

                <p className="text-base sm:text-xl font-bold text-white mt-1.5 truncate">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {current.ctaText && (
            <Link
              to={current.ctaLink || '/projects'}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#102d55] bg-[#ff9933] hover:bg-[#ffad4d] shadow-[0_8px_24px_rgba(255,153,51,0.25)] hover:shadow-[0_12px_32px_rgba(255,153,51,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {current.ctaText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
    {/* RIGHT IMAGE */}
<div className="relative">
  <div className="relative rounded-2xl overflow-hidden border border-white/10">
    <img
      src={current.image}
      alt={current.title}
      className="w-full h-72 sm:h-80 lg:h-[430px] object-cover transition-all duration-700"
    />

    {/* Bottom info card */}
    <div className="absolute bottom-5 left-5 right-5">
      <div className="bg-[#0b2547]/80 backdrop-blur-md rounded-xl p-4 border border-white/15">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#ff9933]/15 border border-[#ff9933]/25 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-[#ff9933]" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#ff9933]">
              Skill Development
            </p>
            <p className="text-xs text-blue-100/70 mt-0.5">
              Industry-aligned • NSDC Certified Training
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Floating badge */}
  <div className="absolute -top-4 -right-4 hidden sm:flex items-center justify-center w-[68px] h-[68px] rounded-2xl bg-[#ff9933] text-[#102d55] shadow-[0_14px_35px_rgba(255,153,51,0.35)] border-[5px] border-[#102d55]">
    <div className="text-center">
      <Award className="w-5 h-5 mx-auto mb-0.5" />
      <p className="text-[9px] font-bold uppercase tracking-wide">
        Skills
      </p>
    </div>
  </div>
</div>
    </div>

    {/* Navigation arrows */}
    <button
      type="button"
      onClick={goToPrevSlide}
      className="absolute top-1/2 -translate-y-1/2 left-3 lg:left-5 z-20 w-11 h-11 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-white hover:bg-[#ff9933] hover:border-[#ff9933] hover:text-[#102d55] transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-105"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>

    <button
      type="button"
      onClick={goToNextSlide}
      className="absolute top-1/2 -translate-y-1/2 right-3 lg:right-5 z-20 w-11 h-11 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-white hover:bg-[#ff9933] hover:border-[#ff9933] hover:text-[#102d55] transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-105"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>

    {/* Dots + counter */}
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
      {slides.map((_, index) => (
        <button
          type="button"
          key={index}
          onClick={() => goToSlide(index)}
          className={`rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'w-9 h-2.5 bg-[#ff9933] shadow-[0_0_12px_rgba(255,153,51,0.5)]'
              : 'w-2.5 h-2.5 bg-white/35 hover:bg-white/60'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    <div className="absolute bottom-5 right-4 lg:right-8 z-20 text-xs text-white/45 font-mono tracking-wider">
      {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
    </div>
  </div>
</section>


</>


  );
};

export default HeroSection;
