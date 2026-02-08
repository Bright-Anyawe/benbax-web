'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, contactSubjects, type ContactFormValues } from '@/lib/validations';

const ContactForm = () => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setIsSubmitted(false);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      setSubmitError(data?.error ?? 'Something went wrong. Please try again.');
      return;
    }

    setIsSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Name <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">Phone (optional)</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
            Subject <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id="subject"
            {...register('subject')}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.subject)}
          >
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-primary"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {submitError && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p>}
      {isSubmitted && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
          Thank you. Your message has been received and our team will get back to you soon.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-base rounded-lg bg-accent-orange px-7 py-3 text-white hover:bg-orange-600 focus:ring-accent-orange disabled:opacity-70"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
