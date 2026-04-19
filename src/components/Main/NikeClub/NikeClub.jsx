import React from 'react';
import clsx from 'clsx';
import styles from './nikeClub.module.css';
import Container from '../../../Container';
import BlackNike from '@assets/black-nike.png';
import { TiArrowForward } from 'react-icons/ti';
import { SiNike } from 'react-icons/si';

const NikeClub = () => {
  return (
    <section className={clsx(styles.nikeClub)}>
      <img
        src={BlackNike}
        alt="black-nike"
        className={clsx(styles.nikeClubImg)}
      />
      <Container
        className={clsx(styles.nikeClubContent)}
        dataAnimate="fadeInLeft"
      >
        <div className={clsx(styles.nikeClubContentBlock)}>
          <h2 className={clsx(styles.nikeClubContentTitle)}>
            JOIN OUR NIKECLUB & GET 15% OFF
          </h2>
          <p className={clsx(styles.nikeClubContentDescription)}>
            Sign up for free. Join the community, Never pay for shipping.
          </p>
          <button className={clsx(styles.nikeClubContentBtn)}>
            Join us <TiArrowForward size={15} color="white" />
          </button>
        </div>
        <SiNike size={200} color="white" />
      </Container>
    </section>
  );
};

export default NikeClub;
