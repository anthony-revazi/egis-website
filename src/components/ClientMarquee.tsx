import { motion } from 'motion/react';

export function ClientMarquee() {
  const clients = [
    { name: "Panafrican Bank", id: 1 },
    { name: "EcoEnergy Group", id: 2 },
    { name: "Sud-Sahara Logistique", id: 3 },
    { name: "Westbound Capital", id: 4 },
    { name: "TerraFirma Mining", id: 5 },
    { name: "Lumina Digital", id: 6 },
  ];

  return (
    <section id="clients" className="py-12 bg-white overflow-hidden border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-warmgray whitespace-nowrap">
          Our Network
        </span>

      <div className="relative flex overflow-hidden group w-full bg-white flex-1">
        {/* We use two sets of items side by side to create a seamless infinite loop */}
        <div className="animate-marquee flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
          {clients.map((client) => (
            <div
              key={`set1-${client.id}`}
              className="text-xl md:text-2xl font-serif italic text-brand-warmgray opacity-40 hover:opacity-100 hover:text-brand-olive transition-colors cursor-default mx-8 md:mx-16"
            >
              {client.name}
            </div>
          ))}
        </div>
        <div className="animate-marquee flex items-center whitespace-nowrap group-hover:[animation-play-state:paused] absolute top-0" style={{ left: '100%' }}>
          {clients.map((client) => (
            <div
              key={`set2-${client.id}`}
              className="text-xl md:text-2xl font-serif italic text-brand-warmgray opacity-40 hover:opacity-100 hover:text-brand-olive transition-colors cursor-default mx-8 md:mx-16"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
