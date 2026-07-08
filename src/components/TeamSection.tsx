import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Moussa Diop",
    role: "Managing Director, Strategic Assets",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Leading our strategic initiatives and sustainable development goals across the continent."
  },
  {
    name: "Sarah Mensah",
    role: "Director of Investment Operations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: "Over 20 years of experience designing resilient transportation networks."
  },
  {
    name: "Jean-Paul Koffi",
    role: "Head of Policy & Governance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Championing eco-friendly solutions and green urban development."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-brand-lightgray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-brand-charcoal tracking-tight mb-4 font-serif">
              Our Leadership
            </h2>
            <p className="text-lg text-[#555555]">
              Our multidisciplinary team combines deep local knowledge with global expertise to deliver outstanding results.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#" className="text-xs font-bold uppercase underline tracking-wider text-brand-charcoal hover:text-brand-olive transition-colors inline-flex items-center gap-1">
              View all team members &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-4 rounded-2xl shadow-sm border border-brand-border"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-olive/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-charcoal hover:text-brand-olive hover:scale-110 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-charcoal hover:text-brand-olive hover:scale-110 transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-sm font-bold text-brand-charcoal mb-1">{member.name}</h3>
              <p className="text-brand-warmgray text-xs mb-3">{member.role}</p>
              <p className="text-[#555555] text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
