import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Twitter, Facebook } from 'lucide-react';
import { AnimationToggle } from '../components/AnimationToggle';
import { FadeIn } from '../components/FadeIn';
import { LinkedInLogo } from '../components/LinkedInLogo';
import { CalendlyModal } from '../components/CalendlyModal';
import { navLinks, heroContent, teamMembers, standards, values, journeyContent, themes } from '../data';

export function NaturalTheme() {
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4 border-b border-border' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-widest uppercase text-foreground">Egis</a>
          
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-muted hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <AnimationToggle />
            <button onClick={() => setIsCalendlyOpen(true)} className="bg-primary hover:bg-primary-hover text-background px-6 py-2.5 rounded text-sm font-serif transition-colors cursor-pointer">
              Schedule a Call
            </button>
          </div>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-background border-t border-border shadow-xl lg:hidden flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif text-foreground py-2 border-b border-border">
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden bg-surface relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <FadeIn direction="right" className="flex-1">
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-6 block">{heroContent.label}</span>
              <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.1] mb-8">
                {heroContent.titlePart1} <br/>
                {heroContent.titlePart2} <span className="italic text-primary">{heroContent.titleHighlight}</span>.
              </h1>
              <p className="text-xl text-muted mb-12 max-w-lg leading-relaxed">
                {heroContent.description}
              </p>
              <div className="flex items-center gap-6">
                <button onClick={() => setIsCalendlyOpen(true)} className="bg-primary hover:bg-primary-hover text-background px-8 py-4 rounded text-lg font-serif transition-colors inline-flex items-center gap-3 cursor-pointer">
                  Schedule a Call <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="flex-1 w-full relative">
              <div className="aspect-[4/5] bg-border rounded-t-full overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Standards */}
        <section id="standards" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Our Expertise</h2>
              <div className="w-24 h-px bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {standards.map((standard, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                    <img src={standard.image} alt={standard.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground leading-snug group-hover:text-primary transition-colors">{standard.title}</h3>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 mb-20">
              <div className="lg:w-1/3">
                <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">Our Core <br/><span className="italic text-primary">Values</span></h2>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                {values.map((value, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <value.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                    <h3 className="font-serif text-2xl text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted leading-relaxed">{value.description}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Our Team</h2>
              <div className="w-24 h-px bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group text-center flex flex-col h-full">
                    <div className="aspect-square rounded-full overflow-hidden mb-6 relative w-48 h-48 mx-auto">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">{member.role}</p>
                    <p className="text-muted leading-relaxed text-sm mb-6">{member.description}</p>
                    {member.linkedin && (
                      <div className="mt-auto">
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all">
                          <LinkedInLogo className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-surface p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <img src={journeyContent.image} alt="Journey" className="w-full h-auto shadow-xl" />
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">{journeyContent.label}</span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                  {journeyContent.titlePart1} <span className="italic text-primary">{journeyContent.titleHighlight}</span>
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-10">{journeyContent.description}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact */}
      <section id="contact" className="py-24 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Contact Us</h2>
          <p className="text-muted mb-12">Get in touch with our team to start your ISO certification journey.</p>
          <form className="text-left space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="bg-primary hover:bg-primary-hover text-background px-8 py-4 rounded text-lg font-serif transition-colors w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <span className="font-serif text-3xl tracking-widest uppercase mb-6 block">Egis</span>
              <p className="text-background/70 max-w-sm mb-8 leading-relaxed">
                {heroContent.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6">Explore</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-background/70 hover:text-white transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Themes</h4>
              <ul className="space-y-4">
                {themes.map(theme => (
                  <li key={theme.id}>
                    <a href={`?theme=${theme.id}`} className={`transition-colors ${theme.id === 'theme-natural' ? 'text-primary' : 'text-background/70 hover:text-white'}`}>
                      {theme.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-background/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Egis. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#0A66C2] transition-colors"><LinkedInLogo className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}
