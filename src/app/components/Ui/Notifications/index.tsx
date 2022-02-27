import { FC, createElement } from 'react';

import './styles/notifications.css';

interface Notifications {
  status: string;
  title: string;
  message: string;
}

export const Notifications: FC<Notifications> = ({ status, title, message }) => {
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = 'error';
  }
  if (status === 'success') {
    specialClasses = 'success';
  }

  const cssClasses = `notification ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}