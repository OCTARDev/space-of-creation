"use client";
import "./style.css";
import { getcategorys, bookLife } from "@/lib/api";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslations } from 'next-intl';

type Category = {
  id: number;
  title: string;
  media: string;
};

export default function Contactlife() {
  const t = useTranslations('contact_life');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category_id: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const categoryQuery = useQuery<any>({
    queryKey: ["categories"],
    queryFn: getcategorys,
  });

  const allCategories: Category[] = categoryQuery.data?.data ?? [];

  const mutation = useMutation({
    mutationFn: () =>
      bookLife({
        name: formData.name as any,
        email: formData.email,
        phone: formData.phone,
        category_ids: formData.category_id ? [Number(formData.category_id)] : [],
      }),
      
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", category_id: "" });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.category_id) {
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
      `} />

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

          {/* Category dropdown */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t('form.fields.category.label')} <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white cursor-pointer"
              >
                <option value="" disabled>
                  {t('form.fields.category.placeholder')}
                </option>
                {allCategories.map((s) => (
                  <option key={s.id} value={s.id} className="text-gray-800">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
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

      {/* Contact Section */}
      <section className="relative w-full py-24 mt-20 text-center overflow-hidden">
        <div className="absolute inset-0 svgc bg-transparent bg-[url('/waves.svg')] bg-contain bg-bottom bg-no-repeat" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(144,31,233,0.15),rgba(0,163,255,0.15))] mix-blend-multiply" />
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            {t('direct.title')}
          </h1>
          <div className="space-y-2">
            <p className="text-gray-800 z-10">{t('direct.call')} {t('direct.phone')}</p>
            <p className="text-gray-800 z-10">{t('direct.email')} {t('direct.email_value')}</p>
            <p className="text-gray-800 z-10">{t('direct.address')} {t('direct.address_value')} | {t('direct.license')} {t('direct.license_value')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}