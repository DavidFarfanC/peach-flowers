import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import FloatingPetals from '../components/FloatingPetals.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Hero() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springX = useSpring(tiltX, { stiffness: 120, damping: 18, mass: 0.4 });
  const springY = useSpring(tiltY, { stiffness: 120, damping: 18, mass: 0.4 });

  const rotateX = useTransform(springY, [-20, 20], [8, -8]);
  const rotateY = useTransform(springX, [-20, 20], [-10, 10]);
  const translateX = useTransform(springX, [-20, 20], [-12, 12]);
  const translateY = useTransform(springY, [-20, 20], [-8, 8]);

  const handlePointer = event => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 36;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 36;
    tiltX.set(x);
    tiltY.set(y);
  };

  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.header
      id="hero"
      className="hero"
      onPointerMove={handlePointer}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <FloatingPetals />

      <motion.div
        className="hero__halo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
      />

      <motion.div
        className="hero__content"
        style={{ rotateX, rotateY, x: translateX, y: translateY }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Reveal className="hero__eyebrow">The Peach Flowers</Reveal>

        <Reveal delay={0.12} as={motion.h1} className="hero__headline">
          Flores que cuentan historias,
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            creadas para emocionar.
          </motion.span>
        </Reveal>

        <Reveal delay={0.22} className="hero__subheadline">
          Diseñamos arreglos sensoriales inspirados en la elegancia silenciosa de la naturaleza. Experiencias florales a medida para momentos que merecen brillar.
        </Reveal>

        <Reveal delay={0.32} className="hero__actions">
          <a className="btn btn--primary" href="#colecciones">
            Explorar Colecciones
          </a>
          <a className="btn btn--ghost" href="#experiencias">
            Experiencias a Medida
          </a>
        </Reveal>
      </motion.div>

      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Desliza
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.header>
  );
}
