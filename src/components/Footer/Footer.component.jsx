import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <Link className='link' to='/credits'>Crédits</Link>
    </div>
  )
}