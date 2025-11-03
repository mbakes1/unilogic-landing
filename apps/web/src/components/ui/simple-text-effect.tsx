'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

export type PresetType = 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide';

export type PerType = 'word' | 'line';

export type SimpleTextEffectProps = {
  children: string;
  per?: PerType;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  preset?: PresetType;
  delay?: number;
  speedSegment?: number;
  style?: React.CSSProperties;
};

const presetVariants: Record<PresetType, any> = {
  blur: {
    hidden: { opacity: 0, filter: 'blur(12px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  'fade-in-blur': {
    hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

const splitText = (text: string, per: PerType) => {
  if (per === 'line') return text.split('\n');
  return text.split(/(\s+)/);
};

export function SimpleTextEffect({
  children,
  per = 'word',
  as = 'p',
  className,
  preset = 'fade',
  delay = 0,
  speedSegment = 1,
  style,
}: SimpleTextEffectProps) {
  const segments = splitText(children, per);
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const stagger = per === 'word' ? 0.05 : 0.1;
  const duration = 0.3 / speedSegment;

  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: stagger * speedSegment,
          delayChildren: delay,
        },
      },
    },
    item: {
      hidden: presetVariants[preset].hidden,
      visible: {
        ...presetVariants[preset].visible,
        transition: { duration },
      },
    }
  };

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      variants={variants.container}
      className={className}
      style={style}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${per}-${index}-${segment}`}
          variants={variants.item}
          className="inline-block whitespace-pre"
        >
          {segment}
        </motion.span>
      ))}
    </MotionTag>
  );
}