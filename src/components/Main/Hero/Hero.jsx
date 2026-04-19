import React from 'react';
import clsx from 'clsx';
import styles from './hero.module.css';
import Container from '../../../Container';
import Shoes from '@assets/hero-shoes.png';
import { TiArrowForward } from 'react-icons/ti';

const Hero = ({ children }) => {
  return (
    <section className={clsx(styles.hero)}>
      <Container className={clsx(styles.heroContent)} dataAnimate="fadeIn">
        <img src={Shoes} alt="shoes" className={clsx(styles.heroContentImg)} />
        <h1 className={clsx(styles.heroContentTitle)}>
          AIR JORDAN 1 RETRO HIGH OG DUNK HIGH
        </h1>
        <div className={clsx(styles.heroContentDescription)}>
          <h2 className={clsx(styles.heroContentDescriptionTitle)}>
            AIR JORDAN 1 RETRO HIGH OG
          </h2>
          <p className={clsx(styles.heroContentDescriptionPrice)}>$275</p>
          <button className={clsx(styles.heroContentDescriptionBtn)}>
            More details <TiArrowForward size={10} color="white" />
          </button>
        </div>
      </Container>
      {children}
    </section>
  );
};

export default Hero;
