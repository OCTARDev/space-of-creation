"use client";
import { useState } from "react";
import "./style.css";
import { useMutation } from "@tanstack/react-query";
import { contactus } from "@/lib/api";
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  
  const solutions = [
    { key: 'octar', value: t('solutions.octar') },
    { key: 'vclab', value: t('solutions.vclab') },
    { key: 'life', value: t('solutions.life') },
    { key: 'ar', value: t('solutions.ar') },
    { key: 'learning', value: t('solutions.learning') },
    { key: 'planetarium', value: t('solutions.planetarium') },
    { key: 'vr', value: t('solutions.vr') },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interested: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: () =>
      contactus({
        name: formData.name as any,
        email: formData.email,
        phone: formData.phone,
        organization:formData.organization,
        interested:formData.interested,
        description:formData.description
      }),
      
      
    onSuccess: () => {
      setSubmitted(true);
      
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        organization: "",
        interested: "",
        description:""
      });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.organization || !formData.interested || !formData.description) {
      alert(t('form.error'));
      return;
    }

    mutation.mutate();

  };


  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className={`
        absolute w-full h-[70%] aspect-square top-[12%] left-0
        bg-linear-to-r from-[#2C67FF] to-[#ee5ddf]
        blur-xl opacity-15 -z-10
      `}/>
      
      {/* Hero text */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          {t('hero.title')}
        </h1>
        <p className="text-sm text-gray-500">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md px-8 py-8">
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          {t('form.title')}
        </h2>

        {submitted && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm text-center">
            {t('form.success')}
          </div>
        )}

        {mutation.isError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
            {t('form.error')}
          </div>
        )}

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t('form.fields.name.label')} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={t('form.fields.name.placeholder')}
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t('form.fields.email.label')} <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={t('form.fields.email.placeholder')}
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t('form.fields.phone.label')} <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder={t('form.fields.phone.placeholder')}
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t('form.fields.organization.label')} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="organization"
              placeholder={t('form.fields.organization.placeholder')}
              value={formData.organization}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Solution dropdown */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t('form.fields.solution.label')} <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                name="interested"
                value={formData.interested}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white cursor-pointer"
              >
                <option value="" disabled>
                  {t('form.fields.solution.placeholder')}
                </option>
                {solutions.map((s) => (
                  <option key={s.key} value={s.key} className="text-gray-800">
                    {s.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Challenges textarea */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t('form.fields.challenges.label')} <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              placeholder={t('form.fields.challenges.placeholder')}
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={mutation.isPending}
            className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(90deg, #a78bfa 0%, #818cf8 100%)",
            }}
          >
            {mutation.isPending ? t('form.button_pending') : t('form.button')}
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            {t('form.footer')}
          </p>
        </div>
      </div>

      <section className="relative w-full py-24 mt-20 text-center overflow-hidden">
        {/* Background: SVG waves layer */}
        <div className="absolute inset-0 svgc bg-transparent bg-[url('/waves.svg')] bg-contain bg-bottom bg-no-repeat" />

        {/* Gradient overlay on top of SVG */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(144,31,233,0.15),rgba(0,163,255,0.15))] mix-blend-multiply" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            {t('direct.title')}
          </h1>

          <div className="space-y-2">
            <p className="text-gray-800 z-10">
              {t('direct.call')} {t('direct.phone')}
            </p>
            <p className="text-gray-800 z-10">
              {t('direct.email')} {t('direct.email_value')}
            </p>
            <p className="text-gray-800 z-10">
              {t('direct.address')} {t('direct.address_value')} | {t('direct.license')} {t('direct.license_value')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}