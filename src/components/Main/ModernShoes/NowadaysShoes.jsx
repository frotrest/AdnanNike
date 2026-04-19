import React from 'react';
import clsx from 'clsx';
import styles from './modernShoes.module.css';
import Container from '../../../Container';
import ModernShoes from '@assets/gray-nike.png';
import { TiArrowForward } from 'react-icons/ti';

const NowadaysShoes = () => {
  return (
    <section className={clsx(styles.modernShoes)}>
      <Container
        className={clsx(styles.modernShoesContent)}
        dataAnimate="fadeIn"
      >
        <div className={clsx(styles.imgBox)}>
          <img
            src={ModernShoes}
            alt="modernShoes"
            className={clsx(styles.modernShoesContentImg)}
          />
        </div>
        <div className={clsx(styles.modernShoes)}>
          <h2 className={clsx(styles.modernShoesTitle)}>
            WE PROVIDE MODERN SHOES
          </h2>
          <p className={clsx(styles.modernShoesItem)}>
            Design for the way you live your life. Atoms are beautiful in their
            simplicity, supporting your feet with absolute comfort.
          </p>
          <button className={clsx(styles.modernShoesBtn)}>
            Explore more <TiArrowForward size={20} color="white" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default NowadaysShoes;
