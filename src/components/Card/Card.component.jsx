import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Card({element}) {
  return (
    <Link className='link' to={`/${element.id}`}>
      <div className='card'  
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${house.cover}) no-repeat center center / cover`,
        }}>
        <h2>{house.title}</h2>
    </div>
    </Link>
  )
}