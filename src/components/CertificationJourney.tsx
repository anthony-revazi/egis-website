import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CertificationJourney() {
  return (
    <section id="journey" className="py-24 bg-surface transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-muted text-xs font-bold uppercase tracking-[0.3em] mb-4">Be ISO Certified</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6 font-display leading-tight">
              How can my enterprise <br className="hidden md:block"/> become <span className="italic text-primary">ISO certified?</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              At Egis, we offer a clear and structured 6-step approach to ISO implementation to ensure a smooth and efficient process for your organization across a wide range of ISO standards.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground hover:bg-primary text-background px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all group"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
              alt="Journey to Certification"
              className="w-full h-auto rounded-3xl shadow-xl relative z-10 border border-border"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
