import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  as?: 'button' | 'a';
  hideIcon?: boolean;
  target?: string;
  rel?: string;
}

const baseClasses =
  'inline-flex items-center justify-center gap-2.5 px-[22px] py-[14px] rounded-eco-pill bg-eco-accent text-eco-headline font-body font-bold text-mobile-link tracking-tighter-2.5 transition-colors duration-200 hover:bg-eco-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-headline';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  href,
  as = 'button',
  hideIcon = false,
  target,
  rel,
}) => {
  const content = (
    <>
      {!hideIcon && (
        <img
          src="/images/whatsapp-icon.svg"
          alt=""
          className="h-5 w-5"
          aria-hidden="true"
        />
      )}
      <span className="whitespace-nowrap">{children}</span>
    </>
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${className}`}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
