import React from 'react';
import clsx from 'clsx';
import styles from './sellers.module.css';
import Container from '../../../Container';
import RedShoes from '@assets/red-nike.webp';
import Woman from '@assets/women.webp';
import Kids from '@assets/kids.webp';
import Men from '@assets/men.webp';

const Sellers = () => {
  const sellers = [
    {
      img: Woman,
      alt: 'woman',
      title: 'Woman',
      id: 0,
    },
    {
      img: Kids,
      alt: 'Kids',
      title: 'Kids',
      id: 1,
    },
    {
      img: Men,
      alt: 'men',
      title: 'men',
      id: 2,
    },
  ];
  return (
    <section className={clsx(styles.sellers)}>
      <Container
        className={clsx(styles.sellersContent)}
        dataAnimate="fadeInRight"
      >
        <h2 className={clsx(styles.sellersContentTitle)}>
          Best{' '}
          <span className={clsx(styles.sellersContentSubTitle)}>sellers</span>
        </h2>
        <div className={clsx(styles.productsTypes)}>
          {sellers.map((item) => (
            <div key={item.id} className={clsx(styles.productType)}>
              <img
                src={item.img}
                alt={item.alt}
                className={clsx(styles.productTypeImg)}
                loading="lazy"
              />
              <h2 className={clsx(styles.productTypeTitle)}>{item.title}</h2>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Sellers;
