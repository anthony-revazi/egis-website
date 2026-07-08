import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Twitter, Facebook, Terminal } from 'lucide-react';
import { AnimationToggle } from '../components/AnimationToggle';
import { FadeIn } from '../components/FadeIn';
import { LinkedInLogo } from '../components/LinkedInLogo';
import { CalendlyModal } from '../components/CalendlyModal';
import { navLinks, heroContent, teamMembers, standards, values, journeyContent, themes } from '../data';

export function MidnightTheme() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border ${isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm py-4' : 'bg-background py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold tracking-widest text-xl uppercase">Egis</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-mono tracking-widest uppercase text-muted hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <AnimationToggle />
            <button onClick={() => setIsCalendlyOpen(true)} className="hidden lg:flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-background px-6 py-2 rounded text-xs font-mono uppercase tracking-widest transition-all cursor-pointer">
              Initialize
            </button>
          </div>

          <button className="lg:hidden p-2 text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-surface border-b border-border shadow-2xl lg:hidden flex flex-col p-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-mono uppercase tracking-widest text-foreground py-3 border-b border-border">
                  <span className="text-primary mr-2">{'>'}</span> {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="pt-40 pb-20 lg:pt-56 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <FadeIn direction="up" className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 mb-8 bg-surface border border-border px-4 py-2 rounded-full font-mono text-xs text-primary uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {heroContent.label}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground tracking-tight leading-tight mb-8 max-w-4xl">
              {heroContent.titlePart1} <br/>
              <span className="text-muted font-normal">{heroContent.titlePart2}</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{heroContent.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted mb-12 max-w-2xl font-light">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => setIsCalendlyOpen(true)} className="bg-primary hover:bg-primary-hover text-background px-8 py-4 rounded font-mono text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer">
                Schedule a Call
              </button>
            </div>
          </FadeIn>
        </section>

        {/* Standards (Bento) */}
        <section id="standards" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-2xl font-mono uppercase tracking-widest text-foreground mb-4"><span className="text-primary">/</span> ISO Standards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
              {standards.map((standard, i) => (
                <FadeIn key={i} delay={i * 0.1} className={i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-2 lg:col-span-1'}>
                <div className="bg-surface border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary transition-colors h-full">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                    <img src={standard.image} alt={standard.title} className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-background/80 mix-blend-overlay"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <span className="font-mono text-xs text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">CERT_ID: 0{i+1}</span>
                    <h3 className="font-bold text-lg leading-tight text-foreground">{standard.title}</h3>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="py-24 bg-surface border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-2xl font-mono uppercase tracking-widest text-foreground mb-4"><span className="text-primary">/</span> Core Vectors</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {values.map((value, i) => (
                <FadeIn key={i} delay={i * 0.1} className="bg-surface p-10 hover:bg-surface-hover transition-colors">
                  <div className="flex items-center gap-4 mb-6 text-primary">
                    <value.icon className="w-6 h-6" />
                    <span className="font-mono text-sm uppercase tracking-widest">{value.title}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 bg-surface border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-2xl font-mono uppercase tracking-widest text-foreground mb-4"><span className="text-primary">/</span> Operational Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-background border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary transition-colors h-full flex flex-col">
                    <div className="w-full aspect-square overflow-hidden mb-6 rounded-lg border border-border relative">
                       <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                       <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    </div>
                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-xs text-primary block">USER_ID: 0{i+1}</span>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-[#0A66C2] transition-colors">
                            <LinkedInLogo className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <h3 className="font-bold text-lg leading-tight text-foreground mb-1">{member.name}</h3>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">{member.role}</p>
                      <p className="text-muted text-sm leading-relaxed mt-auto">{member.description}</p>
                    </div>
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
              <FadeIn direction="right">
                <div className="font-mono text-xs text-primary uppercase tracking-widest mb-6">Status: Uncertified</div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                  {journeyContent.titlePart1} <span className="text-primary">{journeyContent.titleHighlight}</span>
                </h2>
                <p className="text-muted leading-relaxed mb-10">
                  {journeyContent.description}
                </p>
                <div className="border-l-2 border-border pl-6 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                    <h4 className="font-bold text-foreground">Phase 1: Analysis</h4>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-border"></div>
                    <h4 className="font-bold text-muted">Phase 2: Implementation</h4>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-border"></div>
                    <h4 className="font-bold text-muted">Phase 3: Certification</h4>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.2} className="relative rounded-2xl overflow-hidden border border-border">
                <img src={journeyContent.image} alt="Journey" className="w-full h-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-mono uppercase tracking-widest text-foreground mb-4"><span className="text-primary">/</span> Secure Comm Channel</h2>
            <p className="text-muted text-sm">Initialize connection protocol to our servers.</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-primary mb-2">Identifier_Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground font-mono text-sm" placeholder="Enter Name" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-primary mb-2">Comms_Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground font-mono text-sm" placeholder="Enter Email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-primary mb-2">Payload_Data</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground font-mono text-sm" placeholder="Enter Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-background px-8 py-4 rounded font-mono text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                Transmit Data
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-bold tracking-widest text-lg uppercase">Egis</span>
              </div>
              <p className="text-muted text-sm max-w-xs mb-8">
                {heroContent.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-foreground mb-6">System Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-muted hover:text-primary text-sm font-mono transition-colors"><span className="text-primary mr-2 opacity-0 hover:opacity-100 transition-opacity">{'>'}</span>{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-foreground mb-6">UI Themes</h4>
              <ul className="space-y-3">
                {themes.map(theme => (
                  <li key={theme.id}>
                    <a href={`?theme=${theme.id}`} className={`text-sm font-mono transition-colors flex items-center gap-2 ${theme.id === 'theme-midnight' ? 'text-primary' : 'text-muted hover:text-foreground'}`}>
                      {theme.id === 'theme-midnight' ? '[ ACTIVE ]' : '[ SELECT ]'} {theme.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex justify-between items-center text-muted text-xs font-mono uppercase">
            <p>&copy; {new Date().getFullYear()} EGIS_SYS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#0A66C2] transition-colors"><LinkedInLogo className="w-4 h-4" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}
