import { FC, createElement } from 'react';
import { Card } from '../Card';
import { CartItem } from './cart-item';

import './styles/cart.css';
import { useSelector } from 'react-redux';

export const Cart: FC = () => {

  const cartItems = useSelector((state: any) => state.cart.items);
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
  return (
    <Card className='cart'>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item: any) => (
          <CartItem
           key={item.id}
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.id
            }}
         />
        ))}
      </ul>
      <p>Total Quantity {totalQuantity}</p>
    </Card>
  );
};
