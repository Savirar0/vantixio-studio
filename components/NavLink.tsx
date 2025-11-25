import React from 'react';

interface NavLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  'aria-label'?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, className, onClick, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.hash !== href) {
        window.location.hash = href;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={`${className} transform hover:-translate-y-0.5 transition-transform duration-300`} {...props}>
      {children}
    </a>
  );
};

export default NavLink;
