import React from 'react';
import data from '../../data.credits.json';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import CardsContainer from '../../components/CardsContainer/CardsContainer.component';

export default function Credits() {
  return (
    <div className='page credits'>
      <Header />
      <div className='page-body'>
        <h1>Sources des images utilisées sur le site</h1>
        <p>Cliquer sur l'image pour accéder au portfolio de l'artiste sur Unsplash.com.</p>
      <CardsContainer data={data} />
      </div>
      <Footer />
    </div>
  )
}