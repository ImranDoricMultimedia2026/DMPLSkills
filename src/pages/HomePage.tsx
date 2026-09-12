import React from 'react';
import HeroSection from '../components/HeroSection';
import EcosystemSection from '../components/EcosystemSection';
import AboutPreviewSection from '../components/AboutPreviewSection';
import StatsSection from '../components/StatsSection';
import ProjectHighlightsSection from '../components/ProjectHighlightsSection';

interface HomePageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  return (
    <div id="home-page" className="min-h-screen bg-white">

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. ABOUT */}
      <AboutPreviewSection />

      {/* 3. PROJECT / ECOSYSTEM */}
      <EcosystemSection />

      {/* 4. PROJECT PHOTO HIGHLIGHTS */}
      <ProjectHighlightsSection />

      {/* 5. STATS */}
      <StatsSection />

    </div>
  );
};