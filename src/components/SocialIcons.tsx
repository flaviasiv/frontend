import React from 'react';

const SocialIcons: React.FC = () => (
  <div className="w-full bg-eco-bg">
    <div className="mx-auto flex w-full max-w-[343px] justify-center gap-2.5 px-4 py-10 sm:max-w-[360px] md:max-w-[1200px]">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <img
          src="/images/instagram-icon.svg"
          alt="Instagram"
          className="h-[56px] w-[56px]"
          loading="lazy"
        />
      </a>
      <a
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <img
          src="/images/google-my-business-icon.svg"
          alt="Google My Business"
          className="h-[56px] w-[56px]"
          loading="lazy"
        />
      </a>
    </div>
  </div>
);

export default SocialIcons;
