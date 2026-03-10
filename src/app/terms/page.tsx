import type { Metadata } from "next";
import SupportHeader from "@/components/SupportHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Bloom",
  description: "Bloom's terms of service. Read the terms and conditions for using the Bloom app.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <SupportHeader />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-bloom-text mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-bloom-text-tertiary">
            Last updated: March 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10">
            <Section title="Acceptance of Terms">
              <p>
                By downloading, installing, or using the Bloom mobile
                application (&quot;App&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use
                the App.
              </p>
            </Section>

            <Section title="Description of Service">
              <p>
                Bloom is a Bible study and prayer application that provides
                daily scripture readings, guided audio prayers, an AI-powered
                study assistant, and personalized spiritual journey tracking.
                The App is designed to support your faith but is not a
                substitute for pastoral counseling or professional advice.
              </p>
            </Section>

            <Section title="Account Registration">
              <p>
                To access certain features, you must create an account using
                Sign in with Apple or Sign in with Google. You are responsible
                for maintaining the confidentiality of your account and for all
                activities that occur under it. You agree to provide accurate
                information and to notify us immediately of any unauthorized use.
              </p>
            </Section>

            <Section title="Acceptable Use">
              <p>You agree not to:</p>
              <ul>
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
                <li>Interfere with or disrupt the App&apos;s servers or networks</li>
                <li>Use the AI assistant to generate harmful, abusive, or misleading content</li>
                <li>Create multiple accounts for fraudulent purposes</li>
                <li>Scrape, harvest, or collect data from the App without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </Section>

            <Section title="Intellectual Property">
              <p>
                The App and its content — including but not limited to text,
                audio, graphics, logos, and software — are owned by Bloom and
                are protected by copyright, trademark, and other intellectual
                property laws. You may not reproduce, distribute, or create
                derivative works from the App&apos;s content without our express
                written permission.
              </p>
              <p>
                Bible text included in the App is used under applicable
                licenses from the respective copyright holders of each
                translation.
              </p>
            </Section>

            <Section title="AI Assistant Disclaimer">
              <p>
                The Bloom AI assistant is designed to help you explore and
                understand scripture. While we strive for accuracy, AI-generated
                responses may contain errors or limitations. The AI assistant:
              </p>
              <ul>
                <li>Is not a substitute for reading the Bible directly</li>
                <li>Does not represent any specific denomination or theological tradition as authoritative</li>
                <li>Should not be used as a replacement for pastoral counseling, therapy, or professional advice</li>
                <li>May occasionally produce inaccurate or incomplete information</li>
              </ul>
              <p>
                We encourage you to verify AI responses with scripture and
                consult with your faith community for important spiritual
                matters.
              </p>
            </Section>

            <Section title="User Content">
              <p>
                You retain ownership of any content you create within the App,
                including prayer requests, journal entries, and conversations
                with the AI assistant. By using the App, you grant us a limited
                license to store and process this content solely to provide and
                improve the service.
              </p>
            </Section>

            <Section title="Availability & Modifications">
              <p>
                We reserve the right to modify, suspend, or discontinue the App
                (or any part of it) at any time, with or without notice. We are
                not liable for any modification, suspension, or discontinuation
                of the App. We may also update these Terms from time to time;
                continued use constitutes acceptance.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                We may terminate or suspend your account at our sole discretion,
                without notice, for conduct that we believe violates these Terms
                or is harmful to other users, us, or third parties. You may
                delete your account at any time through the App&apos;s settings.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Bloom and its
                affiliates, officers, employees, and agents shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenue, whether
                incurred directly or indirectly, or any loss of data, use, or
                goodwill arising out of your use of the App.
              </p>
              <p>
                The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties
                of any kind, either express or implied, including but not
                limited to implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement.
              </p>
            </Section>

            <Section title="Indemnification">
              <p>
                You agree to indemnify and hold harmless Bloom and its
                affiliates from any claims, damages, losses, liabilities, and
                expenses (including legal fees) arising from your use of the App
                or violation of these Terms.
              </p>
            </Section>

            <Section title="Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to conflict
                of law provisions. Any disputes arising from these Terms shall
                be resolved in the courts of competent jurisdiction.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <p>
                <a href="mailto:support@bloombible.com">support@bloombible.com</a>
              </p>
            </Section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-serif text-xl font-semibold text-bloom-text mb-4">
        {title}
      </h3>
      <div className="text-sm text-bloom-text-secondary leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-bloom-accent [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-bloom-text [&_strong]:font-medium">
        {children}
      </div>
    </div>
  );
}
