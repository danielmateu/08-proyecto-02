import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';




export const Portafolio = () => {
  return (
    <div className="page">
      <h2 className="heading">Portafolio</h2>
      
      <ListadoTrabajos/>
      
    </div>
  )
}
