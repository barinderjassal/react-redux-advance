import { FC, createElement } from 'react';
import { ProductItem } from './product-item';

import './styles/products.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6.99,
    title: 'Harry Potter 1',
    description: 'Harry Potter and The Sorcerer Stone'
  },
  {
    id: 'p2',
    price: 9.99,
    title: 'Harry Potter 2',
    description: 'Harry Potter and The Chamber of Secrets'
  },
  {
    id: 'p3',
    price: 11.99,
    title: 'Harry Potter 3',
    description: 'Harry Potter and The Prisoner of Azkaban'
  }
]

export const Products: FC = () => {
  return (
    <section className='products'>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};
