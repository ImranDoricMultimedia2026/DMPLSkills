import React, { useEffect, useState } from 'react';
import {
  X,
  CheckCircle,
  Send,
  AlertCircle,
  Phone,
  Mail,
  User,
  GraduationCap,
  MessageSquare,
} from 'lucide-react';
import { coursesData } from '../data/courses';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(
    preselectedCourse || ''
  );
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  /* Keep selected course synced */
  useEffect(() => {
    if (preselectedCourse) {
      setSelectedProgram(preselectedCourse);
    }
  }, [preselectedCourse]);

  /* Escape key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  /* Prevent background scroll while modal is open */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid name.';
    }

    const normalizedPhone = phone.replace(/\D/g, '');

    if (!phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (normalizedPhone.length !== 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (!email.trim()) {
      errs.email = 'Please enter an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!selectedProgram) {
      errs.selectedProgram =
        'Please select a programme or course of interest.';
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    /*
     * Current frontend-only submission flow.
     * Connect this handler to your backend/API when the enquiry
     * submission endpoint is available.
     */
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const randomId =
        'DS-' + Math.floor(100000 + Math.random() * 900000);

      setSubmissionId(randomId);
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setSelectedProgram(preselectedCourse || '');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
    setSubmissionId('');
    onClose();
  };

  return (
    <div
      id="enquiry-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-[#071a33]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-[0_25px_80px_rgba(5,25,55,0.30)]">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="relative overflow-hidden bg-[#0b2445] text-white">
          {/* Tricolour top line */}
          <div className="absolute top-0 left-0 right-0 h-1 flex">
            <div className="w-1/3 bg-orange-500" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-green-600" />
          </div>

          {/* Decorative glow */}
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#ff9933]/10 blur-3xl" />

          <div className="relative px-5 sm:px-7 py-5 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 mb-2.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#ff9933]" />

                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-white/85">
                    DMPL Skills Admissions
                  </span>
                </div>

                <h3
                  id="enquiry-modal-title"
                  className="text-xl sm:text-2xl font-heading font-bold tracking-tight"
                >
                  Programme Enquiry
                  <span className="text-[#ff9933]"> & Counseling</span>
                </h3>

                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-5">
                  Submit your details to connect with a DMPL Skills
                  vocational advisor.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="shrink-0 p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <div className="max-h-[calc(92vh-145px)] overflow-y-auto">
          <div className="p-5 sm:p-7">

            {isSuccess ? (
              /* =====================================================
                 SUCCESS STATE
              ===================================================== */
              <div className="text-center py-8 sm:py-10">
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-emerald-100 animate-pulse" />

                  <div className="relative w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle className="w-11 h-11" />
                  </div>
                </div>

                <h4 className="mt-6 text-xl sm:text-2xl font-heading font-bold text-[#12335f]">
                  Enquiry Submitted Successfully
                </h4>

                <p className="mt-3 text-sm text-slate-600 leading-6 max-w-md mx-auto">
                  Thank you,{' '}
                  <span className="font-semibold text-slate-800">
                    {fullName}
                  </span>
                  . Your enquiry reference is{' '}
                  <span className="inline-block mt-1 font-mono font-bold text-[#12335f] bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-lg">
                    {submissionId}
                  </span>
                  .
                </p>

                <div className="mt-5 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-500">
                  Our training coordinator will reach out to you within
                  24–48 working hours.
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center justify-center px-7 py-2.5 rounded-xl font-bold text-sm text-white bg-[#12335f] hover:bg-[#0b2445] transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              /* =====================================================
                 FORM
              ===================================================== */
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Full Name{' '}
                    <span className="text-[#ff9933]">*</span>
                  </label>

                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />

                    <input
                      id="full-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      className={`w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border ${
                        errors.fullName
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-300 bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-[#ff9933]/20 focus:border-[#ff9933] transition-all`}
                    />
                  </div>

                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Mobile Number{' '}
                      <span className="text-[#ff9933]">*</span>
                    </label>

                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />

                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        className={`w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border ${
                          errors.phone
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-300 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-[#ff9933]/20 focus:border-[#ff9933] transition-all`}
                      />
                    </div>

                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Email Address{' '}
                      <span className="text-[#ff9933]">*</span>
                    </label>

                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />

                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        autoComplete="email"
                        className={`w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border ${
                          errors.email
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-300 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-[#ff9933]/20 focus:border-[#ff9933] transition-all`}
                      />
                    </div>

                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Programme */}
                <div>
                  <label
                    htmlFor="selected-program"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Interested Programme / Course{' '}
                    <span className="text-[#ff9933]">*</span>
                  </label>

                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none z-10" />

                    <select
                      id="selected-program"
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className={`w-full pl-10 pr-10 py-3 text-sm rounded-xl border appearance-none ${
                        errors.selectedProgram
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-300 bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-[#ff9933]/20 focus:border-[#ff9933] transition-all`}
                    >
                      <option value="">
                        -- Select a training programme --
                      </option>

                      <optgroup label="Training Courses">
                        {coursesData.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title} ({course.duration})
                          </option>
                        ))}
                      </optgroup>

                      <optgroup label="Institutional & Other Enquiries">
                        <option value="Government Skill Development Projects">
                          Government Skill Development Projects
                        </option>

                        <option value="CSR Vocational Partnership">
                          CSR Vocational Partnership
                        </option>

                        <option value="Institutional Trainer Training">
                          Institutional Trainer Training
                        </option>

                        <option value="General Admission Enquiry">
                          General Admission Enquiry
                        </option>
                      </optgroup>
                    </select>

                    <div className="absolute right-3.5 top-3.5 pointer-events-none text-slate-400">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {errors.selectedProgram && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.selectedProgram}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Your Query or Message{' '}
                    <span className="text-slate-400 font-medium normal-case tracking-normal">
                      (Optional)
                    </span>
                  </label>

                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />

                    <textarea
                      id="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share any specific requirements, education level, or preferred training location..."
                      className="w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9933]/20 focus:border-[#ff9933] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Privacy / Transparency note */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-5 h-5 rounded-full bg-[#12335f]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-[#12335f]">
                      i
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-500 leading-5">
                    By submitting this form, you authorize DMPL Skills
                    advisors to contact you regarding course admission
                    guidelines and training schedules.
                  </p>
                </div>

                {/* Buttons */}
                <div className="pt-1 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#12335f] hover:bg-[#0b2445] active:bg-[#081d37] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-[#12335f]/20"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-[#ff9933]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};