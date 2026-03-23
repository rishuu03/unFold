import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-40 pb-24 px-8 max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface">Our Philosophy</h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed">
            Why we built Unfold and what we believe about the future of human connection.
          </p>
        </div>

        <div className="space-y-12">
          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">The Loneliness Epidemic</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We are more connected than ever before, yet we feel more isolated. Social media has optimized for engagement over empathy, turning human connection into a performance. We believe the antidote to loneliness isn&apos;t more connections—it&apos;s deeper ones.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">AI as a Mirror, Not a Replacement</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We don&apos;t believe AI should replace human interaction. Instead, AI should act as a mirror—helping us understand ourselves better—and a bridge—connecting us with others who share our emotional landscape. Unfold uses AI to facilitate human empathy, not simulate it.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">Shared Experience Over Shared Interests</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Traditional matching algorithms focus on superficial data: where you went to school, what music you like, or who you know. But the deepest bonds are forged through shared experiences—navigating grief, changing careers, moving to a new city, or overcoming a challenge. Unfold connects you based on what you&apos;re going through, not just who you are on paper.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
