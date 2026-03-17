import React from 'react';
import Button from './Button';
import ctaBackgroundMobile from '../assets/mobile/mobile-cta-background.jpg';

const CTASection: React.FC = () => (
  <section
    id="contato"
    className="w-full bg-eco-bg"
  >
    <div className="mx-auto flex w-full max-w-[343px] justify-center px-4 pb-20 sm:max-w-[360px] md:max-w-[1200px] md:px-10 md:pb-[120px]">
      <div className="relative flex w-full max-w-[314px] flex-col items-center gap-10 overflow-hidden rounded-eco border border-eco-divider/50 bg-eco-bg/5 px-6 py-[120px] text-center shadow-eco-card sm:max-w-[360px] md:max-w-[960px] md:px-[120px]">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-eco">
          <img
            src={ctaBackgroundMobile}
            alt=""
            aria-hidden="true"
            className="block h-full w-full object-cover md:hidden"
            loading="lazy"
          />
          <img
            src="/images/cta-background.png"
            alt=""
            aria-hidden="true"
            className="hidden h-full w-full object-cover md:block md:scale-[1.08] md:origin-center"
            loading="lazy"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] rounded-eco"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(0, 23, 12, 0.18) 0%, rgba(0, 23, 12, 0.45) 100%)',
          }}
        />

        <div className="relative z-10 flex w-full max-w-[580px] flex-col items-center gap-6 text-white md:gap-8">
          <h2 className="font-headline-cond text-mobile-heading-1 md:text-heading-1 text-balance">
            Cuide-se hoje
            <span className="text-eco-accent">.</span>
          </h2>
          <p className="font-inter text-[18px] leading-[1.45] text-white/90 md:text-[20px]">
            Dê o primeiro passo para cuidar da sua saúde mental.
            <br />
            Agende sua consulta online e comece seu tratamento hoje mesmo.
          </p>
          <Button as="a" href="https://wa.me/5511978326295?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20Pura%20Terapia." target="_blank" rel="noopener noreferrer">
            Falar com um especialista
          </Button>
          <img
            src="/images/logo-horizontal-white.svg"
            alt="Pura Terapia"
            className="h-auto w-[200px] md:w-[220px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
