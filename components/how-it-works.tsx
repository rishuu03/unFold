import { MessageSquare, Brain, Users } from 'lucide-react';
import * as motion from 'motion/react-client';

const steps = [
  {
    icon: MessageSquare,
    title: "01. Talk to your AI",
    description: "Share anything: career confusion, relationships, or fleeting thoughts. No forms, just natural, private conversation.",
    color: "text-primary",
    bgHover: "group-hover:bg-primary/10",
    borderHover: "group-hover:border-primary/20",
  },
  {
    icon: Brain,
    title: "02. Deep Context",
    description: "AI understands you deeply—your situation and personality. It looks for real context, not just simple keywords.",
    color: "text-secondary",
    bgHover: "group-hover:bg-secondary/10",
    borderHover: "group-hover:border-secondary/20",
  },
  {
    icon: Users,
    title: "03. Real Resonance",
    description: "Connect with people who relate. Same problems, same phase, real understanding. Conversations that actually matter.",
    color: "text-tertiary",
    bgHover: "group-hover:bg-tertiary/10",
    borderHover: "group-hover:border-tertiary/20",
  }
];

export function HowItWorks() {
  return (
    <section className="py-48 px-8 relative overflow-hidden">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full glow-blur"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="space-y-10 group"
            >
              <div className={`w-20 h-20 rounded-[2rem] bg-surface-container ghost-border flex items-center justify-center ${step.bgHover} ${step.borderHover} transition-all duration-500 shadow-xl`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">{step.title}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
