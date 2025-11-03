'use client';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export type SimpleAnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: any;
    item?: any;
  };
  as?: keyof typeof motion;
};

const defaultContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function SimpleAnimatedGroup({
  children,
  className,
  variants,
  as = 'div',
}: SimpleAnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || defaultItemVariants;

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </MotionTag>
  );
}

export { SimpleAnimatedGroup };