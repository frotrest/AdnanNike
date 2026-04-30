import React from 'react';
import clsx from 'clsx';
import styles from './bestShoes.module.css';
import BestShoesImg from '@assets/best-shoes.webp';
import Container from '../../../Container';
import { TiArrowForward } from 'react-icons/ti';

const BestShoes = () => {
  return (
    <section className={clsx(styles.bestShoes)}>
      <Container
        className={clsx(styles.bestShoesContent)}
        dataAnimate="fadeInRight"
      >
        <div className={clsx(styles.bestShoesDescription)}>
          <h2 className={clsx(styles.bestShoesDescriptionTitle)}>
            BEST SHOES FOR THE BEST PEOPLE
          </h2>
          <p className={clsx(styles.bestShoesDescriptionItem)}>
            Design for the way you live your life. Atoms are beautiful in their
            simplicity, supporting your feet with absolute comfort.
          </p>
          <button className={clsx(styles.bestShoesDescriptionBtn)}>
            Explore more <TiArrowForward size={15} color="white" />
          </button>
        </div>
        <div className={clsx(styles.bestShoesContentBox)}>
          <img
            src={BestShoesImg}
            alt="best-shoes"
            className={clsx(styles.bestShoesContentBoxImg)}
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default BestShoes;
