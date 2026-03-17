import React from 'react';

const partnerLogos = [
  { src: '/images/partner-logo-1.png', alt: 'Parceiro 1' },
  { src: '/images/partner-logo-2.png', alt: 'Parceiro 2' },
  { src: '/images/partner-logo-3.png', alt: 'Parceiro 3' },
  { src: '/images/partner-logo-4.png', alt: 'Parceiro 4' },
  { src: '/images/partner-logo-5.png', alt: 'Parceiro 5' },
  { src: '/images/partner-logo-6.png', alt: 'Parceiro 6' },
];

const Partners: React.FC = () => (
  <section
    id="parceiros"
    className="w-full bg-eco-bg"
  >
    <div className="mx-auto flex w-full max-w-[343px] flex-col items-center gap-6 px-4 py-10 sm:max-w-[360px] md:max-w-[1200px] md:py-[40px]">
      <p className="font-mono text-mobile-caption text-eco-caption uppercase tracking-[0.08em]">
        Parceiros
      </p>
      <div className="flex w-full flex-wrap items-center justify-center gap-[40px]">
        {partnerLogos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-[82px] w-[150px] items-center justify-center rounded-md bg-eco-bg/0 opacity-60"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[32px] w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
