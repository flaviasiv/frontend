import React from 'react';
import avatarFaqLegal from '../assets/mobile/mobile-avatar-faq-legal.png';
import avatarFaqReceita from '../assets/mobile/mobile-avatar-faq-receita.png';
import avatarFaqCondicoes from '../assets/mobile/mobile-avatar-faq-condicoes.png';

const cannabisFAQ = [
  {
    question: 'É legal no Brasil?',
    answer:
      'Sim, quando prescrita por médico e utilizada conforme as normas da Anvisa.',
    image: avatarFaqLegal,
  },
  {
    question: 'Preciso de receita?',
    answer:
      'Sim, é necessária prescrição médica válida (teleconsulta aceita) para iniciar o tratamento.',
    image: avatarFaqReceita,
  },
  {
    question: 'Quais condições são tratadas?',
    answer:
      'Usada para sintomas como ansiedade, insônia, dor crônica e outras indicações que o médico avaliar.',
    image: avatarFaqCondicoes,
  },
];

const Testimonials: React.FC = () => (
  <section
    id="reviews"
    className="w-full bg-eco-bg"
  >
    <div className="mx-auto flex w-full max-w-[343px] flex-col gap-[80px] px-4 py-20 sm:max-w-[360px] md:max-w-[1200px] md:px-10 md:py-[120px]">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-mobile-caption text-eco-caption uppercase tracking-[0.08em]">
            FAQ
          </p>
          <h2 className="font-headline-cond text-mobile-heading-1 text-eco-headline md:text-heading-1">
            Cannabis
          </h2>
        </div>
        <div className="grid w-full gap-6 md:grid-cols-3 md:gap-8">
          {cannabisFAQ.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-6 rounded-eco-card border border-eco-divider/60 bg-white p-6 shadow-eco-card"
            >
              <div className="flex items-center gap-4">
                <img
                  src={faq.image}
                  alt={`Paciente - ${faq.question}`}
                  className="h-12 w-12 rounded-lg object-cover"
                  loading="lazy"
                />
                <h3 className="font-inter text-inter-heading text-eco-headline">
                  {faq.question}
                </h3>
              </div>
              <p className="font-inter text-inter-body text-eco-headline">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Testimonials;
