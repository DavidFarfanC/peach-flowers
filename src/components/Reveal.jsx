import { motion } from 'framer-motion';

const baseVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const MotionTag = typeof as === 'string' ? motion[as] : as;

  return (
    <MotionTag
      className={className}
      variants={baseVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
