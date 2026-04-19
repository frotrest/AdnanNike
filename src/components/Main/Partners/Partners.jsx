import React from 'react';
import clsx from 'clsx';
import styles from './partners.module.css';
import Container from '../../../Container';
import Adidas from '@assets/adidas.png';
import Nike from '@assets/nike.png';
import Puma from '@assets/puma.png';
import Converse from '@assets/converse.png';
import Reebok from '@assets/reebok.png';
import VansLogo from '@assets/vans-logo.png';
import BasketBall from '@assets/basketball-player.png';
import NewBalance from '@assets/newbalance.png';

const Partners = () => {
  const partners = [
    {
      partner: Adidas,
      description: 'adidas',
      id: 0,
    },
    {
      partner: Nike,
      description: 'nike',
      id: 1,
    },
    {
      partner: Puma,
      description: 'puma',
      id: 2,
    },
    {
      partner: Converse,
      description: 'converse',
      id: 3,
    },
    {
      partner: Reebok,
      description: 'reebook',
      id: 4,
    },
    {
      partner: VansLogo,
      description: 'vans-logo',
      id: 5,
    },
    {
      partner: BasketBall,
      description: 'basketball-logo',
      id: 6,
    },
    {
      partner: NewBalance,
      description: 'new-balance',
      id: 7,
    },
  ];
  return (
    <section className={clsx(styles.partners)}>
      <div className={clsx(styles.partnersContent)} data-animate="fadeIn">
        {partners.map((partner) => (
          <img
            key={partner.id}
            src={partner.partner}
            alt={partner.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
