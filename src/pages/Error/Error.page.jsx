import React from 'react';
import { Link } from 'react-router-dom'; 

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';

export default function Error() {
  return (
    <div className='page error'>
      <Header />
      <div className='page-body'>
        <Link className='link' to='/'>
            <h1>404</h1>
            <h2>Page non trouvée.</h2>
            <p>Retour à l'accueil.</p>
        </Link>
      </div>
      <Footer />
    </div>
  )
}