import Reveal from '../components/Reveal.jsx';

const testimonials = [
  {
    quote:
      '“Lograron que nuestro showroom respirara calma y sofisticación. Cada detalle floral acompañó la narrativa de nuestro lanzamiento.”',
    author: 'Anabella Ruiz · Directora Creativa, Casa Sol',
  },
  {
    quote:
      '“Una experiencia floral impecable. Desde la asesoría personalizada hasta la instalación, todo fue poesía visual.”',
    author: 'Lucía Fernández · Wedding Planner',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 0.18} className="testimonials__card">
            <p>{testimonial.quote}</p>
            <span>{testimonial.author}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
