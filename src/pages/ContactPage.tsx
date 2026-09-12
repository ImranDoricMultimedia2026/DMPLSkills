import React, { useState } from 'react';

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  PhoneCall,
  ArrowUpRight,
  ShieldCheck,
  Building2,
} from 'lucide-react';

import { Breadcrumbs } from '../components/Breadcrumbs';
import { companyData } from '../data/company';
import { coursesData } from '../data/courses';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interestedProgram, setInterestedProgram] = useState('');
  const [inquiryType, setInquiryType] =
    useState('Student Admission');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState('');

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      errs.email = 'Please enter a valid email format.';
    }

    if (!interestedProgram) {
      errs.interestedProgram =
        'Please select a program or inquiry track.';
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const randomRef =
        'DORIC-' +
        Math.floor(100000 + Math.random() * 900000);

      setRefId(randomRef);
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setInterestedProgram('');
    setInquiryType('Student Admission');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
    setRefId('');
  };

  return (
    <div
      id="contact-page"
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* =========================
          BREADCRUMBS
      ========================== */}
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden bg-[#0b2445] text-white">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
          }}
        />

        {/* Decorative glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ff9933]/15 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        {/* Tricolour accent */}
        <div className="absolute left-0 right-0 top-0 h-1">
          <div className="flex h-full">
            <div className="w-1/3 bg-[#ff9933]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#138808]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MessageSquare className="h-4 w-4 text-[#ff9933]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">
                Helpdesk & Admissions
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Connect with{' '}
              <span className="text-[#ff9933]">
                Doric Skills
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Have questions regarding course eligibility, batch
              timetables, institutional partnerships, or training
              centres? Reach out through the available communication
              channels below.
            </p>

            {/* Hero information */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff9933]/15">
                  <Phone className="h-4 w-4 text-[#ff9933]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Helpline
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {companyData.phonePlaceholder}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4 text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {companyData.emailPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MAIN CONTACT SECTION
      ========================== */}
      <section className="border-b border-slate-200 bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

            {/* =========================
                LEFT INFORMATION
            ========================== */}
            <div className="space-y-6 lg:col-span-5">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-8 bg-[#ff9933]" />

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#12335f]">
                    Contact Information
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-[#12335f] sm:text-3xl">
                  Headquarters & Training Nodes
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Our central desk coordinates admissions, training
                  enquiries and institutional communication across
                  available partner locations.
                </p>
              </div>

              {/* =========================
                  ADDRESS
              ========================== */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#12335f]/20 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12335f]/5 text-[#12335f]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#12335f]">
                      Registered Office Address
                    </h3>

                    <p className="mt-1.5 text-xs leading-6 text-slate-600">
                      {companyData.addressPlaceholder}
                    </p>

                    <span className="mt-3 inline-flex rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                      Official Address To Be Formally Confirmed
                    </span>
                  </div>
                </div>
              </div>

              {/* =========================
                  PHONE
              ========================== */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#12335f]/20 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12335f]/5 text-[#12335f]">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#12335f]">
                      Phone & Helpline
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-600">
                      {companyData.phonePlaceholder}
                    </p>

                    <span className="mt-1 block text-[11px] leading-5 text-slate-400">
                      Contact line available during working hours
                    </span>
                  </div>
                </div>
              </div>

              {/* =========================
                  EMAIL
              ========================== */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#12335f]/20 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12335f]/5 text-[#12335f]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#12335f]">
                      Official Electronic Mail
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-600">
                      {companyData.emailPlaceholder}
                    </p>

                    <span className="mt-1 block text-[11px] leading-5 text-slate-400">
                      For institutional, CSR and programme enquiries
                    </span>
                  </div>
                </div>
              </div>

              {/* =========================
                  WORKING HOURS
              ========================== */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#12335f]/20 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12335f]/5 text-[#12335f]">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#12335f]">
                      Working Hours
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-600">
                      {companyData.workingHours}
                    </p>

                    <span className="mt-1 block text-[11px] leading-5 text-slate-400">
                      Sunday & National Holidays: Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* =========================
                  QUICK COMMUNICATION
              ========================== */}
              <div className="relative overflow-hidden rounded-2xl bg-[#0b2445] p-6 text-white shadow-xl">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ff9933]/10 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff9933]">
                    <MessageSquare className="h-4 w-4" />

                    <span>Direct Communication Desk</span>
                  </div>

                  <h4 className="mt-3 text-lg font-bold">
                    Quick Admissions & Candidate Helpline
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    For questions about upcoming batches, admissions
                    or required documents, use the available
                    communication channels.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={`tel:${companyData.phonePlaceholder}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#ff9933] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#ff9933]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e88922]"
                    >
                      <PhoneCall className="h-3.5 w-3.5" />
                      Call Helpline
                    </a>

                    <a
                      href="https://wa.me/?text=Hello%20Doric%20Skills%2C%20I%20am%20interested%20in%20your%20vocational%20training%20programs."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/15"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      WhatsApp Enquiry
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                RIGHT FORM
            ========================== */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

                {/* Form Header */}
                <div className="border-b border-slate-100 bg-gradient-to-r from-[#12335f]/5 via-white to-[#ff9933]/5 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px w-8 bg-[#ff9933]" />

                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#12335f]">
                          Direct Contact Form
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold tracking-tight text-[#12335f]">
                        Send Us an Official Message
                      </h3>

                      <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
                        Fill out the form with your training
                        requirements and our team can review your
                        enquiry.
                      </p>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12335f] text-white sm:flex">
                      <Send className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* =========================
                      SUCCESS STATE
                  ========================== */}
                  {isSuccess ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>

                      <h4 className="mt-6 text-2xl font-extrabold text-[#12335f]">
                        Message Received
                      </h4>

                      <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
                        Thank you,{' '}
                        <strong className="text-slate-800">
                          {fullName}
                        </strong>
                        . Your inquiry reference token is{' '}
                        <span className="rounded-md bg-[#12335f]/5 px-2 py-1 font-mono font-bold text-[#12335f]">
                          {refId}
                        </span>
                        .
                      </p>

                      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-400">
                        Your submitted information can be reviewed by
                        the concerned team for further communication.
                      </p>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#12335f] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#12335f]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0b2445]"
                      >
                        Send Another Message
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* =========================
                          INQUIRY TYPE
                      ========================== */}
                      <div>
                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          Inquiry Nature
                        </label>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                          {[
                            'Student Admission',
                            'Institutional Project',
                            'General Information',
                          ].map((type) => {
                            const active = inquiryType === type;

                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() =>
                                  setInquiryType(type)
                                }
                                className={`
                                  rounded-xl border px-3 py-3
                                  text-xs font-bold
                                  transition-all
                                  ${
                                    active
                                      ? 'border-[#12335f] bg-[#12335f] text-white shadow-md shadow-[#12335f]/15'
                                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-[#12335f]/20 hover:bg-white hover:text-[#12335f]'
                                  }
                                `}
                              >
                                {type}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* =========================
                          FULL NAME
                      ========================== */}
                      <div>
                        <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          Full Name{' '}
                          <span className="text-[#ff9933]">
                            *
                          </span>
                        </label>

                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) =>
                            setFullName(e.target.value)
                          }
                          placeholder="Enter your full name"
                          className={`
                            w-full rounded-xl border
                            px-4 py-3 text-sm
                            transition-all
                            focus:outline-none
                            focus:ring-4
                            focus:ring-[#12335f]/10
                            focus:border-[#12335f]
                            ${
                              errors.fullName
                                ? 'border-red-400 bg-red-50/30'
                                : 'border-slate-200 bg-white'
                            }
                          `}
                        />

                        {errors.fullName && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3 w-3" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* =========================
                          PHONE + EMAIL
                      ========================== */}
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Phone Number{' '}
                            <span className="text-[#ff9933]">
                              *
                            </span>
                          </label>

                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) =>
                              setPhone(e.target.value)
                            }
                            placeholder="+91 98765 43210"
                            className={`
                              w-full rounded-xl border
                              px-4 py-3 text-sm
                              transition-all
                              focus:outline-none
                              focus:ring-4
                              focus:ring-[#12335f]/10
                              focus:border-[#12335f]
                              ${
                                errors.phone
                                  ? 'border-red-400 bg-red-50/30'
                                  : 'border-slate-200 bg-white'
                              }
                            `}
                          />

                          {errors.phone && (
                            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                              <AlertCircle className="h-3 w-3" />
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Email Address{' '}
                            <span className="text-[#ff9933]">
                              *
                            </span>
                          </label>

                          <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                              setEmail(e.target.value)
                            }
                            placeholder="name@example.com"
                            className={`
                              w-full rounded-xl border
                              px-4 py-3 text-sm
                              transition-all
                              focus:outline-none
                              focus:ring-4
                              focus:ring-[#12335f]/10
                              focus:border-[#12335f]
                              ${
                                errors.email
                                  ? 'border-red-400 bg-red-50/30'
                                  : 'border-slate-200 bg-white'
                              }
                            `}
                          />

                          {errors.email && (
                            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                              <AlertCircle className="h-3 w-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* =========================
                          PROGRAM
                      ========================== */}
                      <div>
                        <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          Interested Program / Discipline{' '}
                          <span className="text-[#ff9933]">
                            *
                          </span>
                        </label>

                        <select
                          value={interestedProgram}
                          onChange={(e) =>
                            setInterestedProgram(e.target.value)
                          }
                          className={`
                            w-full rounded-xl border
                            bg-white px-4 py-3 text-sm
                            transition-all
                            focus:outline-none
                            focus:ring-4
                            focus:ring-[#12335f]/10
                            focus:border-[#12335f]
                            ${
                              errors.interestedProgram
                                ? 'border-red-400 bg-red-50/30'
                                : 'border-slate-200'
                            }
                          `}
                        >
                          <option value="">
                            -- Select program or vertical --
                          </option>

                          <optgroup label="Vocational Courses">
                            {coursesData.map((course) => (
                              <option
                                key={course.id}
                                value={course.title}
                              >
                                {course.title} ({course.category})
                              </option>
                            ))}
                          </optgroup>

                          <optgroup label="Institutional Tracks">
                            <option value="Government Skill Mission Implementation">
                              Government Skill Mission Implementation
                            </option>

                            <option value="CSR Vocational Partnership">
                              CSR Vocational Partnership
                            </option>

                            <option value="Center Infrastructure Collaboration">
                              Center Infrastructure Collaboration
                            </option>
                          </optgroup>
                        </select>

                        {errors.interestedProgram && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3 w-3" />
                            {errors.interestedProgram}
                          </p>
                        )}
                      </div>

                      {/* =========================
                          MESSAGE
                      ========================== */}
                      <div>
                        <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          Message / Query Details
                        </label>

                        <textarea
                          rows={5}
                          value={message}
                          onChange={(e) =>
                            setMessage(e.target.value)
                          }
                          placeholder="Please describe your query or requirements..."
                          className="
                            w-full resize-none rounded-xl border
                            border-slate-200 bg-white
                            px-4 py-3 text-sm
                            transition-all
                            focus:border-[#12335f]
                            focus:outline-none
                            focus:ring-4
                            focus:ring-[#12335f]/10
                          "
                        />
                      </div>

                      {/* =========================
                          SECURITY NOTE
                      ========================== */}
                      <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#12335f]" />

                        <p className="text-[11px] leading-5 text-slate-500">
                          Please provide accurate contact information
                          so that the concerned team can respond to
                          your enquiry.
                        </p>
                      </div>

                      {/* =========================
                          SUBMIT
                      ========================== */}
                      <div className="pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="
                            inline-flex w-full items-center
                            justify-center gap-2 rounded-xl
                            bg-[#12335f]
                            px-8 py-3.5
                            text-sm font-bold text-white
                            shadow-lg
                            shadow-[#12335f]/20
                            transition-all duration-200
                            hover:-translate-y-0.5
                            hover:bg-[#0b2445]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            sm:w-auto
                          "
                        >
                          {isSubmitting ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Submit Enquiry
                              <Send className="h-4 w-4" />
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
        </div>
      </section>

      {/* =========================
          LOCATION SECTION
      ========================== */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-[#ff9933]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#12335f]">
                Geographic Presence
              </span>
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-[#12335f] sm:text-3xl">
              Training Center Location Map
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              Location information for available Doric Skills
              training and administrative centres can be added here
              once verified details are available.
            </p>
          </div>

          {/* =========================
              MAP PLACEHOLDER
          ========================== */}
          <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner">

            {/* Dotted background */}
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  'radial-gradient(#cbd5e1 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Decorative roads */}
            <div className="absolute left-0 top-1/3 h-1 w-full rotate-3 bg-slate-300/70" />

            <div className="absolute left-0 top-1/2 h-1.5 w-full -rotate-6 bg-slate-300/70" />

            <div className="absolute left-1/3 top-0 h-full w-1.5 rotate-12 bg-slate-300/70" />

            <div className="absolute right-1/4 top-0 h-full w-2 -rotate-6 bg-slate-300/70" />

            {/* Map Card */}
            <div className="relative z-10 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ff9933]/20 bg-[#ff9933]/10 text-[#12335f]">
                <MapPin className="h-6 w-6" />
              </div>

              <h4 className="mt-4 text-sm font-extrabold text-[#12335f]">
                Doric Skills Training Network
              </h4>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Regional training and administrative locations can be
                displayed here after verified location details are
                available.
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 border-t border-slate-100 pt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                <Building2 className="h-3.5 w-3.5" />
                Location Data Pending Verification
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};