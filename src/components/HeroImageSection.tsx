import React from 'react';
import mobileHeroLogoGrid from '../assets/mobile/mobile-hero-logo-grid.jpg';

const HeroImageSection: React.FC = () => (
  <section className="w-full bg-eco-bg">
    {/* Mobile */}
    <div className="mx-auto flex w-full max-w-[343px] justify-center px-4 py-10 sm:max-w-[360px] md:hidden">
      <div className="relative h-[384px] w-[343px] overflow-hidden rounded-eco">
        <img
          src={mobileHeroLogoGrid}
          alt="Marcas parceiras Eco Terapia"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Mobile logos overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((index) => (
              <img
                key={index}
                src="/images/logo-horizontal-white.svg"
                alt="Eco Terapia"
                style={{ height: '60px', width: 'auto' }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden w-full justify-center md:flex">
      <div
        className="relative h-[382px] w-[1440px] overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-image-section-47a979.png)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute left-[-100px] top-1/2 flex -translate-y-1/2 items-center gap-4">
          {[1, 2, 3].map((index) => (
            <img
              key={index}
              src="/images/logo-horizontal-white.svg"
              alt="Eco Terapia"
              style={{ height: '100px', width: 'auto' }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroImageSection;
