import { FC, createElement } from 'react';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

import './styles/cart-button.css';

export const CartButton: FC = () => {
  const dispatch = useDispatch();

  // get totalQuantity from current state using useSelector
  const cartTotalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className='button' onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className='badge'>{cartTotalQuantity}</span>
    </button>
  );
};
