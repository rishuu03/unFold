import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-40 pb-24 px-8 max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface">Terms of Service</h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed">
            Please read these terms carefully before using Unfold.
          </p>
        </div>

        <div className="space-y-12">
          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">Acceptance of Terms</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              By accessing or using the Unfold service, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">User Conduct</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              You agree not to use the Service to: upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another&apos;s privacy, hateful, or racially, ethnically or otherwise objectionable.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">Termination</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
