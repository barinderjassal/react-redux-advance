import { FC, createElement } from 'react';
import { Card } from '../Card';
import { useDispatch } from 'react-redux';

import './styles/product-item.css';
import { cartActions } from '../../store/cart-slice';

export const ProductItem: FC<{
  title: string;
  price: number;
  description: string;
  id: string;
}> = ({ title, price, description, id }) => {

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
    // key and variables names are same so using shorthand syntax
  }

  return (
    <li className='item'>
      <Card className=''>
        <header>
          <h3>{title}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='cart-action-button'>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
