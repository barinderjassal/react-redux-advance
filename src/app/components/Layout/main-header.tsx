import { FC, createElement } from 'react';
import { CartButton } from '../Cart/cart-button';

import './styles/main-header.css';

export const MainHeader: FC = () => {
  return (
    <header className='header'>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
