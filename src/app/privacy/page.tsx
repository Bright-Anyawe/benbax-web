import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for BENBAX LIMITED COMPANY. Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'BENBAX privacy', 'personal information'],
};

export default function PrivacyPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="Privacy Policy"
          description="How we collect, use, and protect your personal information."
        />

        <div className="mx-auto max-w-4xl space-y-8 text-slate-700">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">1. Introduction</h2>
            <p>
              BENBAX LIMITED COMPANY respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <h3 className="mb-1 font-semibold text-primary-dark">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Name and contact details (email address, phone number)</li>
              <li>Professional information (CV, work history, qualifications)</li>
              <li>Company or organization details</li>
              <li>Any information you voluntarily provide through our contact forms or communications</li>
            </ul>
            <h3 className="mb-1 font-semibold text-primary-dark">Non-Personal Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Aggregate usage data</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">3. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your inquiries and provide our services</li>
              <li>To match candidates with suitable job opportunities</li>
              <li>To improve our website and service offerings</li>
              <li>To communicate with you about our services, updates, and promotions</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To prevent fraud and ensure the security of our services</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">4. Legal Basis for Processing</h2>
            <p className="mb-2">We process your personal information based on the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Consent:</strong> Where you have given us explicit consent to process your data</li>
              <li><strong>Contractual necessity:</strong> To fulfill our obligations under a service agreement</li>
              <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Legitimate interests:</strong> To improve our services and communicate with our users</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">5. Data Sharing and Disclosure</h2>
            <p className="mb-2">
              We do not sell your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>With service providers who assist us in operating our business (e.g., hosting, analytics)</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your explicit consent</li>
              <li>In connection with a business transfer, merger, or acquisition</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. When no longer needed, we will securely delete or anonymize your data.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">8. Your Rights</h2>
            <p className="mb-2">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal obligations</li>
              <li><strong>Restriction:</strong> Request restriction of processing your data</li>
              <li><strong>Objection:</strong> Object to the processing of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">9. Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">11. Contact Us</h2>
            <p className="mb-2">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email: {COMPANY_INFO.email}</li>
              <li>Phone: {COMPANY_INFO.phone}</li>
              <li>Address: {COMPANY_INFO.location}, {COMPANY_INFO.poBox}</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
