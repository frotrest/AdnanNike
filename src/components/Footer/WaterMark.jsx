import React from 'react';
import clsx from 'clsx';
import styles from './footer.module.css';
import Container from '../../Container';
import { CiYoutube, CiTwitter } from 'react-icons/ci';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const WaterMark = () => {
  return (
    <section className={clsx(styles.waterMark)}>
      <Container className={clsx(styles.waterMarkContent)} dataAnimate="fadeIn">
        <h5 className={clsx(styles.waterMarkContentTitle)}>
          2022 Nike, Inc. All Rights Reserved ©
        </h5>
        <div className={clsx(styles.networks)}>
          <CiYoutube size={20} color="white" />
          <FiFacebook size={20} color="white" />
          <CiTwitter size={20} color="white" />
          <FaInstagram size={20} color="white" />
        </div>
      </Container>
    </section>
  );
};

export default WaterMark;
