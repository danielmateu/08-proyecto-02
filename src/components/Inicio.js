import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className="home">
      <h1>Soy Daniel Mateu, <strong>desarrollador web</strong> ubicado en <strong>Barcelona</strong> </h1>

      <h2 className="title">
        Te ayudo a crear tu sitio web, tener más visivilidad y relevancia en internet.&nbsp;
        <Link to="/contacto" className='conectamos'>conectamos?</Link>😊
       
      </h2>

      <section className="page">
        <h2 className="heading">Mis proyectos</h2>
        <p className='mis-proyectos'>Estos son algunos de mis trabajos de desarroyo web</p>
        
        <ListadoTrabajos limite='4'/>

      </section>
    </div>

    
    
  )
}
