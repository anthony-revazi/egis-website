import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Twitter, Facebook, ChevronRight } from 'lucide-react';
import { AnimationToggle } from '../components/AnimationToggle';
import { FadeIn } from '../components/FadeIn';
import { LinkedInLogo } from '../components/LinkedInLogo';
import { CalendlyModal } from '../components/CalendlyModal';
import { navLinks, heroContent, teamMembers, standards, values, journeyContent, themes } from '../data';

export function CorporateTheme() {
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background border-b border-border shadow-sm py-4' : 'bg-background border-b border-border py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">E</span>
            </div>
            <span className="font-bold tracking-tight text-xl">EGIS</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-muted hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <AnimationToggle />
            <button onClick={() => setIsCalendlyOpen(true)} className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors cursor-pointer">
              Schedule a Call
            </button>
          </div>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-md overflow-hidden lg:hidden flex flex-col">
              <div className="p-4 flex flex-col">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-foreground py-3 px-4 rounded hover:bg-surface transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-surface border-b border-border">
          <FadeIn direction="up" className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl">
            <span className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-xs tracking-wide uppercase mb-6">
              {heroContent.label}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-8">
              {heroContent.titlePart1} {heroContent.titlePart2} <span className="text-primary">{heroContent.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setIsCalendlyOpen(true)} className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-bold text-base transition-colors shadow-sm shadow-primary/30 cursor-pointer">
                Schedule a Call
              </button>
              <a href="#standards" className="w-full sm:w-auto bg-background border border-border hover:border-primary text-foreground px-8 py-3.5 rounded-lg font-bold text-base transition-colors">
                View Standards
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Standards */}
        <section id="standards" className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ISO Standards Catalog</h2>
              <p className="text-muted text-lg max-w-2xl">Comprehensive certification services across multiple domains.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((standard, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={standard.image} alt={standard.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <h3 className="font-bold text-lg text-foreground mb-4 leading-snug">{standard.title}</h3>
                    <a href="#contact" className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="py-24 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-background border border-border rounded-xl p-8 hover:border-primary transition-colors h-full">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Meet the experts behind our consultancy services.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-surface">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">{member.role}</p>
                    <p className="text-muted text-sm leading-relaxed mb-4">{member.description}</p>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="mt-auto text-muted hover:text-[#0A66C2] transition-colors">
                        <LinkedInLogo className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <FadeIn direction="right" className="flex-1">
                <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">{journeyContent.label}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  {journeyContent.titlePart1} {journeyContent.titlePart2} {journeyContent.titleHighlight}
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-8">{journeyContent.description}</p>
                <ul className="space-y-4 mb-8">
                  {[1, 2, 3].map(num => (
                    <li key={num} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">{num}</div>
                      <span className="font-medium text-foreground">Structured implementation phase</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn direction="left" delay={0.2} className="flex-1 w-full">
                <div className="bg-surface border border-border p-4 rounded-2xl shadow-lg">
                  <img src={journeyContent.image} alt="Journey" className="w-full h-auto rounded-xl" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted text-lg">Have questions? We'd love to hear from you.</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface pt-20 pb-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl leading-none">E</span>
                </div>
                <span className="font-bold tracking-tight text-xl text-foreground">EGIS</span>
              </a>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                {heroContent.description}
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted hover:text-[#0A66C2] transition-colors"><LinkedInLogo className="w-5 h-5" /></a>
                <a href="#" className="text-muted hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-muted hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-muted hover:text-primary text-sm font-medium transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted hover:text-primary text-sm font-medium transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted hover:text-primary text-sm font-medium transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Design Themes</h4>
              <ul className="space-y-3">
                {themes.map(theme => (
                  <li key={theme.id}>
                    <a href={`?theme=${theme.id}`} className={`text-sm font-medium transition-colors flex items-center gap-2 ${theme.id === 'theme-corporate' ? 'text-primary' : 'text-muted hover:text-primary'}`}>
                      {theme.name} {theme.id === 'theme-corporate' && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex justify-between items-center text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} Egis. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}
