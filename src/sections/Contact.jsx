import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <Reveal as="h2">Agendemos una conversación creativa.</Reveal>
      <Reveal delay={0.18}>
        <p>
          Escríbenos para diseñar un arreglo exclusivo o planear una instalación inmersiva. Nuestro
          equipo responde en menos de 24 horas.
        </p>
      </Reveal>
      <Reveal delay={0.32}>
        <motion.form
          className="contact__form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <label>
            Nombre completo
            <input type="text" name="name" placeholder="Alexandra Gómez" />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="hola@thepeachflowers.com" />
          </label>
          <label>
            Cuéntanos del proyecto
            <textarea
              name="message"
              rows="4"
              placeholder="Tipo de evento, fecha y estilo deseado"
            />
          </label>
          <motion.button
            className="btn btn--primary"
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Enviar consulta
          </motion.button>
        </motion.form>
      </Reveal>
    </section>
  );
}
