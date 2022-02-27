import { FC, createElement } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import './styles/cart-item.css';

export const CartItem: FC<{
  item: any;
}> = ({ item }) => {
  const { title, quantity, total, price, id } = item;

  const dispatch = useDispatch();

  const decreaseItemCountHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const increaseItemCountHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
  };

  return (
    <li className='item'>
      <header>
        <h3>{title}</h3>
        <div className='price'>
          ${total.toFixed(2)}{' '}
          <span className='itemprice'>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className='details'>
        <div className='quantity'>
          x <span>{quantity}</span>
        </div>
        <div className='actions'>
          <button onClick={decreaseItemCountHandler}>-</button>
          <button onClick={increaseItemCountHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
