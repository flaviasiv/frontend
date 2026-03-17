import React from 'react';
import Button from './Button';
import mobileHeaderHero from '../assets/mobile/mobile-header-hero.jpg';

const Header: React.FC = () => {
  return (
    <section
      id="inicio"
      className="mx-auto flex w-full max-w-[343px] flex-col items-center gap-10 px-4 py-10 sm:max-w-[360px] md:max-w-[1200px] md:flex-row md:items-center md:justify-between md:gap-20 md:px-10 md:py-[120px]"
    >
      <div className="flex flex-col items-start gap-6 text-left md:max-w-[637.32px]">
        <h1 className="font-display text-mobile-headline text-eco-headline md:text-display-2">
          Seu bem-estar começa aqui.
        </h1>
        <p className="font-body text-mobile-paragraph text-eco-paragraph">
          Tratamentos naturais e personalizados para saúde mental 100% online, com acompanhamento médico.
        </p>
        <Button as="a" href="#contato">
          Falar com especialista
        </Button>
      </div>

      <div className="relative w-full max-w-[343px] overflow-hidden rounded-eco md:h-[606px] md:max-w-[606px]">
        <picture>
          <source media="(min-width: 768px)" type="image/webp" srcSet="/images/hero-header-33c370.webp" />
          <source media="(min-width: 768px)" type="image/png" srcSet="/images/hero-header-33c370.png" />
          <img
            src={mobileHeaderHero}
            alt="Paciente sorrindo recebendo acompanhamento da Eco Terapia"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </picture>

        <img
          src="/images/logo-icon-white.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 md:h-[159.57px] md:w-[159.57px]"
        />
        <img
          src="/images/hero-control-bar.svg"
          alt=""
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 w-[240px] -translate-x-1/2 md:bottom-[18.85px] md:left-[81.72px] md:h-[47.65px] md:w-[319.92px] md:translate-x-0 md:translate-y-0"
        />
      </div>
    </section>
  );
};

export default Header;
