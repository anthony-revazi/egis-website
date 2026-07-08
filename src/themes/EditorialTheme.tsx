import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Twitter, Facebook } from 'lucide-react';
import { AnimationToggle } from '../components/AnimationToggle';
import { FadeIn } from '../components/FadeIn';
import { LinkedInLogo } from '../components/LinkedInLogo';
import { CalendlyModal } from '../components/CalendlyModal';
import { navLinks, heroContent, teamMembers, standards, values, journeyContent, themes } from '../data';

export function EditorialTheme() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 border-b border-border pb-4 flex items-center justify-between">
          <nav className="hidden lg:flex items-center gap-8 w-1/3">
            {navLinks.slice(0, 2).map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#" className="font-serif text-3xl md:text-4xl tracking-tight text-center w-1/3 flex justify-center">
            EGIS.
          </a>

          <nav className="hidden lg:flex items-center justify-end gap-8 w-1/3">
            <AnimationToggle />
            {navLinks.slice(2, 4).map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors">
                {link.name}
              </a>
            ))}
            <button onClick={() => setIsCalendlyOpen(true)} className="text-[10px] font-sans uppercase tracking-[0.2em] text-background bg-foreground px-4 py-2 hover:bg-primary transition-colors cursor-pointer">
              Schedule
            </button>
          </nav>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-background border-b border-border lg:hidden flex flex-col p-8 gap-6 text-center shadow-2xl">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-2xl text-foreground">
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="pt-40 pb-20 lg:pt-48 lg:pb-32">
          <FadeIn direction="up" className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-12 block">
              Vol. 1 &mdash; {heroContent.label}
            </span>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tight mb-12 max-w-5xl">
              {heroContent.titlePart1} <br/>
              <span className="font-light italic text-muted">{heroContent.titlePart2}</span> <br/>
              {heroContent.titleHighlight}.
            </h1>
            <div className="w-px h-24 bg-border mb-12"></div>
            <p className="font-sans text-sm md:text-base text-muted max-w-md leading-relaxed mb-12">
              {heroContent.description}
            </p>
          </FadeIn>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full h-px bg-border"></div>
        </div>

        {/* Standards */}
        <section id="standards" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">The <br/><span className="italic text-muted">Standards</span> Collection</h2>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted max-w-xs text-right">
                A curated selection of operational excellences designed for the modern enterprise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {standards.map((standard, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                <div className={`group ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                    <img src={standard.image} alt={standard.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                  </div>
                  <div className="flex gap-4">
                    <span className="font-sans text-[10px] text-muted">0{i+1}</span>
                    <div>
                      <h3 className="font-serif text-2xl leading-tight mb-4">{standard.title}</h3>
                      <button onClick={() => setIsCalendlyOpen(true)} className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                        Discover
                      </button>
                    </div>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="border-t border-white/20 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="font-serif text-4xl md:text-6xl tracking-tight mb-8">Core <br/><span className="italic text-white/60">Values.</span></h2>
              </div>
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {values.map((value, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-serif text-2xl">{value.title}</h3>
                      <value.icon className="w-5 h-5 text-white/40" strokeWidth={1} />
                    </div>
                    <p className="font-sans text-sm text-white/60 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="border-t border-border pt-16 flex justify-between items-end mb-16 gap-8">
               <h2 className="font-serif text-4xl md:text-5xl tracking-tight">The <br/><span className="italic text-muted">Team</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group h-full flex flex-col">
                    <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-2xl leading-tight">{member.name}</h3>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-[#0A66C2] transition-colors mt-1">
                          <LinkedInLogo className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-4">{member.role}</p>
                    <p className="font-sans text-sm text-muted leading-relaxed mt-auto">{member.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right" className="aspect-[4/5] overflow-hidden">
                <img src={journeyContent.image} alt="Journey" className="w-full h-full object-cover filter sepia-[0.3]" />
              </FadeIn>
              <FadeIn direction="left" delay={0.2} className="lg:pl-12">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-8 block">Process Overview</span>
                <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.1] mb-12">
                  {journeyContent.titlePart1} <br/> <span className="italic text-muted">{journeyContent.titlePart2}</span> <br/> {journeyContent.titleHighlight}
                </h2>
                <p className="font-sans text-sm md:text-base text-muted leading-relaxed mb-12 max-w-md">
                  {journeyContent.description}
                </p>
                <button onClick={() => setIsCalendlyOpen(true)} className="inline-flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-2 hover:text-primary hover:border-primary transition-all group cursor-pointer">
                  Schedule a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="border-t border-border pt-16 mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">Contact <span className="italic text-muted">Us</span></h2>
            <p className="font-sans text-sm text-muted">Inquiries & Consultations</p>
          </div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-foreground mb-3">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-foreground transition-colors font-serif text-lg" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-foreground mb-3">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-foreground transition-colors font-serif text-lg" placeholder="jane@example.com" />
              </div>
            </div>
            <div>
              <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-foreground mb-3">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-foreground transition-colors font-serif text-lg resize-none" placeholder="How can we assist you?"></textarea>
            </div>
            <div className="pt-4 text-center">
              <button type="submit" className="inline-flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.2em] text-background bg-foreground px-8 py-4 hover:bg-primary transition-colors group">
                Send Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-5">
              <h2 className="font-serif text-5xl tracking-tight mb-8">EGIS.</h2>
              <p className="font-sans text-sm text-muted max-w-sm leading-relaxed">
                {heroContent.description}
              </p>
            </div>
            
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-8">Index</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="font-serif text-xl hover:italic hover:text-primary transition-all">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-8">Editions</h4>
              <ul className="space-y-4">
                {themes.map(theme => (
                  <li key={theme.id}>
                    <a href={`?theme=${theme.id}`} className={`font-sans text-[10px] uppercase tracking-[0.1em] transition-colors flex items-center gap-2 ${theme.id === 'theme-editorial' ? 'text-primary' : 'text-muted hover:text-foreground'}`}>
                      {theme.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted">&copy; {new Date().getFullYear()} EGIS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted hover:text-[#0A66C2] transition-colors"><LinkedInLogo className="w-4 h-4" /></a>
              <a href="#" className="text-muted hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-muted hover:text-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}
