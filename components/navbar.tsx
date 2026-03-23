'use client';

import { Sparkles, Menu } from 'lucide-react';
import * as motion from 'motion/react-client';
import { Logo } from './logo';
import { useWaitlist } from './waitlist-provider';
import Link from 'next/link';

export function Navbar() {
  const { openWaitlist } = useWaitlist();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-[100] border-b border-white/5 bg-surface/40 backdrop-blur-2xl"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-on-surface flex items-center gap-2">
          <Logo className="w-8 h-8" />
          Unfold
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">How it works</Link>
          <Link className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="/philosophy">Philosophy</Link>
          <button onClick={openWaitlist} className="bg-on-surface text-surface px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary transition-all ambient-glow-primary hover:-translate-y-0.5 active:translate-y-0">
            Join Waitlist
          </button>
        </div>
        <div className="md:hidden">
          <Menu className="text-primary w-6 h-6" />
        </div>
      </div>
    </motion.nav>
  );
}
