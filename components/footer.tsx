import { Logo } from './logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-lowest py-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-extrabold tracking-tighter text-on-surface flex items-center gap-3">
            <Logo className="w-10 h-10" />
            Unfold
          </div>
          <div className="flex flex-wrap justify-center gap-12 font-label">
            <Link className="text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors font-bold" href="/privacy">Privacy</Link>
            <Link className="text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors font-bold" href="/terms">Terms</Link>
            <a className="text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors font-bold" href="#">Twitter / X</a>
          </div>
        </div>
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-label">
          <div className="text-xs tracking-[0.1em] uppercase text-on-surface-variant/50 font-medium">
            © 2026 Unfold. Designing for human depth.
          </div>
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Made with empathy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
