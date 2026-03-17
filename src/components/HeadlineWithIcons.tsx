import React from 'react';
import Button from './Button';

const lockups = [
  {
    number: '01',
    title: 'Agende sua consulta online',
    description: 'Escolha o horário ideal e fale com um especialista sem sair de casa.'
  },
  {
    number: '02',
    title: 'Receba sua prescrição exclusiva',
    description: 'Tenha um plano feito sob medida para suas necessidades.'
  },
  {
    number: '03',
    title: 'Adquira seu tratamento',
    description: 'Compre com segurança, conforme as normas da Anvisa.'
  }
];

const HeadlineWithIcons: React.FC = () => (
  <section
    id="como-funciona"
    className="w-full border-t border-eco-divider/50 bg-eco-bg"
  >
    <div className="mx-auto flex w-full max-w-[343px] flex-col items-center gap-[50px] px-4 py-20 sm:max-w-[360px] md:max-w-[1200px] md:items-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="font-mono text-mobile-caption text-eco-caption uppercase tracking-[0.08em]">
          Como funciona
        </p>
        <h2 className="font-headline-cond text-mobile-heading-1 text-eco-headline md:text-heading-1">
          A gente simplificou o cuidado.
        </h2>
      </div>

      <div className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-2 scrollbar-hide md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
        {lockups.map((lockup) => (
          <div
            key={lockup.number}
            className="flex min-w-[280px] flex-col gap-[60px] border-t border-eco-divider pt-[60px] pr-[30px] pb-5 snap-start md:min-w-0"
          >
            <span className="font-body text-mobile-display text-eco-accent md:text-display-stats">
              {lockup.number}
            </span>
            <div className="flex flex-col gap-5">
              <h3 className="font-display text-mobile-heading-3 text-eco-headline md:text-heading-3">
                {lockup.title}
              </h3>
              <p className="font-body text-mobile-paragraph-sm text-eco-paragraph">
                {lockup.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button as="a" href="#contato">
        Agende sua consulta
      </Button>
    </div>
  </section>
);

export default HeadlineWithIcons;
