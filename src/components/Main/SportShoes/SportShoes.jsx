import React from 'react';
import clsx from 'clsx';
import styles from './sportShoes.module.css';
import Container from '../../../Container';
import BlueShoes from '@assets/blue-nike.webp';
import AirJordan from '@assets/air-jorden.webp';
import PurpleJordan from '@assets/purple-jorden.webp';
import HighJordan from '@assets/high-jorden.webp';
import Yeeze from '@assets/yeeze.webp';
import Vens from '@assets/vans.webp';

const SportShoes = () => {
  return (
    <section className={clsx(styles.sportShoes)}>
      <Container
        className={clsx(styles.sportShoesContent)}
        dataAnimate="fadeInLeft"
      >
        <h2 className={clsx(styles.sportShoesContentTitle)} data-text="SPORTS">
          Sports{' '}
          <span className={clsx(styles.sportShoesContentSubTitle)}>Time</span>
        </h2>
        <div className={clsx(styles.sportShoesCards)}>
          <div className={clsx(styles.firstRow)}>
            <div className={clsx(styles.sportShoesCard)}>
              <img
                src={BlueShoes}
                alt="blueShoes"
                className={clsx(styles.sportShoesCardImg)}
                loading="lazy"
              />
              <h2 className={clsx(styles.sportShoesCardTitle)}>
                Nike Air Max Plus 3
              </h2>
            </div>
            <div className={clsx(styles.sportShoesCard)}>
              <img
                src={AirJordan}
                alt="air-jordan"
                className={clsx(styles.sportShoesCardImg)}
              />
              <h2 className={clsx(styles.sportShoesCardTitle)}>
                Air Jordan 4 Retro Lightning (Premium Batch)
              </h2>
            </div>
          </div>
          <div className={clsx(styles.secondRow)}>
            <div className={clsx(styles.sportShoesCard)}>
              <img
                src={PurpleJordan}
                alt="purple-jordan"
                className={clsx(styles.sportShoesCardImg)}
              />
              <h2 className={clsx(styles.sportShoesCardTitle)}>
                Air Jordan 13 Retro Court Purple (Reflective)
              </h2>
            </div>
            <div className={clsx(styles.sportShoesCard)}>
              <img
                src={HighJordan}
                alt="high-jordan"
                className={clsx(styles.sportShoesCardImg)}
              />
              <h2 className={clsx(styles.sportShoesCardTitle)}>
                Air Jordan 1 AJKO Blue Red
              </h2>
            </div>
          </div>
          <div className={clsx(styles.firstRow)}>
            <div className={clsx(styles.sportShoesCard)}>
              <img
                src={Yeeze}
                alt="yeeze"
                className={clsx(styles.sportShoesCardImg)}
              />
              <h2 className={clsx(styles.sportShoesCardTitle)}>
                Yeezy Boost 350 V2 MX Rock (Real Boost)
              </h2>
            </div>
            <div className={clsx(styles.sportShoesCard)}>
              <img
                src={Vens}
                alt="vens"
                className={clsx(styles.sportShoesCardImg)}
              />
              <h2 className={clsx(styles.sportShoesCardTitle)}>
                Vans Old Skool Suede Honey Gold
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SportShoes;
