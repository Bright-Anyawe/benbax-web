import { z } from 'zod';

export const contactSubjects = [
  'Hiring Support',
  'Job Seeking Support',
  'Executive Search',
  'RPO Services',
  'Training and Workshops',
  'General Inquiry',
] as const;

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .max(30, 'Phone number is too long')
    .regex(/^[+()\d\s-]*$/, 'Phone number contains invalid characters')
    .optional()
    .or(z.literal('')),
  subject: z.enum(contactSubjects, {
    errorMap: () => ({ message: 'Please select a subject' }),
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
