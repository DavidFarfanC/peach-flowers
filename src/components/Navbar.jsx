import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Colecciones', href: '#colecciones' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__logo">
        <span>The</span>
        <span className="navbar__logo-highlight">Peach</span>
        <span>Flowers</span>
      </div>
      <ul className="navbar__menu">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a className="btn btn--outline" href="#contacto">
        Reservar asesoría
      </a>
    </motion.nav>
  );
}
