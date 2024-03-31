import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <Link className='link' to='/'>
            <h1>L'Antre des Druides</h1>
            <h2>Aide de jeu pour les personnages druides de Donjons et Dragons 5ème édition.</h2>
        </Link>
    </div>
  )
}