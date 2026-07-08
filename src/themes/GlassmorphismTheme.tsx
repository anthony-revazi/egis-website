import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Twitter, Facebook, Play } from 'lucide-react';
import { AnimationToggle } from '../components/AnimationToggle';
import { FadeIn } from '../components/FadeIn';
import { LinkedInLogo } from '../components/LinkedInLogo';
import { CalendlyModal } from '../components/CalendlyModal';
import { navLinks, heroContent, teamMembers, standards, values, journeyContent, themes } from '../data';

export function GlassmorphismTheme() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] text-white font-sans selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00F0FF]/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-[#7000FF]/20 blur-[90px] pointer-events-none"></div>

      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-[#FF9900] p-[1px]">
              <div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <span className="font-bold text-xl tracking-wider">E</span>
              </div>
            </div>
            <span className="font-bold tracking-widest text-xl uppercase tracking-[0.2em]">EGIS</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <AnimationToggle className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-none" />
            <button onClick={() => setIsCalendlyOpen(true)} className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer">
              Schedule Call
            </button>
          </div>

          <button className="lg:hidden p-2 text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-4 right-4 mt-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] lg:hidden flex flex-col p-4 z-50 overflow-hidden">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-colors">
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section id="home" className="pt-40 pb-20 lg:pt-56 lg:pb-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FF0099]"></span>
              <span className="text-sm font-medium tracking-widest uppercase text-white/80">{heroContent.label}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              {heroContent.titlePart1} <br/>
              <span className="font-light text-white/80">{heroContent.titlePart2}</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FF0099] to-[#FF9900]">{heroContent.titleHighlight}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto font-light"
            >
              {heroContent.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button onClick={() => setIsCalendlyOpen(true)} className="w-full sm:w-auto bg-gradient-to-r from-[#FF0099] to-[#7000FF] hover:from-[#E6008A] hover:to-[#5E00D6] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_10px_30px_rgba(255,0,153,0.3)] hover:shadow-[0_10px_40px_rgba(255,0,153,0.5)] cursor-pointer">
                Schedule a Call
              </button>
              <a href="#video" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3">
                <Play className="w-4 h-4 fill-white" /> Watch Intro
              </a>
            </motion.div>
          </div>
        </section>

        {/* Standards */}
        <section id="standards" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ISO Matrix</h2>
              <p className="text-white/60 font-light max-w-2xl mx-auto">Elevate your operational architecture.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standards.map((standard, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/0 overflow-hidden hover:from-primary/50 hover:to-transparent transition-all duration-500 h-full">
                  <div className="bg-white/5 backdrop-blur-xl h-full rounded-3xl p-6 flex flex-col relative z-10">
                    <div className="h-40 rounded-2xl overflow-hidden mb-6 relative">
                      <img src={standard.image} alt={standard.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C29] to-transparent opacity-80"></div>
                    </div>
                    <h3 className="font-bold text-lg leading-snug mb-4">{standard.title}</h3>
                    <div className="mt-auto flex items-center justify-between text-white/50 group-hover:text-white transition-colors">
                      <span className="text-xs tracking-widest uppercase">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Driven by <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF9900]">Core Values</span></h2>
                <p className="text-white/60 font-light text-lg mb-8 max-w-md">Our principles define our approach to every challenge and partnership.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-[#FF9900] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,0,153,0.3)]">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{value.description}</p>
                  </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Team</h2>
              <p className="text-white/60 font-light max-w-2xl mx-auto">The minds behind the matrix.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[30px] p-6 hover:bg-white/10 transition-all text-center group h-full flex flex-col relative">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="absolute top-6 right-6 text-white/50 hover:text-[#0A66C2] transition-colors">
                        <LinkedInLogo className="w-5 h-5" />
                      </a>
                    )}
                    <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-primary to-[#FF9900] mb-6 mt-4">
                       <div className="w-full h-full rounded-full overflow-hidden relative">
                         <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                       </div>
                    </div>
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF9900] font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                    <p className="text-white/60 text-sm font-light leading-relaxed mt-auto">{member.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              <FadeIn direction="right" className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></span>
                  <span className="text-xs font-medium tracking-widest uppercase text-white/80">{journeyContent.label}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {journeyContent.titlePart1} <br/>
                  <span className="font-light">{journeyContent.titlePart2}</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">{journeyContent.titleHighlight}</span>
                </h2>
                <p className="text-white/60 font-light text-lg mb-10 leading-relaxed">
                  {journeyContent.description}
                </p>
                <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all inline-flex items-center gap-3">
                  View Roadmap <ArrowRight className="w-4 h-4" />
                </a>
              </FadeIn>
              <FadeIn direction="left" delay={0.2} className="flex-1 w-full relative z-10">
                <div className="relative rounded-3xl overflow-hidden p-[2px] bg-gradient-to-br from-white/30 via-white/5 to-white/10">
                  <img src={journeyContent.image} alt="Journey" className="w-full h-auto rounded-3xl opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0C29]/80 to-transparent"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden text-center">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF0099]/20 blur-[100px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/60 font-light mb-10">We're here to help you navigate your certification journey.</p>
            
            <form className="space-y-6 text-left relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#00F0FF] transition-colors text-white placeholder-white/30" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#00F0FF] transition-colors text-white placeholder-white/30" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#00F0FF] transition-colors text-white placeholder-white/30" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#00F0FF] to-[#7000FF] hover:from-[#00D4FF] hover:to-[#5E00D6] text-white font-bold py-4 rounded-xl transition-all shadow-[0_10px_30px_rgba(0,240,255,0.2)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-20 pb-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-[#FF9900] flex items-center justify-center">
                  <span className="font-bold text-lg">E</span>
                </div>
                <span className="font-bold tracking-widest text-xl uppercase">EGIS</span>
              </a>
              <p className="text-white/50 font-light max-w-sm mb-8">
                {heroContent.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold tracking-widest uppercase text-sm mb-6 text-white/80">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-white/50 hover:text-white font-light transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold tracking-widest uppercase text-sm mb-6 text-white/80">Environments</h4>
              <ul className="space-y-4">
                {themes.map(theme => (
                  <li key={theme.id}>
                    <a href={`?theme=${theme.id}`} className={`font-light transition-colors flex items-center gap-2 ${theme.id === 'theme-glassmorphism' ? 'text-[#00F0FF]' : 'text-white/50 hover:text-white'}`}>
                      {theme.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-light text-sm">
            <p>&copy; {new Date().getFullYear()} EGIS. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#0A66C2] transition-colors bg-white/5 p-2 rounded-full"><LinkedInLogo className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}
