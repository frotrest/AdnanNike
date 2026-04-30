import React from 'react';
import clsx from 'clsx';
import styles from './products.module.css';
import Container from '../../../Container';
import Cosmic from '@assets/cosmic-unity.webp';
import Dunk from '@assets/dunk-high.webp';
import Dynamo from '@assets/dynamo.webp';

const Products = () => {
  const flashWords = Array(4).fill('FLASH');
  const shoes = [
    {
      img: Cosmic,
      alt: 'cosmic-unity',
      title: 'Nike Cosmic Unity 2',
      id: 0,
    },
    {
      img: Dunk,
      alt: 'dunk-high',
      title: 'Nike SB Dunk High',
      id: 1,
    },
    {
      img: Dynamo,
      alt: 'dynamo',
      title: 'Nike Dynamo Go Se',
      id: 2,
    },
  ];
  return (
    <div className={clsx(styles.products)}>
      <Container
        className={clsx(styles.productsContent)}
        dataAnimate="fadeInRight"
      >
        {shoes.map((item) => (
          <div key={item.id} className={clsx(styles.product)}>
            <img
              src={item.img}
              alt={item.alt}
              className={clsx(styles.productImg)}
              loading="lazy"
            />
            <h2 className={clsx(styles.productTitle)}>{item.title}</h2>
          </div>
        ))}
      </Container>
      <div className={clsx(styles.flashContent)}>
        <div className={clsx(styles.flashContentRed)}>
          {flashWords.map((word, i) => (
            <span key={i} className={styles.flashContentWord}>
              {word}
            </span>
          ))}
        </div>
        <div className={clsx(styles.flashContentBlack)}>
          {flashWords.map((word, i) => (
            <span key={i} className={styles.flashContentWord}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
