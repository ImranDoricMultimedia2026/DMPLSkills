import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react';
import { companyData } from '../data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-[#0a1f3d] text-white">

      {/* ============================================ */}
      {/* TOP - GOVERNMENT STYLE BANNER */}
      {/* ============================================ */}
      <div className="border-b border-white/10 bg-[#12335f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">

            {/* Left */}
            <div className="flex items-center gap-3 text-white/75">
              <div className="flex items-center gap-0.5">
                <span className="w-1.5 h-5 bg-[#ff9933] rounded-sm" />
                <span className="w-1.5 h-5 bg-white rounded-sm" />
                <span className="w-1.5 h-5 bg-[#138808] rounded-sm" />
              </div>

              <span className="text-base">🇮🇳</span>

              <span>
                Skill Development &amp; Training Projects
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3 text-white/55">
              <span className="hidden sm:inline">|</span>
              <span>Industry-Relevant Skill Development</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">
                Employment-Focused Training
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* MAIN FOOTER */}
      {/* ============================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* ======================================== */}
          {/* COLUMN 1 - BRAND */}
          {/* ======================================== */}
          <div className="space-y-5">

            {/* Logo */}
        
{/* Logo */}
<div className="flex flex-col items-start">

  {/* Doric Skills Logo */}
  <img
    src="public/images/dmpl skills logo 02.png"
    alt="DORIC SKILLS"
    className="
      w-[220px] h-auto
      sm:w-[260px]
      lg:w-[220px]
      object-contain
      object-left
      transition-all duration-300
    "
  />

  {/* Logo Text */}
  <p className="text-[10px] text-white/45 uppercase tracking-[0.18em] mt-1 ml-1">
    Skill Development Partner
  </p>

</div>


            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Empowering youth through industry-relevant skill development,
              vocational training, and employment-focused learning programs
              across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">

              {[
                {
                  icon: Facebook,
                  label: 'Facebook',
                },
                {
                  icon: Twitter,
                  label: 'Twitter',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                },
                {
                  icon: Youtube,
                  label: 'YouTube',
                },
                {
                  icon: Instagram,
                  label: 'Instagram',
                },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="
                    w-9 h-9
                    rounded-lg
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                    text-white/55
                    hover:text-white
                    hover:bg-[#ff9933]
                    hover:border-[#ff9933]
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ======================================== */}
          {/* COLUMN 2 - QUICK LINKS */}
          {/* ======================================== */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#ff9933] mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Our Team', href: '/team' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="
                      text-sm text-white/60
                      hover:text-white
                      transition-colors
                      flex items-center gap-2
                      group
                    "
                  >
                    <span
                      className="
                        text-[#ff9933]
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all duration-200
                      "
                    >
                      ›
                    </span>

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ======================================== */}
          {/* COLUMN 3 - PROGRAMS */}
          {/* ======================================== */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#ff9933] mb-5 pb-3 border-b border-white/10">
              Our Programs
            </h4>

            <ul className="space-y-3">

              {[
                {
                  label: 'PMKVY Projects',
                  href: '/projects/national-skill-development-mission/pmkvy-2-0-2016-17',
                },
                {
                  label: 'Ministry of Minority Affairs',
                  href: '/projects/ministry-of-minority-affairs',
                },
                {
                  label: 'Punjab Skill Development',
                  href: '/projects/punjab-skill-development-mission',
                },
                {
                  label: 'Haryana Skill Development',
                  href: '/projects/haryana-skill-development-mission',
                },
                {
                  label: 'DAY-NULM Programs',
                  href: '/projects',
                },
                {
                  label: 'RPL Programs',
                  href: '/projects',
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="
                      text-sm text-white/60
                      hover:text-white
                      transition-colors
                      flex items-center gap-2
                      group
                    "
                  >
                    <span
                      className="
                        text-[#ff9933]
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all duration-200
                      "
                    >
                      ›
                    </span>

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ======================================== */}
          {/* COLUMN 4 - CONTACT */}
          {/* ======================================== */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#ff9933] mb-5 pb-3 border-b border-white/10">
              Get In Touch
            </h4>

            <ul className="space-y-4 text-sm">

              {/* Address */}
              <li className="flex items-start gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-[#ff9933]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#ff9933]" />
                </div>

                <span className="pt-1 leading-relaxed">
                  {companyData.addressPlaceholder || 'New Delhi, India'}
                </span>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-[#ff9933]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#ff9933]" />
                </div>

                <a
                  href={`mailto:${companyData.emailPlaceholder}`}
                  className="pt-1 hover:text-[#ff9933] transition-colors break-all"
                >
                  {companyData.emailPlaceholder || 'info@doricskills.com'}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-[#ff9933]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#ff9933]" />
                </div>

                <span className="pt-1">
                  {companyData.phonePlaceholder || '+91-XXXXX-XXXXX'}
                </span>
              </li>

              {/* Working Hours */}
              <li className="flex items-start gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-[#ff9933]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#ff9933]" />
                </div>

                <span className="pt-1 leading-relaxed">
                  {companyData.workingHours ||
                    'Mon-Fri: 9:00 AM - 6:00 PM'}
                </span>
              </li>
            </ul>

            {/* Enquire Button */}
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                mt-6
                px-5 py-2.5
                rounded-lg
                text-xs font-bold
                text-[#12335f]
                bg-[#ff9933]
                hover:bg-[#ffb45c]
                transition-all duration-300
                hover:-translate-y-0.5
                shadow-lg shadow-[#ff9933]/15
              "
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* BOTTOM FOOTER */}
      {/* ============================================ */}
      <div className="border-t border-white/10 bg-[#071a33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">

            {/* Copyright */}
            <div className="flex items-center gap-3 text-white/40">
              <span>© {currentYear} Doric Skills</span>

              <span className="hidden sm:inline text-white/15">
                |
              </span>

              <span className="hidden sm:inline">
                All Rights Reserved
              </span>
            </div>

            {/* Tricolor */}
            <div className="flex items-center gap-1.5">

              <span className="w-2 h-4 bg-[#ff9933] rounded-sm" />
              <span className="w-2 h-4 bg-white rounded-sm" />
              <span className="w-2 h-4 bg-[#138808] rounded-sm" />

              <span className="text-white/20 ml-2">
                Government Skill Development Initiative
              </span>
            </div>

            {/* Legal */}
            <div className="flex items-center gap-4 text-white/40">

              <Link
                to="/privacy-policy"
                className="hover:text-[#ff9933] transition-colors"
              >
                Privacy Policy
              </Link>

              <span className="text-white/15">|</span>

              <Link
                to="/terms-and-conditions"
                className="hover:text-[#ff9933] transition-colors"
              >
                Terms of Use
              </Link>

              <span className="text-white/15">|</span>

              <Link
                to="/"
                className="hover:text-[#ff9933] transition-colors"
              >
                Disclaimer
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};