import { FC, createElement } from 'react';

import './styles/card.css';

export const Card: FC<{
  className: string;
}> = ({ className, children }) => {
  return (
    <section
      className={`card ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};
