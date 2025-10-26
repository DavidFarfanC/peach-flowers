import Reveal from '../components/Reveal.jsx';

export default function Philosophy() {
  return (
    <section id="filosofia" className="philosophy">
      <Reveal className="section-eyebrow">Filosofía de diseño</Reveal>
      <div className="philosophy__grid">
        <Reveal delay={0.12} as="h2">
          Minimalismo cálido, meticulosamente curado.
        </Reveal>
        <Reveal delay={0.24} className="philosophy__text">
          <p>
            En The Peach Flowers fusionamos artesanía botánica con dirección creativa contemporánea.
            Cada arreglo se compone como una pieza editorial: limpio, preciso y profundamente emotivo.
          </p>
          <p>
            Trabajamos con flores de temporada seleccionadas al amanecer, respetando su morfología
            natural. Nuestros diseñadores estructuran cada creación en capas de color durazno,
            matices beige y verdes oliva para lograr armonías sutiles y memorables.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
