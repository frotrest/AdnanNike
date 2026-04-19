import React from 'react';
import { useAnimateOnScroll } from './AnimateWatcher';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import WaterMark from './components/Footer/WaterMark';

function App() {
  useAnimateOnScroll();
  return (
    <>
      <Header />
      <Main />
      <Footer>
        <WaterMark />
      </Footer>
    </>
  );
}

export default App;
