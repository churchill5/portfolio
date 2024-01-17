import React from 'react'
import './Projo.css'


const Projo = ({tittle, src, meso, link, name, mane, number}) => {
  return (
    <div className='projo' >
        <h4><span> {number}</span> {tittle}</h4>
        <img src={src} alt="" />
        <p>{meso}</p>
        <a href={link} target="blank" >{name}</a>
        {mane}
    </div>
    )
}

export default Projo