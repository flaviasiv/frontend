import React from 'react';
import Button from './Button';
import cardProfissionaisMobile from '../assets/mobile/mobile-card-profissionais.png';
import cardTratamentoMobile from '../assets/mobile/mobile-card-tratamento.png';
import cardAtendimentoMobile from '../assets/mobile/mobile-card-atendimento.png';

const cards = [
  {
    title: 'Profissionais certificados',
    description:
      'Médicos especializados e autorizados garantem um atendimento seguro e personalizado para cada paciente.',
    mobile: cardProfissionaisMobile,
    desktop: '/images/about-card-1.png',
  },
  {
    title: 'Tratamento legal e seguro',
    description:
      'Todas as prescrições seguem as normas da Anvisa, com respaldo médico e validade em todo o Brasil.',
    mobile: cardTratamentoMobile,
    desktop: '/images/about-card-6.png',
  },
  {
    title: 'Atendimento simples e acessível',
    description:
      'Pagamento facilitado, suporte direto pelo WhatsApp e total sigilo em cada etapa do processo.',
    mobile: cardAtendimentoMobile,
    desktop: '/images/about-card-7.png',
  },
];

const AboutUsCards: React.FC = () => (
  <section
    id="sobre"
    className="w-full border-t border-eco-divider/50 bg-eco-bg"
  >
    <div className="mx-auto flex w-full max-w-[343px] flex-col items-center gap-[50px] px-4 py-20 sm:max-w-[360px] md:max-w-[1200px] md:py-[120px]">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="font-mono text-mobile-caption text-eco-caption uppercase tracking-[0.08em]">
          Sobre nós
        </p>
        <h2 className="font-headline-cond text-mobile-heading-1 text-eco-headline md:text-heading-1">
          Sua saúde nas melhores mãos
        </h2>
      </div>

      <div className="grid w-full gap-6 md:grid-cols-3 md:gap-[50px]">
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col overflow-hidden rounded-eco-card border border-black/10 bg-white shadow-eco-card"
          >
            <div className="h-[204px] w-full overflow-hidden md:h-[240px]">
              <picture>
                <source media="(min-width: 768px)" srcSet={card.desktop} />
                <img
                  src={card.mobile}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="font-inter text-inter-heading text-eco-headline">
                {card.title}
              </h3>
              <p className="font-body text-mobile-paragraph-sm text-eco-paragraph">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Button as="a" href="#contato">
        Falar com especialista
      </Button>
    </div>
  </section>
);

export default AboutUsCards;
