import React from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import CardsContainer from '../../components/CardsContainer/CardsContainer.component';

export default function Homepage() {
  return (
    <div className='page'>
      <Header />
      <CardsContainer />
      <Footer />
    </div>
  )
}