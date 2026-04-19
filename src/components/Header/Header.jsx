import React from 'react';
import clsx from 'clsx';
import styles from './header.module.css';
import Container from '../../Container';
import { SiNike } from 'react-icons/si';
import { FaSearch, FaUser, FaShoppingBasket } from 'react-icons/fa';
import Hero from '../Main/Hero/Hero';
import Products from '../Main/Products/Products';

const Header = () => {
  const navBar = ['New arrival', 'Men', 'Woman', 'Kids'];
  return (
    <header>
      <Container className={clsx(styles.headerContent)} dataAnimate="fadeIn">
        <nav className={clsx(styles.navBar)}>
          {navBar.map((item, index) => (
            <a key={index} href="#" className={clsx(styles.navBarItem)}>
              {item}
            </a>
          ))}
        </nav>
        <SiNike size={70} color="white" />
        <div className={clsx(styles.personalActions)}>
          <FaSearch size={24} color="white" />
          <FaUser size={24} color="white" />
          <FaShoppingBasket size={24} color="white" />
        </div>
      </Container>
      <Hero>
        <Products />
      </Hero>
    </header>
  );
};

export default Header;
