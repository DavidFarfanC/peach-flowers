import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="footer__brand">
        <span>The Peach Flowers</span>
        <p>Atelier floral boutique en Ciudad de México.</p>
      </div>
      <div className="footer__links">
        <a href="mailto:hola@thepeachflowers.com">hola@thepeachflowers.com</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="#hero">Volver arriba</a>
      </div>
    </motion.footer>
  );
}
