import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Narrative } from '@/components/narrative';
import { HowItWorks } from '@/components/how-it-works';
import { BentoGrid } from '@/components/bento-grid';
import { Quote } from '@/components/quote';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <Narrative />
      <HowItWorks />
      <BentoGrid />
      <Quote />
      <CTA />
      <Footer />
    </main>
  );
}
