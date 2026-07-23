import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions governing the use of BENBAX LIMITED COMPANY services including software development, recruitment and HR, and restaurant services.',
  keywords: ['terms of service', 'terms and conditions', 'BENBAX terms', 'legal'],
};

export default function TermsPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="Terms of Service"
          description="Please read these terms carefully before using our services."
        />

        <div className="mx-auto max-w-4xl space-y-8 text-slate-700">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">1. Introduction</h2>
            <p className="mb-2">
              Welcome to BENBAX LIMITED COMPANY. These Terms of Service govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <p>
              If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>&ldquo;Company&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>, or <strong>&ldquo;our&rdquo;</strong> refers to BENBAX LIMITED COMPANY.</li>
              <li><strong>&ldquo;Services&rdquo;</strong> refers to all services offered by BENBAX including software development, recruitment and HR, restaurant services, transportation, construction, marketing, and import/export services.</li>
              <li><strong>&ldquo;Website&rdquo;</strong> refers to benbaxlimitedcompany.com and all associated pages.</li>
              <li><strong>&ldquo;User&rdquo;</strong>, <strong>&ldquo;you&rdquo;</strong>, or <strong>&ldquo;your&rdquo;</strong> refers to any individual or entity accessing or using our services.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">3. Services</h2>
            <p className="mb-2">
              BENBAX LIMITED COMPANY provides the following services:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Software development, web applications, and digital solutions</li>
              <li>Recruitment and HR services for employers and job seekers</li>
              <li>Restaurant and hospitality services</li>
              <li>Transportation and delivery services</li>
              <li>Building and construction services</li>
              <li>Marketing and brand development services</li>
              <li>Import and export trade facilitation</li>
            </ul>
            <p className="mt-2">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">3. Use of Our Website</h2>
            <p className="mb-2">You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others. You must not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information through our forms</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">4. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property on this website are owned by or licensed to BENBAX LIMITED COMPANY. You may not reproduce, distribute, modify, or republish any content without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">5. User Obligations</h2>
            <p className="mb-2">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information when using our contact forms or services</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
              <li>Not misuse our website or services for fraudulent or unlawful purposes</li>
              <li>Respect the intellectual property rights of BENBAX and third parties</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">5. Limitation of Liability</h2>
            <p>
              BENBAX LIMITED COMPANY shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of those websites. Accessing third-party links is at your own risk.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services at any time, without prior notice, for conduct that we believe violates these terms or is harmful to other users, third parties, or the Company.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">8. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Ghana.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">10. Contact Information</h2>
            <p className="mb-2">
              If you have any questions about these Terms of Service, please contact us:
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
