import React from 'react';
import './Card.css';

type TSrc = {
  children: React.ReactNode,
  src?: string,
}

// type TCard = {
//     title: string,
//     text: string,
//     btnName: string,
//     children: React.ReactNode,
// }

export const Card = ({ children, src }: TSrc) => {

  return (
    <div className="card">
        <img className='image' src={src} />
        {children}
    </div>
  )
}
