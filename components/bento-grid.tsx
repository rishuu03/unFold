import { Sparkles, LineChart, MessageCircle, Network } from 'lucide-react';
import * as motion from 'motion/react-client';

export function BentoGrid() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Large Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8 glass-panel p-16 rounded-[3rem] min-h-[500px] flex flex-col justify-end relative group overflow-hidden"
          >
            <div className="absolute top-12 right-12 w-64 h-64 bg-primary/15 rounded-full glow-blur group-hover:scale-110 transition-transform duration-700"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
                <Sparkles className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight">Personal Narrative AI</h3>
              <p className="text-on-surface-variant text-xl max-w-lg leading-relaxed font-light">
                It doesn&apos;t just process data; it remembers your journey. A compassionate companion that evolves with you.
              </p>
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-4 glass-panel p-12 rounded-[3rem] flex flex-col justify-between"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
              <LineChart className="text-secondary w-6 h-6" />
            </div>
            <div className="space-y-4 mt-12">
              <h3 className="text-2xl font-bold tracking-tight">Smart Resonance</h3>
              <p className="text-on-surface-variant leading-relaxed font-light">Matches based on life experiences and emotional frequency, not just mutual friends.</p>
            </div>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-4 glass-panel p-12 rounded-[3rem] flex flex-col justify-between"
          >
            <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
              <MessageCircle className="text-tertiary w-6 h-6" />
            </div>
            <div className="space-y-4 mt-12">
              <h3 className="text-2xl font-bold tracking-tight">Deep Dialogues</h3>
              <p className="text-on-surface-variant leading-relaxed font-light">Speak to people who truly relate because they&apos;ve stood exactly where you are.</p>
            </div>
          </motion.div>

          {/* Large Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-8 glass-panel p-16 rounded-[3rem] min-h-[500px] flex flex-col justify-end relative group overflow-hidden bg-secondary/[0.02]"
          >
            <div className="absolute top-12 right-12 w-80 h-80 bg-secondary/15 rounded-full glow-blur group-hover:scale-110 transition-transform duration-700"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 mb-4">
                <Network className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight">Social Layer</h3>
              <p className="text-on-surface-variant text-xl max-w-lg leading-relaxed font-light">
                Share, discover, and heal through collective experiences in a safe, deeply moderated digital space.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
