import { useAnimation } from '../context/AnimationContext';
import { Sparkles, Zap, ZapOff } from 'lucide-react';

export function AnimationToggle({ className = '' }: { className?: string }) {
  const { level, setLevel } = useAnimation();

  return (
    <div className={`flex items-center gap-1 p-1 rounded-full bg-surface border border-border shadow-sm ${className}`}>
      <button
        onClick={() => setLevel('none')}
        className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 ${level === 'none' ? 'bg-foreground text-background shadow-sm' : 'text-foreground/60 hover:text-foreground'}`}
        title="No Animations"
      >
        <ZapOff className="w-3 h-3" /> <span className="hidden md:inline">None</span>
      </button>
      <button
        onClick={() => setLevel('medium')}
        className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 ${level === 'medium' ? 'bg-foreground text-background shadow-sm' : 'text-foreground/60 hover:text-foreground'}`}
        title="Medium Animations"
      >
        <Zap className="w-3 h-3" /> <span className="hidden md:inline">Med</span>
      </button>
      <button
        onClick={() => setLevel('high')}
        className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 ${level === 'high' ? 'bg-foreground text-background shadow-sm' : 'text-foreground/60 hover:text-foreground'}`}
        title="High Animations"
      >
        <Sparkles className="w-3 h-3" /> <span className="hidden md:inline">High</span>
      </button>
    </div>
  );
}
