import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, index) => ({
        id: index,
        size: 140 + Math.random() * 80,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 14 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="floating-petals" aria-hidden="true">
      {petals.map(petal => (
        <motion.span
          key={petal.id}
          className="floating-petal"
          style={{
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            left: `${petal.left}%`,
            top: `${petal.top}%`,
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 4 }}
          transition={{
            delay: petal.delay,
            duration: petal.duration,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      ))}
    </div>
  );
}
