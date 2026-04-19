import React from 'react';
import clsx from 'clsx';
import styles from './dreams.module.css';
import Visionaries from '@assets/visionaries.png';
import Container from '../../../Container';
import { TiArrowForward } from 'react-icons/ti';

const Dreams = () => {
  const dreams = [
    {
      title: 'INSIGHTFUL CREATIVE DIRECTION',
      description:
        ': Uniting Consumer Insights with progressive manufacturing methods, we create comprehensive plans to outpace your competition.',
    },
    {
      title: 'PURPOSEFUL DESIGN',
      description:
        ': We create products that captivate consumers and elevate brands. applying a refined sense of beauty and style, our designs are alluring.',
    },
    {
      title: 'RELENTLESS INNOVATION',
      description:
        ': We live to challenge the boundaries of convention and take advantage of every breakthrough opportunity big or small. we’ll help you define the cutting-edge of your business.',
    },
  ];
  return (
    <section className={clsx(styles.dreams)}>
      <Container
        className={clsx(styles.dreamsContent)}
        dataAnimate="fadeInLeft"
      >
        <img src={Visionaries} alt="visionaries" />
        <div className={clsx(styles.visionariesContent)}>
          <h2 className={clsx(styles.visionariesContentMainTitle)}>
            WE ARE{' '}
            <span className={clsx(styles.visionariesContentSubTitle)}>
              VISIONARIES
            </span>
          </h2>
          <p className={clsx(styles.visionariesContentItem)}>
            Exploring the boundaries of footwear with expert design knowledge
            and manufacture in mind.
          </p>
          {dreams.map((item, index) => (
            <h5
              key={index}
              className={clsx(styles.visionariesContentDescription)}
            >
              <span className={clsx(styles.visionariesContentTitle)}>
                {item.title}
              </span>
              {item.description}
            </h5>
          ))}
          <button className={clsx(styles.visionariesContentBtn)}>
            Customization Available <TiArrowForward size={15} color="white" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Dreams;
