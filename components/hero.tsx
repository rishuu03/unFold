'use client';

import { Sparkles } from 'lucide-react';
import * as motion from 'motion/react-client';
import { Logo } from './logo';
import { useWaitlist } from './waitlist-provider';

export function Hero() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-40 px-8 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full glow-blur"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/15 rounded-full glow-blur"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase font-label">
            <Sparkles className="w-3.5 h-3.5" />
            Understanding First
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface leading-[0.95] text-balance">
            Whatever you&apos;re going through — <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">someone</span> out there understands.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-light">
            Talk to your personal AI. It understands your situation, your mindset, your journey — and connects you with people who actually relate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button onClick={openWaitlist} className="bg-gradient-to-br from-primary to-secondary text-surface px-10 py-5 rounded-[3rem] font-bold text-lg ambient-glow-primary hover:-translate-y-1 transition-transform active:translate-y-0">
              Start Talking
            </button>
            <button onClick={openWaitlist} className="glass-panel text-on-surface px-10 py-5 rounded-[3rem] font-bold text-lg hover:bg-surface-high transition-colors">
              Join Waitlist
            </button>
          </div>
        </motion.div>

        {/* Mockup Integration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative z-10 w-full max-w-[340px] perspective-[1000px]">
            <div className="bg-surface-container border border-white/5 rounded-[3.5rem] p-3.5 shadow-2xl transform transition-transform hover:rotate-1 duration-700">
              <div className="bg-surface-lowest rounded-[3rem] h-[650px] overflow-hidden flex flex-col relative">
                
                {/* App Header */}
                <div className="pt-10 px-8 pb-6 flex items-center justify-between border-b border-white/5 bg-surface-lowest/80 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Logo className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-primary uppercase tracking-widest font-label">Unfold AI</div>
                      <div className="text-[10px] text-on-surface-variant flex items-center gap-1 font-label">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span> Listening
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Content */}
                <div className="flex-1 p-8 space-y-6 overflow-y-auto">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                    className="bg-surface-high/60 p-5 rounded-3xl rounded-tl-none mr-4 text-sm leading-relaxed border border-white/5"
                  >
                    I hear you. Transitioning careers in your 30s can feel lonely and intimidating.
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }}
                    className="bg-primary/10 p-5 rounded-3xl rounded-tr-none ml-4 text-sm text-right leading-relaxed border border-primary/20"
                  >
                    Yeah, it&apos;s just... everyone else seems so settled and sure of themselves.
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 }}
                    className="bg-surface-high/60 p-5 rounded-3xl rounded-tl-none mr-4 text-sm leading-relaxed border border-white/5"
                  >
                    I&apos;ve actually found 4 people in your city navigating this exact shift right now. They shared similar thoughts. Want to connect?
                  </motion.div>
                </div>

                {/* Input Mockup */}
                <div className="p-6 border-t border-white/5 bg-surface-lowest">
                  <div className="w-full h-12 rounded-2xl bg-surface-high border border-white/5 flex items-center px-4">
                    <div className="w-1 h-4 bg-primary animate-pulse rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative back layers */}
            <div className="absolute -z-10 -right-8 top-12 w-full h-[650px] bg-secondary/10 rounded-[3.5rem] border border-white/5 transform rotate-6 scale-95 blur-[2px]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
