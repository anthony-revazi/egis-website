import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AnimationLevel = 'none' | 'medium' | 'high';

interface AnimationContextType {
  level: AnimationLevel;
  setLevel: (level: AnimationLevel) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState<AnimationLevel>('medium');

  useEffect(() => {
    document.body.setAttribute('data-animation', level);
  }, [level]);

  return (
    <AnimationContext.Provider value={{ level, setLevel }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
