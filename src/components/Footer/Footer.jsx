import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './footer.module.css';
import Container from '../../Container';
import { SiNike } from 'react-icons/si';
import Nike from '@assets/logo-footer.webp';

const Footer = ({ children }) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };
  return (
    <footer className={clsx(styles.footer)}>
      <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
        <div className={clsx(styles.footerFormBlock)}>
          <h2 className={clsx(styles.footerFormBlockTitle)}>
            Let’s stay in touch
          </h2>
          <form onSubmit={handleSubmit} className={clsx(styles.footerForm)}>
            <label className={clsx(styles.footerFormLabel)}>
              <input
                type="email"
                value={email}
                placeholder="Enter Email..."
                onChange={(e) => setEmail(e.target.value)}
                className={clsx(styles.footerFormLabelInput)}
              />
            </label>
            <button type="submit" className={clsx(styles.footerFormBtn)}>
              Subscribe
            </button>
          </form>
          <img
            src={Nike}
            alt="nike-logo"
            className={clsx(styles.footerFormBlockImg)}
            loading="lazy"
          />
        </div>
        <div className={clsx(styles.commonQuestions)}>
          <div className={clsx(styles.commonRow)}>
            <div className={clsx(styles.commonQuestion)}>
              <h2 className={clsx(styles.commonQuestionTitle)}>Shop</h2>
              <ul className={clsx(styles.listQuestions)}>
                <li className={clsx(styles.listQuestionsItem)}>Mens</li>
                <li className={clsx(styles.listQuestionsItem)}>Womens</li>
                <li className={clsx(styles.listQuestionsItem)}>New Arrival</li>
              </ul>
            </div>
            <div className={clsx(styles.commonQuestion)}>
              <h2 className={clsx(styles.commonQuestionTitle)}>OUR SERVICES</h2>
              <ul className={clsx(styles.listQuestions)}>
                <li className={clsx(styles.listQuestionsItem)}>
                  Customize your products
                </li>
                <li className={clsx(styles.listQuestionsItem)}>Gift Card</li>
                <li className={clsx(styles.listQuestionsItem)}>
                  Maintain & Repair
                </li>
              </ul>
            </div>
          </div>
          <div className={clsx(styles.commonRow)}>
            <div className={clsx(styles.commonQuestion)}>
              <h2 className={clsx(styles.commonQuestionTitle)}>CONTACT US</h2>
              <ul className={clsx(styles.listQuestions)}>
                <li className={clsx(styles.listQuestionsItem)}>Find a Store</li>
                <li className={clsx(styles.listQuestionsItem)}>Contact Us</li>
                <li className={clsx(styles.listQuestionsItem)}>
                  Terms & Conditions
                </li>
              </ul>
            </div>
            <div className={clsx(styles.commonQuestion)}>
              <h2 className={clsx(styles.commonQuestionTitle)}>
                OUR ENTERPRISE
              </h2>
              <ul className={clsx(styles.listQuestions)}>
                <li className={clsx(styles.listQuestionsItem)}>Who are we?</li>
                <li className={clsx(styles.listQuestionsItem)}>
                  Press and news
                </li>
                <li className={clsx(styles.listQuestionsItem)}>
                  Our alliances
                </li>
              </ul>
            </div>
          </div>
          <div className={clsx(styles.commonQuestion)}>
            <h2 className={clsx(styles.commonQuestionTitle)}>NEED HELP ?</h2>
            <ul className={clsx(styles.listQuestions)}>
              <li className={clsx(styles.listQuestionsItem)}>My Account</li>
              <li className={clsx(styles.listQuestionsItem)}>Shipping</li>
              <li className={clsx(styles.listQuestionsItem)}>
                Return & Exchanges
              </li>
              <li className={clsx(styles.listQuestionsItem)}>FAQs</li>
              <li className={clsx(styles.listQuestionsItem)}>Rewards</li>
              <li className={clsx(styles.listQuestionsItem)}>
                Loyalty program
              </li>
              <li className={clsx(styles.listQuestionsItem)}>
                How to choose your product?
              </li>
              <li className={clsx(styles.listQuestionsItem)}>Sports Trends</li>
            </ul>
          </div>
        </div>
      </Container>
      {children}
    </footer>
  );
};

export default Footer;
