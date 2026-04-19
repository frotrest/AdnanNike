import React from 'react';
import clsx from 'clsx';
import styles from './favoriteNikes.module.css';
import Container from '../../../Container';
import Mercurial from '@assets/mercurial.png';
import AirZoom from '@assets/air-zoom.png';
import YellowDrunk from '@assets/yellow-dunk.png';

const FavoriteNikes = () => {
  const favoriteNikes = [
    {
      img: Mercurial,
      alt: 'mercurial',
      title: 'NIKE Mercurial Superfly',
    },
    {
      img: AirZoom,
      alt: 'air-zoom',
      title: 'NIKE Air Zoom Alphafly',
    },
    {
      img: YellowDrunk,
      alt: 'yellow-drunk',
      title: 'NIKE Dunk High',
    },
  ];
  return (
    <section className={clsx(styles.favoriteNikes)}>
      <Container
        className={clsx(styles.favoriteNikesContent)}
        dataAnimate="fadeInLeft"
      >
        <h2 className={clsx(styles.favoriteNikesContentTitle)}>
          Our Favorite{' '}
          <span className={clsx(styles.favoriteNikesContentSubTitle)}>
            Nike
          </span>{' '}
          styles.
        </h2>
        <div className={clsx(styles.favoriteCards)}>
          {favoriteNikes.map((item, index) => (
            <div key={index} className={clsx(styles.favoriteCard)}>
              <h2 className={clsx(styles.favoriteCardTitle)}>{item.title}</h2>
              <img
                src={item.img}
                alt={item.alt}
                className={clsx(styles.favoriteCardImg)}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FavoriteNikes;
