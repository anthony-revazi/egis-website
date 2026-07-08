import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, Handshake, Repeat } from 'lucide-react';

const values = [
  {
    title: "Growth",
    icon: TrendingUp,
    description: "We are dedicated to fostering an environment that encourages continuous improvement and innovation. We believe in the potential for personal and professional development both for our team and our clients."
  },
  {
    title: "Consistency",
    icon: ShieldCheck,
    description: "We strive to provide reliable and high-quality services to all our clients consistently. At the heart of our service delivery, consistency builds trust and allows us to forge long-lasting relationships with those we serve."
  },
  {
    title: "Commitment",
    icon: Handshake,
    description: "We are fully committed to the success of our clients. Our dedication is reflected in our proactive approach to understanding client needs and delivering tailored solutions while upholding professionalism and integrity."
  },
  {
    title: "Continuity",
    icon: Repeat,
    description: "We understand the importance of sustaining progress over time. Our approach encompasses not just the initial certification process but also ongoing support to help clients maintain their improved systems."
  }
];

export function Values() {
  return (
    <section id="values" className="py-24 bg-background border-b border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-muted text-xs font-bold uppercase tracking-[0.3em] mb-4">Why choose us?</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight font-display mb-6">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-surface hover:bg-surface-hover transition-colors border border-border group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted leading-relaxed flex-grow">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
