import React from 'react'
import { Link } from 'react-router-dom';
import {trabajos} from '../data/trabajos';



export const Portafolio = () => {
  return (
    <div className="page">
      <h2 className="heading">Portafolio</h2>
        
      {
      trabajos.map(trabajo =>{
        console.log(trabajo.img)
        return(
      <article key={trabajo.id}>
          <span>{trabajo.categoria}</span>
          
          <h2><Link to={`proyecto/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
          <h3>{trabajo.tecnologias}</h3>
          <p>{trabajo.descripcion}</p>
      </article>
        )
      }    
      )
      }
    </div>
  )
}
