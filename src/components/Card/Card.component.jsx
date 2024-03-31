import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Card({element}) {
  return (
    <Link className='link' to={`/${element.linkTo}`}>
      <div className='card'  
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), 
          url(${require('../../' + element.imageUrl)}) no-repeat center center / cover`,
        }}>
        <h2>{element.title}</h2>
    </div>
    </Link>
  )
}