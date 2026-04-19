import React from 'react';
import clsx from 'clsx';
import styles from './delivery.module.css';
import Container from '../../../Container';
import { FaTruck } from 'react-icons/fa6';
import { MdTimer } from 'react-icons/md';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { FaBox } from 'react-icons/fa';

const Delivery = () => {
  const deliveryBenefits = [
    {
      img: FaTruck,
      title: 'Free Delivery',
      benefit: 'from $29.99',
    },
    {
      img: MdTimer,
      title: 'Free Withdrawal 1h',
      benefit: 'in store',
    },
    {
      img: IoShieldCheckmarkSharp,
      title: '100% Secure Payment',
      benefit: 'At your service',
    },
    {
      img: FaBox,
      title: 'Returns & Exchanges',
      benefit: 'offered 365 days',
    },
  ];
  return (
    <section className={clsx(styles.delivery)}>
      <Container className={clsx(styles.deliveryContent)} dataAnimate="fadeIn">
        {deliveryBenefits.map((item, index) => (
          <div key={index} className={clsx(styles.deliveryBenefit)}>
            {<item.img size={24} color="white" />}
            <div className={clsx(styles.deliveryBenefitFurtherInformation)}>
              <h2
                className={clsx(styles.deliveryBenefitFurtherInformationTitle)}
              >
                {item.title}
              </h2>
              <p className={clsx(styles.deliveryBenefitFurtherInformationItem)}>
                {item.benefit}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Delivery;
