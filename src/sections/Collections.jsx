import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';

const collections = [
  {
    title: 'Amanecer Durazno',
    description:
      'Arreglos cálidos que combinan flores melocotón con acentos oliva, diseñados para celebrar nuevos comienzos.',
    features: ['Sutil aroma cítrico', 'Presentación minimalista', 'Ideal para regalos corporativos'],
    visual: 'linear-gradient(135deg, rgba(236,195,165,0.92), rgba(242,227,215,0.85))',
  },
  {
    title: 'Bruma de Olivo',
    description: 'Texturas suaves con verdes serenos y pétalos en capas para atmósferas íntimas.',
    features: ['Flores preservadas', 'Entrega en cápsula de vidrio', 'Curaduría personalizable'],
    visual: 'linear-gradient(135deg, rgba(180,180,138,0.9), rgba(254,254,254,0.85))',
  },
  {
    title: 'Luz de Atelier',
    description:
      'Composición arquitectónica inspirada en vitrinas de alta moda para eventos boutique.',
    features: ['Diseño modular', 'Iluminación integrada', 'Instalación en sitio'],
    visual: 'linear-gradient(135deg, rgba(220,153,109,0.92), rgba(236,195,165,0.78))',
  },
];

export default function Collections() {
  return (
    <section id="colecciones" className="collections">
      <Reveal as={motion.h2} className="section-title">
        Colecciones Exclusivas
      </Reveal>
      <div className="collections__grid">
        {collections.map((collection, index) => (
          <Reveal key={collection.title} delay={index * 0.12} className="collections__card">
            <motion.div
              className="collections__image"
              style={{ background: collection.visual }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="collections__content">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <ul>
                {collection.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <motion.button
                className="btn btn--ghost"
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Ver disponibilidad
              </motion.button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
