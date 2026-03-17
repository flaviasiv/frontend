import React from 'react';
import Button from './Button';
import mobileHeroSaude from '../assets/mobile/mobile-hero-saude.jpg';

const Hero3: React.FC = () => (
  <section
    id="terapia"
    className="w-full bg-eco-bg"
  >
    <div className="mx-auto flex w-full max-w-[343px] flex-col items-center gap-10 px-4 py-20 sm:max-w-[360px] md:max-w-[1200px] md:flex-row md:items-center md:justify-between md:gap-20 md:px-10 md:py-[120px]">
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
        <p className="font-mono text-mobile-caption text-eco-caption uppercase tracking-[0.08em]">
          Saúde mental
        </p>
        <h2 className="font-headline-cond text-mobile-heading-1 text-eco-headline md:text-heading-1">
          Equilíbrio para sua mente
        </h2>
        <p className="font-inter text-inter-body text-eco-paragraph md:w-[360px]">
          A Cannabis Medicinal auxilia no controle da ansiedade, melhora o sono e promove bem-estar emocional de forma natural e segura.
        </p>
        <Button as="a" href="#contato">
          Iniciar tratamento com Cannabis
        </Button>
      </div>

      <div className="relative w-full max-w-[343px] overflow-hidden rounded-eco md:max-w-[482px]">
        <picture>
          <source media="(min-width: 768px)" type="image/webp" srcSet="/images/hero-saude-mental.webp" />
          <source media="(min-width: 768px)" type="image/png" srcSet="/images/hero-saude-mental.png" />
          <img
            src={mobileHeroSaude}
            alt="Paciente relaxando após terapia com Eco Terapia"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  </section>
);

export default Hero3;
