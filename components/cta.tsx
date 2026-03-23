'use client';

import * as motion from 'motion/react-client';
import { useWaitlist } from './waitlist-provider';

export function CTA() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-48 px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto glass-panel p-16 md:p-32 rounded-[4rem] text-center space-y-16 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
        
        <div className="space-y-8 relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9]">
            Start with a conversation.
          </h2>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            Let Unfold understand you first. Then find the people you were meant to meet. Early access is now open.
          </p>
        </div>
        
        <button onClick={openWaitlist} className="relative z-10 bg-primary text-surface px-14 py-6 rounded-[3rem] font-bold text-xl ambient-glow-primary hover:-translate-y-1 transition-transform active:translate-y-0">
          Get Early Access
        </button>
      </motion.div>
    </section>
  );
}
