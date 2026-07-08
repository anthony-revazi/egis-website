import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const standards = [
  {
    title: "ISO 9001: Quality Management Systems (QMS)",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ISO 27001: Information Security Management Systems (ISMS)",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ISO 45001: Occupational Health and Safety Management (OHSMS)",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ISO 22000: Food Safety Management Systems (FSMS)",
    image: "https://images.unsplash.com/photo-1589254378772-234293f063ce?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ISO 42001: Organizational Governance of AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ISO 14001: Environmental Management Systems (EMS)",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop"
  }
];

export function IsoStandards() {
  return (
    <section id="standards" className="py-24 bg-surface border-b border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <p className="text-muted text-xs font-bold uppercase tracking-[0.3em] mb-4">What do we offer?</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight font-display">
              ISO Standards
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#contact" className="text-xs font-bold uppercase underline tracking-wider text-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
              Discuss Certification <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm border border-border hover:border-primary transition-colors flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={standard.image} 
                  alt={standard.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                  {standard.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted group-hover:text-primary transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
