import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';

const experiences = [
  {
    title: 'Experiencia sensorial Peach Bloom',
    description:
      'Instalación inmersiva que transforma tu espacio con fragancias botánicas, luz cálida y música a medida.',
  },
  {
    title: 'Editorial Floral',
    description:
      'Dirección creativa, styling y producción floral para marcas de lujo y editoriales de moda.',
  },
  {
    title: 'Celebraciones íntimas',
    description:
      'Florografía diseñada para bodas boutique, cenas privadas y ocasiones irrepetibles.',
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="experiences">
      <motion.div
        className="experiences__visual"
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="experiences__orb experiences__orb--one"
          animate={{ scale: [1, 1.06, 1], opacity: [0.65, 0.85, 0.65] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="experiences__orb experiences__orb--two"
          animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="experiences__content">
        <Reveal as={motion.p} className="section-eyebrow">
          Experiencias
        </Reveal>
        <Reveal as={motion.h2}>
          Diseñamos atmósferas que permanecen en la memoria.
        </Reveal>
        {experiences.map((experience, index) => (
          <Reveal delay={0.24 + index * 0.14} key={experience.title} className="experiences__item">
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </Reveal>
        ))}
        <Reveal delay={0.68}>
          <motion.a
            className="btn btn--primary"
            href="#contacto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Solicitar propuesta
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
