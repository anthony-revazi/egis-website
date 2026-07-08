import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useAnimation } from '../context/AnimationContext';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  as?: any;
  key?: React.Key;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '', as = motion.div }: FadeInProps) {
  const { level } = useAnimation();
  
  if (level === 'none') {
    const Component = as === motion.div ? 'div' : as === motion.span ? 'span' : 'div';
    return <Component className={className}>{children}</Component>;
  }

  const distance = level === 'high' ? 60 : 30;
  const duration = level === 'high' ? 0.8 : 0.5;
  const springBounciness = level === 'high' ? 0.4 : 0;

  let initial = { opacity: 0, x: 0, y: 0 };
  if (direction === 'up') initial.y = distance;
  if (direction === 'down') initial.y = -distance;
  if (direction === 'left') initial.x = distance;
  if (direction === 'right') initial.x = -distance;

  const MotionComponent = as;

  return (
    <MotionComponent
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay: level === 'high' ? delay * 1.5 : delay,
        type: level === 'high' ? 'spring' : 'tween',
        bounce: springBounciness
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
