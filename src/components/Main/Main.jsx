import React from 'react';
import Description from './Description/Description';
import Sellers from './Sellers/Sellers';
import SportShoes from './SportShoes/SportShoes';
import NowadaysShoes from './ModernShoes/NowadaysShoes';
import FavoriteNikes from './FavoriteNikes/FavoriteNikes';
import Partners from './Partners/Partners';
import BestShoes from './BestShoes/BestShoes';
import Dreams from './Dreams/Dreams';
import NikeClub from './NikeClub/NikeClub';
import Delivery from './Delivery/Delivery';

const Main = () => {
  return (
    <main>
      <Description />
      <Sellers />
      <SportShoes />
      <NowadaysShoes />
      <FavoriteNikes />
      <Partners />
      <BestShoes />
      <Dreams />
      <NikeClub />
      <Delivery />
    </main>
  );
};

export default Main;
