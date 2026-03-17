import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full border-t border-eco-divider bg-eco-bg">
    <div className="mx-auto flex w-full max-w-[343px] flex-col items-center gap-8 px-4 py-10 sm:max-w-[360px] md:max-w-[1200px] md:flex-row md:items-end md:justify-between md:gap-10 md:px-10 md:py-[80px]">
      <img
        src="/images/logo-vertical.svg"
        alt="Pura Terapia"
        className="h-auto w-[182px]"
        loading="lazy"
      />
      <div className="flex flex-col items-center gap-2 text-center font-mono text-mobile-caption text-eco-caption md:flex-row md:gap-4">
        <div className="flex gap-2 md:gap-4">
          <span>© PuraTerapia.</span>
          <span>2025</span>
        </div>
        <span>Todos os direitos reservados.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
