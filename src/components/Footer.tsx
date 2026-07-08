import { Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

interface FooterProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export function Footer({ currentTheme, onThemeChange }: FooterProps) {
  const themes = [
    { id: 'theme-natural', name: 'Natural Tones' },
    { id: 'theme-corporate', name: 'Corporate Light' },
    { id: 'theme-midnight', name: 'Midnight Blue' },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-primary transition-colors rounded-sm flex items-center justify-center">
              </div>
              <span className="font-bold text-xl tracking-tight font-display uppercase">Egis</span>
            </div>
            <p className="text-background/60 max-w-sm mb-8 leading-relaxed">
              We deliver world-class business consultancy in implementing your ISO standard of choice.
            </p>
            <form className="flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg flex-grow focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-white hover:text-foreground px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-background/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">About Us</a></li>
              <li><a href="#journey" className="text-background/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">The Journey</a></li>
              <li><a href="#values" className="text-background/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Our Values</a></li>
              <li><a href="#standards" className="text-background/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">ISO Standards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Design Themes</h4>
            <div className="flex flex-col gap-3">
              {themes.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => onThemeChange(theme.id)}
                  className={`text-left text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 ${
                    currentTheme === theme.id 
                      ? 'text-primary' 
                      : 'text-background/60 hover:text-white'
                  }`}
                >
                  {currentTheme === theme.id && <ArrowRight className="w-4 h-4" />}
                  {theme.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            &copy; {new Date().getFullYear()} Egis. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-background/40 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/40 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/40 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
