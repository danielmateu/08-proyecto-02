import React from 'react'
import { Link } from 'react-router-dom';
import {trabajos} from '../data/trabajos';



export const Portafolio = () => {
  return (
    <div className="page">
      <h2 className="heading">Portafolio</h2>
        
      {
      trabajos.map(trabajo =>{
        
        return(
      <article className="articulo" key={trabajo.id}>
          <div className="marsk">
            <img src={`/images/${trabajo.id}.png`} alt={trabajo.descripcion}></img>
          </div>
          <span>{trabajo.categoria}</span>
          <h2><Link to={`proyecto/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
          <h3>{trabajo.tecnologias}</h3>
          <p>{trabajo.descripcion}</p>
      </article>
        );
      }    
      )
      }
    </div>
  )
}
