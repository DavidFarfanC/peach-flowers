import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';

const steps = [
  {
    title: 'Brief sensorial',
    description: 'Exploramos emociones, referencias visuales y la narrativa del evento.',
    timing: 'Día 1',
  },
  {
    title: 'Curaduría botánica',
    description: 'Seleccionamos flores de temporada y definimos paletas de textura y color.',
    timing: 'Día 2-3',
  },
  {
    title: 'Prototipo inmersivo',
    description: 'Renderizamos el concepto floral con animaciones y moodscapes sonoros.',
    timing: 'Día 4',
  },
  {
    title: 'Instalación Boutique',
    description: 'Ejecutamos el montaje con un equipo especializado que cuida cada detalle.',
    timing: 'Día del evento',
  },
];

export default function Process() {
  return (
    <section className="process">
      <Reveal className="section-eyebrow">Metodología Peach</Reveal>
      <Reveal as="h2">Un viaje creativo diseñado para inspirar cada sentido.</Reveal>
      <div className="process__timeline">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            className="process__step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="process__marker">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="process__copy">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <small>{step.timing}</small>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
