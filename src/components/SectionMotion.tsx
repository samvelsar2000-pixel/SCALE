import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ className?: string; id?: string }>;

const SectionMotion = ({ children, className = '', id }: Props) => {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default SectionMotion;
