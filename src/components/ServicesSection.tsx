import { motion } from 'motion/react';
import { Lightbulb, Compass, MonitorPlay, LeafyGreen } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: "Advisory & Consulting",
      description: "Strategic guidance for complex projects, from feasibility studies to master planning and policy development.",
      icon: Lightbulb
    },
    {
      title: "Engineering Design",
      description: "World-class technical design for transportation, water, energy, and urban development infrastructure.",
      icon: Compass
    },
    {
      title: "Project Management",
      description: "End-to-end oversight ensuring projects are delivered on time, within budget, and to the highest standards.",
      icon: MonitorPlay
    },
    {
      title: "Sustainability Solutions",
      description: "Integrating environmental considerations and climate resilience into every phase of development.",
      icon: LeafyGreen
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-brand-lightgray border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-brand-charcoal tracking-tight mb-6 font-serif">
            Our Expertise
          </h2>
          <p className="text-lg text-[#555555]">
            We offer comprehensive solutions across the entire project lifecycle, tailored to the unique challenges and opportunities of the African market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white hover:bg-brand-cream transition-colors border border-brand-border shadow-sm group"
            >
              <div className="w-14 h-14 bg-brand-lightgray rounded-2xl flex items-center justify-center mb-6 text-brand-charcoal group-hover:text-brand-olive group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{service.title}</h3>
              <p className="text-[#555555] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
