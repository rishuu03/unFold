import * as motion from 'motion/react-client';

export function Quote() {
  return (
    <section className="py-64 px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_50%)] opacity-5"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance">
          “People don’t connect over <span className="opacity-30">perfection</span>. They connect over <span className="text-primary italic">shared realities</span>.”
        </h2>
      </motion.div>
    </section>
  );
}
