import React from 'react';
import data from '../../data.sections.json';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import CardsContainer from '../../components/CardsContainer/CardsContainer.component';

export default function Homepage() {
  const imageGradient = 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))';

  return (
    <div className='page home'>
      <Header />
      <div className='page-body'>
        <CardsContainer data={data} />
      </div>
      <Footer />
    </div>
  )
}