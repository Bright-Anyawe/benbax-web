import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Invalid form submission.',
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    // Placeholder handler for MVP. Integrate email or CRM delivery in production.
    console.info('Contact form submission:', parsed.data);

    return NextResponse.json({ message: 'Message received successfully.' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Unable to process request.' }, { status: 500 });
  }
}
