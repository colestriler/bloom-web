import type { Metadata } from "next";
import SupportHeader from "@/components/SupportHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Bloom",
  description: "Bloom's privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-bloom-text-tertiary">
            Last updated: March 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-bloom space-y-10">
            <Section title="Introduction">
              <p>
                Bloom (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our mobile application
                (&quot;Bloom&quot; or the &quot;App&quot;). Please read this policy carefully. By
                using the App, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </Section>

            <Section title="Information We Collect">
              <h4>Account Information</h4>
              <p>
                When you sign in with Apple or Google, we receive your name and
                email address. We use this solely to create and manage your
                account.
              </p>

              <h4>Usage Data</h4>
              <p>
                We collect information about how you interact with the App,
                including pages viewed, features used, prayers listened to, and
                time spent. This helps us improve the experience.
              </p>

              <h4>Spiritual Journey Data</h4>
              <p>
                If you use the Bloom AI assistant, your conversations, prayer
                requests, focus areas, growth goals, and journal reflections are
                stored to personalize your experience. This data is treated with
                the highest level of care and confidentiality.
              </p>

              <h4>Device Information</h4>
              <p>
                We may collect device type, operating system version, and unique
                device identifiers for analytics and troubleshooting purposes.
              </p>
            </Section>

            <Section title="How We Use Your Information">
              <ul>
                <li>To provide, maintain, and improve the App</li>
                <li>To personalize your experience (daily verses, prayer recommendations, spiritual insights)</li>
                <li>To power the Bloom AI assistant with context from your journey</li>
                <li>To send important service-related communications</li>
                <li>To analyze usage patterns and improve our features</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </Section>

            <Section title="Data Sharing">
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal
                information to third parties. We may share data only in the
                following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service providers:</strong> We use trusted third-party
                  services (e.g., cloud hosting, analytics) that process data on
                  our behalf under strict confidentiality agreements.
                </li>
                <li>
                  <strong>AI processing:</strong> Conversations with the Bloom AI
                  assistant are processed by our AI providers to generate
                  responses. These providers do not retain your data for their
                  own purposes.
                </li>
                <li>
                  <strong>Legal requirements:</strong> We may disclose information
                  if required by law or to protect our rights, safety, or
                  property.
                </li>
              </ul>
            </Section>

            <Section title="Data Storage & Security">
              <p>
                Your data is stored on secure servers with encryption at rest and
                in transit. We implement industry-standard security measures
                including HTTPS, encrypted databases, and access controls.
                However, no method of electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain your personal data for as long as your account is
                active or as needed to provide you with the App&apos;s services. You
                may request deletion of your account and associated data at any
                time.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of non-essential data collection</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:support@bloomapp.co">support@bloomapp.co</a>.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                The App is not intended for children under 13. We do not
                knowingly collect personal information from children under 13. If
                we become aware that we have collected such data, we will take
                steps to delete it promptly.
              </p>
            </Section>

            <Section title="Third-Party Services">
              <p>
                The App may contain links to third-party websites or services.
                We are not responsible for the privacy practices of these third
                parties. We encourage you to review their privacy policies.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy in
                the App and updating the &quot;Last updated&quot; date. Your continued use
                of the App after changes constitutes acceptance of the updated
                policy.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p>
                <a href="mailto:support@bloomapp.co">support@bloomapp.co</a>
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
      <div className="text-sm text-bloom-text-secondary leading-relaxed space-y-3 [&_h4]:text-bloom-text [&_h4]:font-mono [&_h4]:text-xs [&_h4]:uppercase [&_h4]:tracking-[0.15em] [&_h4]:mt-5 [&_h4]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-bloom-accent [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-bloom-text [&_strong]:font-medium">
        {children}
      </div>
    </div>
  );
}
