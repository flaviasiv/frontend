import React from 'react';

const Quote: React.FC = () => (
  <section className="w-full bg-eco-bg">
    <div className="mx-auto flex w-full max-w-[343px] flex-col items-center gap-12 px-4 py-[120px] sm:max-w-[360px] md:max-w-[800px]">
      <blockquote className="font-headline-cond text-mobile-heading-1 text-eco-headline text-center md:text-heading-1">
        “Em poucas semanas notei menos ansiedade e dormi melhor. Recomendo.”
      </blockquote>

      <div className="flex items-center gap-4">
        <img
          src="/images/quote-author.png"
          alt="Pedro Henrique Jr"
          className="h-16 w-16 rounded-lg object-cover"
          loading="lazy"
        />
        <p className="font-inter text-inter-heading text-eco-headline">
          Pedro Henrique Jr
        </p>
      </div>
    </div>
  </section>
);

export default Quote;
