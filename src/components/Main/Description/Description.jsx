import React from 'react';
import clsx from 'clsx';
import styles from './description.module.css';
import Container from '../../../Container';
import FirstModel from '@assets/girl-model-first.webp';
import SecondModel from '@assets/girl-model-second.webp';
import { TiArrowForward } from 'react-icons/ti';

const Description = () => {
  return (
    <section className={clsx(styles.description)}>
      <Container
        className={clsx(styles.descriptionContent)}
        dataAnimate="fadeInLeft"
      >
        <h2 className={clsx(styles.descriptionContentTitle)}>
          The essence <img src={FirstModel} alt="first-model" loading="lazy" />{' '}
          <span className={clsx(styles.descriptionContentSubTitle)}>
            handcrafted{' '}
            <img src={SecondModel} alt="second-model" loading="lazy" />
          </span>{' '}
          of footwear
        </h2>
        <p className={clsx(styles.descriptionContentItem)}>
          In terms of footwear, we are the first in Canada to have opened not
          simple "shops" but real company outlets that offer the same service as
          the artisan shops of yesteryear: this to make you go without fail
          every time you want to buy a pair of handmade genuine leather shoes.
          Without fear of making mistakes and with the certainty that you will
          be able to wear them comfortably from the beginning. Are you also
          curious to find out why hundreds of people choose us every day?
        </p>
        <button className={clsx(styles.descriptionContentBtn)}>
          Find out More <TiArrowForward size={10} color="white" />
        </button>
      </Container>
    </section>
  );
};

export default Description;
