import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sparkles, LineChart, MessageCircle } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-40 pb-24 px-8 max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface">How Unfold Works</h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed">
            A step-by-step guide to finding your people through shared experiences.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="glass-panel p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Sparkles className="text-primary w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">1. Share your story</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Talk to your personal AI companion about what you&apos;re going through. Whether it&apos;s a career transition, a move to a new city, or a personal challenge, Unfold listens without judgment and helps you articulate your feelings.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
              <LineChart className="text-secondary w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">2. Find resonance</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Our matching engine doesn&apos;t look at mutual friends or superficial interests. It analyzes the emotional frequency and core themes of your experiences to find people who are navigating similar life chapters.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
              <MessageCircle className="text-tertiary w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">3. Connect deeply</h3>
              <p className="text-on-surface-variant leading-relaxed">
                When there&apos;s a match, Unfold facilitates the introduction by highlighting your shared context. Skip the small talk and dive straight into meaningful conversations with people who truly understand.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
