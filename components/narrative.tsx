import * as motion from 'motion/react-client';

export function Narrative() {
  return (
    <section className="py-48 px-8 bg-surface-lowest/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
      >
        <span className="font-label text-xs tracking-[0.3em] uppercase text-primary font-bold">
          The Narrative Shift
        </span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface text-balance">
          Not a dating app. Not a social network.
        </h2>
        <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
          This is a sanctuary where your thoughts and experiences become the catalyst for connection. We prioritize depth over swipes and empathy over algorithms.
        </p>
      </motion.div>
    </section>
  );
}
