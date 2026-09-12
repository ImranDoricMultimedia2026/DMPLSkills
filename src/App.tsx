import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { GalleryPage } from './pages/GalleryPage';

import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { TeamPage } from './pages/TeamPage';


/**
 * Automatically scrolls to top
 * whenever the route changes.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};


export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const [preselectedCourse, setPreselectedCourse] = useState<
    string | undefined
  >(undefined);


  /**
   * Open enquiry modal
   */
  const handleOpenEnquiry = (courseTitle?: string) => {
    setPreselectedCourse(courseTitle);
    setEnquiryModalOpen(true);
  };


  /**
   * Close enquiry modal
   */
  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
    setPreselectedCourse(undefined);
  };


  return (
    <BrowserRouter>

      {/* Scroll to top on every route change */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#ff9933] selection:text-white">

        {/* =========================
            NAVBAR
        ========================== */}
        <Navbar
          onOpenEnquiry={handleOpenEnquiry}
        />


        {/* =========================
            PAGE CONTENT
        ========================== */}
        <main className="flex-grow">

          <Routes>

            {/* =========================
                HOME
            ========================== */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />


            {/* =========================
                ABOUT
            ========================== */}
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />


            {/* =========================
                COURSES
            ========================== */}
            <Route
              path="/courses"
              element={
                <CoursesPage
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />


            {/* =========================
                COURSE DETAIL
            ========================== */}
            <Route
              path="/courses/:slug"
              element={
                <CourseDetailPage
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />


            {/* =========================
                PROJECTS
            ========================== */}
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />


            {/* =========================
                PROJECT DETAIL

                Example:
                /projects/ministry-of-minority-affairs/
                mo-ma-seekho-aur-kamao-2-2018-19
            ========================== */}
            <Route
              path="/projects/:departmentId/:projectId"
              element={
                <ProjectDetailPage
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />


            {/* =========================
                GALLERY
            ========================== */}
            <Route
              path="/gallery"
              element={
                <GalleryPage />
              }
            />


            {/* =========================
                CONTACT
            ========================== */}
            <Route
              path="/contact"
              element={
                <ContactPage />
              }
            />


            {/* =========================
                OUR TEAM
            ========================== */}
            <Route
              path="/team"
              element={
                <TeamPage />
              }
            />


            {/* =========================
                PRIVACY POLICY
            ========================== */}
            <Route
              path="/privacy-policy"
              element={
                <PrivacyPolicyPage />
              }
            />


            {/* =========================
                TERMS & CONDITIONS
            ========================== */}
            <Route
              path="/terms-and-conditions"
              element={
                <TermsPage />
              }
            />


            {/* =========================
                CATCH ALL

                Keep this route LAST.
            ========================== */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />

          </Routes>

        </main>


        {/* =========================
            FOOTER
        ========================== */}
        <Footer />


        {/* =========================
            GLOBAL ENQUIRY MODAL
        ========================== */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={handleCloseEnquiry}
          preselectedCourse={preselectedCourse}
        />

      </div>

    </BrowserRouter>
  );
}