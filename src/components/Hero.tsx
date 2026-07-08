import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background border-b border-border transition-colors duration-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="text-muted text-xs font-bold uppercase tracking-[0.3em]">Business Consultancy</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-foreground leading-[1.1] mb-6 font-display"
          >
            ISO standards <br className="hidden md:block" />
            implementation doesn't have to feel like a <span className="italic text-primary">chore</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed"
          >
            We deliver world-class business consultancy in implementing your ISO standard of choice.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-foreground hover:bg-primary text-background px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:pr-6 group"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#standards"
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-surface text-foreground border border-border px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
            >
              Explore Standards
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
