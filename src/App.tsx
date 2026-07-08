import { useState, useEffect } from 'react';
import { NaturalTheme } from './themes/NaturalTheme';
import { CorporateTheme } from './themes/CorporateTheme';
import { MidnightTheme } from './themes/MidnightTheme';
import { NeoBrutalismTheme } from './themes/NeoBrutalismTheme';
import { GlassmorphismTheme } from './themes/GlassmorphismTheme';
import { EditorialTheme } from './themes/EditorialTheme';
import { AnimationProvider } from './context/AnimationContext';

export default function App() {
  const [theme, setTheme] = useState('theme-natural');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');
    if (themeParam && ['theme-natural', 'theme-corporate', 'theme-midnight', 'theme-neobrutalism', 'theme-glassmorphism', 'theme-editorial'].includes(themeParam)) {
      setTheme(themeParam);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const renderTheme = () => {
    if (theme === 'theme-corporate') return <CorporateTheme />;
    if (theme === 'theme-midnight') return <MidnightTheme />;
    if (theme === 'theme-neobrutalism') return <NeoBrutalismTheme />;
    if (theme === 'theme-glassmorphism') return <GlassmorphismTheme />;
    if (theme === 'theme-editorial') return <EditorialTheme />;
    return <NaturalTheme />;
  }

  return (
    <AnimationProvider>
      {renderTheme()}
    </AnimationProvider>
  );
}
