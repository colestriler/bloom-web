import type { Metadata } from "next";
import SupportHeader from "@/components/SupportHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support — Bloom",
  description:
    "Get help with Bloom. Find answers to common questions, troubleshoot issues, or contact our support team.",
};

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      'Download Bloom from the App Store and tap "Sign in with Apple" or "Sign in with Google" to create your account instantly. No separate registration is needed.',
  },
  {
    question: "Is Bloom free to use?",
    answer:
      "Yes! Bloom is free to download and use. All core features including daily verses, audio prayers, Bible reading, and the Bloom AI assistant are included at no cost.",
  },
  {
    question: "Which Bible translations are available?",
    answer:
      "Bloom currently includes the full text of major English translations. We're continuously adding more translations and languages based on user feedback.",
  },
  {
    question: "How does the Bloom AI assistant work?",
    answer:
      "Bloom AI is a conversational Bible study companion. You can ask questions about any verse, explore theological concepts, or discuss your spiritual journey. It supports both voice and text input and draws from the complete Bible for contextual answers.",
  },
  {
    question: "Can I listen to prayers offline?",
    answer:
      "Audio prayers require an internet connection for streaming. We're working on offline support for a future update.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Bloom uses Sign in with Apple and Sign in with Google — there's no separate password to manage. Simply sign in with the same account you originally used.",
  },
  {
    question: "What devices are supported?",
    answer:
      "Bloom is currently available for iPhone and iPad running iOS 17 or later. An Android version is on our roadmap.",
  },
  {
    question: "How is my spiritual journey data used?",
    answer:
      "Your journey data (prayer requests, focus areas, growth goals) is stored securely and used only to personalize your experience within the app. We never sell your data or share it with third parties. See our Privacy Policy for full details.",
  },
  {
    question: "How do I delete my account?",
    answer:
      'You can delete your account from the Profile tab in the app. Go to Profile → Settings → Delete Account. This will permanently remove all your data from our servers.',
  },
];

const troubleshooting = [
  {
    issue: "Audio prayers won't play",
    steps: [
      "Check your internet connection",
      "Make sure your device isn't on silent mode",
      "Try closing and reopening the app",
      "Check that Bloom has permission to use audio in Settings → Bloom",
    ],
  },
  {
    issue: "App is running slowly",
    steps: [
      "Make sure you're running the latest version of Bloom",
      "Close other apps running in the background",
      "Restart your device",
      "If the issue persists, contact us at the email below",
    ],
  },
  {
    issue: "Sign in not working",
    steps: [
      "Ensure you have a stable internet connection",
      "Try signing in with the same method you originally used (Apple or Google)",
      "Update to the latest version of iOS",
      "If using Apple Sign In, check Settings → Apple ID → Sign-In & Security",
    ],
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <SupportHeader />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-4">
            Support Center
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-bloom-text mb-6">
            How can we help?
          </h1>
          <p className="text-lg text-bloom-text-secondary font-serif max-w-xl mx-auto">
            Find answers to common questions or reach out to our team directly.
          </p>
        </div>
      </section>

      {/* Contact card */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 md:p-8 rounded-xl bg-bloom-card border border-bloom-card-border text-center">
            <div className="w-12 h-12 rounded-full bg-bloom-accent/10 border border-bloom-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-5 h-5 text-bloom-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h2 className="font-serif text-xl font-semibold text-bloom-text mb-2">
              Contact Us Directly
            </h2>
            <p className="text-sm text-bloom-text-secondary mb-4">
              Can&apos;t find what you&apos;re looking for? We&apos;re happy to help.
            </p>
            <a
              href="mailto:support@bloomapp.co"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-bloom-accent hover:text-bloom-accent/80 transition-colors"
            >
              support@bloomapp.co
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="vintage-divider">
          <svg
            className="w-3 h-3 text-bloom-divider shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-bloom-text-tertiary mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-bloom-text mb-10">
            Common questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-bloom-card border border-bloom-card-border overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                  <span className="font-serif text-base font-medium text-bloom-text pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-bloom-text-tertiary shrink-0 transition-transform duration-200 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 -mt-1">
                  <p className="text-sm text-bloom-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="vintage-divider">
          <svg
            className="w-3 h-3 text-bloom-divider shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.8 2C15.5.8 13.2 2 12 3.2 10.8 2 8.5.8 6.2 2 3.2 3.5 2.7 7.2 4.5 9.5c2.6 3.2 7.5 7.5 7.5 7.5s4.9-4.3 7.5-7.5C21.3 7.2 20.8 3.5 17.8 2z" />
          </svg>
        </div>
      </div>

      {/* Troubleshooting */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-bloom-text-tertiary mb-2">
            Troubleshooting
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-bloom-text mb-10">
            Quick fixes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {troubleshooting.map((item) => (
              <div
                key={item.issue}
                className="p-6 rounded-xl bg-bloom-card border border-bloom-card-border"
              >
                <div className="w-10 h-10 rounded-lg border border-bloom-card-border flex items-center justify-center text-bloom-accent mb-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.648-3.03a1.125 1.125 0 01-.157-1.862L11.42 5.97a1.125 1.125 0 011.753.142L15.78 9.5M8.25 15.75H18a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v7.5A2.25 2.25 0 006 15.75h2.25z"
                    />
                  </svg>
                </div>

                <h3 className="font-serif text-base font-semibold text-bloom-text mb-3">
                  {item.issue}
                </h3>

                <ol className="space-y-2">
                  {item.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[11px] font-mono text-bloom-accent font-semibold mt-0.5 shrink-0">
                        {i + 1}.
                      </span>
                      <span className="text-sm text-bloom-text-secondary leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="vintage-divider">
          <svg
            className="w-3 h-3 text-bloom-divider shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      </div>

      {/* App info */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System requirements */}
            <div className="p-6 rounded-xl bg-bloom-card border border-bloom-card-border">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-bloom-text-tertiary mb-4">
                System Requirements
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Platform", value: "iOS" },
                  { label: "Minimum OS", value: "iOS 17.0+" },
                  { label: "Devices", value: "iPhone & iPad" },
                  { label: "Storage", value: "~50 MB" },
                  { label: "Internet", value: "Required for audio & AI features" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-bloom-text-secondary">
                      {item.label}
                    </span>
                    <span className="text-sm font-mono text-bloom-text font-medium">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Still need help */}
            <div className="p-6 rounded-xl bg-bloom-card border border-bloom-card-border flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-bloom-text-tertiary mb-4">
                  Still Need Help?
                </p>
                <p className="text-sm text-bloom-text-secondary leading-relaxed mb-6">
                  Our team typically responds within 24 hours. When reaching out,
                  please include your device model, iOS version, and a
                  description of the issue so we can assist you faster.
                </p>
              </div>
              <a
                href="mailto:support@bloomapp.co"
                className="inline-flex items-center justify-center gap-2 bg-bloom-accent text-bloom-card px-6 py-3 rounded-lg text-sm font-mono uppercase tracking-[0.1em] hover:bg-bloom-accent/90 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
