import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DailyVerse from "@/components/DailyVerse";
import AudioPrayers from "@/components/AudioPrayers";
import BloomAI from "@/components/BloomAI";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DailyVerse />
      <AudioPrayers />
      <BloomAI />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
