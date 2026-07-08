import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Twitter, Facebook } from 'lucide-react';
import { AnimationToggle } from '../components/AnimationToggle';
import { FadeIn } from '../components/FadeIn';
import { LinkedInLogo } from '../components/LinkedInLogo';
import { CalendlyModal } from '../components/CalendlyModal';
import { navLinks, heroContent, teamMembers, standards, values, journeyContent, themes } from '../data';

export function NeoBrutalismTheme() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-border py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-3xl uppercase tracking-tighter bg-primary px-3 py-1 border-2 border-border shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]">
            EGIS
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-bold uppercase tracking-wider hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-border hover:shadow-[4px_4px_0px_0px_rgba(30,30,36,1)] transition-all">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <AnimationToggle className="bg-white border-2 border-border shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]" />
            <button onClick={() => setIsCalendlyOpen(true)} className="bg-surface hover:bg-surface-hover text-foreground px-6 py-2 border-4 border-border shadow-[4px_4px_0px_0px_rgba(30,30,36,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
              Schedule Call
            </button>
          </div>

          <button className="lg:hidden p-2 text-foreground border-2 border-border shadow-[4px_4px_0px_0px_rgba(30,30,36,1)] bg-surface" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-background border-b-4 border-border lg:hidden flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-wider text-foreground py-2 border-b-2 border-border">
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden bg-[#FFE066] border-b-4 border-border">
          <FadeIn direction="up" className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start">
            <div className="bg-white border-4 border-border px-4 py-2 mb-8 shadow-[8px_8px_0px_0px_rgba(30,30,36,1)] transform -rotate-2">
              <span className="font-bold text-sm uppercase tracking-widest">{heroContent.label}</span>
            </div>
            <h1 className="font-display font-bold text-6xl md:text-8xl text-foreground leading-[1] mb-8 uppercase tracking-tighter">
              {heroContent.titlePart1} <br/>
              <span className="text-4xl md:text-6xl">{heroContent.titlePart2}</span> <br/>
              <span className="bg-primary text-white px-4 py-2 border-4 border-border inline-block shadow-[8px_8px_0px_0px_rgba(30,30,36,1)] transform rotate-1 mt-4">{heroContent.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl leading-snug bg-white border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(30,30,36,1)]">
              {heroContent.description}
            </p>
            <div className="flex gap-6">
              <button onClick={() => setIsCalendlyOpen(true)} className="bg-primary text-white px-10 py-5 border-4 border-border shadow-[8px_8px_0px_0px_rgba(30,30,36,1)] text-xl font-bold uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 cursor-pointer">
                Schedule a Call <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </FadeIn>
        </section>

        {/* Standards */}
        <section id="standards" className="py-24 bg-background border-b-4 border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-16 inline-block bg-surface px-6 py-3 border-4 border-border shadow-[8px_8px_0px_0px_rgba(30,30,36,1)]">
              Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {standards.map((standard, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border-4 border-border shadow-[12px_12px_0px_0px_rgba(30,30,36,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[0px_0px_0px_0px_rgba(30,30,36,1)] transition-all flex flex-col h-full">
                  <div className="h-48 border-b-4 border-border overflow-hidden">
                    <img src={standard.image} alt={standard.title} className="w-full h-full object-cover filter contrast-125 saturate-150" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between bg-[#E0E7FF]">
                    <h3 className="font-bold text-xl uppercase mb-6">{standard.title}</h3>
                    <button className="bg-primary text-white border-2 border-border px-4 py-2 font-bold uppercase text-sm shadow-[4px_4px_0px_0px_rgba(30,30,36,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all self-start">
                      Read More
                    </button>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="py-24 bg-[#FF9F1C] border-b-4 border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-16 text-center text-white text-shadow-brutal">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {values.map((value, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border-4 border-border p-8 shadow-[12px_12px_0px_0px_rgba(30,30,36,1)] transform hover:-translate-y-2 transition-transform h-full">
                  <div className="w-16 h-16 bg-surface border-4 border-border flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]">
                    <value.icon className="w-8 h-8" strokeWidth={3} />
                  </div>
                  <h3 className="font-bold text-3xl uppercase mb-4 tracking-tighter">{value.title}</h3>
                  <p className="font-medium text-lg leading-relaxed">{value.description}</p>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 bg-[#E0E7FF] border-b-4 border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-16 inline-block bg-white px-6 py-3 border-4 border-border shadow-[8px_8px_0px_0px_rgba(30,30,36,1)]">
              The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white border-4 border-border shadow-[12px_12px_0px_0px_rgba(30,30,36,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[0px_0px_0px_0px_rgba(30,30,36,1)] transition-all flex flex-col h-full text-center">
                    <div className="h-48 border-b-4 border-border overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover filter contrast-125 saturate-150" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col items-center relative">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="absolute top-4 right-4 text-foreground hover:text-[#0A66C2] transition-colors">
                          <LinkedInLogo className="w-5 h-5" />
                        </a>
                      )}
                      <h3 className="font-bold text-xl uppercase mb-2">{member.name}</h3>
                      <p className="bg-primary text-white font-bold text-xs px-2 py-1 uppercase border-2 border-border mb-4">{member.role}</p>
                      <p className="font-medium text-sm leading-relaxed mt-auto">{member.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-24 bg-surface border-b-4 border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <FadeIn direction="right" className="flex-1 order-2 lg:order-1 border-4 border-border shadow-[16px_16px_0px_0px_rgba(30,30,36,1)]">
                <img src={journeyContent.image} alt="Journey" className="w-full h-auto filter contrast-125 saturate-150" />
              </FadeIn>
              <FadeIn direction="left" delay={0.2} className="flex-1 order-1 lg:order-2">
                <div className="bg-primary text-white font-bold text-sm uppercase tracking-widest inline-block px-4 py-2 border-4 border-border mb-6 shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]">
                  {journeyContent.label}
                </div>
                <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-8 leading-none">
                  {journeyContent.titlePart1} <br/> <span className="bg-white px-2 mt-2 inline-block border-4 border-border transform -rotate-1">{journeyContent.titlePart2}</span> <br/>
                  {journeyContent.titleHighlight}
                </h2>
                <p className="text-xl font-bold mb-8 p-6 bg-white border-4 border-border shadow-[8px_8px_0px_0px_rgba(30,30,36,1)]">
                  {journeyContent.description}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-[#FF9F1C] border-b-4 border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-12 inline-block bg-white px-6 py-3 border-4 border-border shadow-[8px_8px_0px_0px_rgba(30,30,36,1)] transform -rotate-1">
            Contact Us
          </h2>
          <div className="bg-white border-4 border-border p-8 shadow-[16px_16px_0px_0px_rgba(30,30,36,1)]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-xl uppercase mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface border-4 border-border focus:outline-none focus:bg-[#E0E7FF] transition-colors font-bold text-lg" placeholder="JOHN DOE" />
                </div>
                <div>
                  <label className="block font-bold text-xl uppercase mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-surface border-4 border-border focus:outline-none focus:bg-[#E0E7FF] transition-colors font-bold text-lg" placeholder="JOHN@EXAMPLE.COM" />
                </div>
              </div>
              <div>
                <label className="block font-bold text-xl uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-surface border-4 border-border focus:outline-none focus:bg-[#E0E7FF] transition-colors font-bold text-lg" placeholder="TELL US MORE..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold text-2xl uppercase py-4 border-4 border-border shadow-[8px_8px_0px_0px_rgba(30,30,36,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b-4 border-border pb-16 mb-12">
            <div className="md:col-span-2">
              <div className="font-display font-bold text-5xl uppercase tracking-tighter bg-primary text-white inline-block px-4 py-2 border-4 border-border shadow-[8px_8px_0px_0px_rgba(30,30,36,1)] mb-8">
                EGIS
              </div>
              <p className="font-bold text-xl max-w-sm mb-8">
                {heroContent.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-2xl uppercase tracking-tighter mb-6 bg-white border-2 border-border inline-block px-3 py-1 shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]">Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="font-bold uppercase hover:bg-primary hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-2xl uppercase tracking-tighter mb-6 bg-white border-2 border-border inline-block px-3 py-1 shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]">Themes</h4>
              <ul className="space-y-4">
                {themes.map(theme => (
                  <li key={theme.id}>
                    <a href={`?theme=${theme.id}`} className={`font-bold uppercase transition-colors px-2 border-2 ${theme.id === 'theme-neobrutalism' ? 'bg-primary text-white border-border shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]' : 'border-transparent hover:border-border'}`}>
                      {theme.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center font-bold uppercase gap-6">
            <p className="border-4 border-border px-4 py-2 bg-white shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]">&copy; {new Date().getFullYear()} EGIS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white border-4 border-border flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]"><LinkedInLogo className="w-6 h-6" /></a>
              <a href="#" className="w-12 h-12 bg-white border-4 border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="w-12 h-12 bg-white border-4 border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(30,30,36,1)]"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}
