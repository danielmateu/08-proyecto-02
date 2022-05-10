import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className="home">
      <h1>Soy Daniel Mateu, <strong>desarrollador web</strong> ubicado en <strong>Barcelona</strong> </h1>

      <h2>
        Te ayudo a crear tu sitio web, tener más visivilidad y relevancia en internet.&nbsp;
        <Link to="/contacto" className='conectamos'>conectamos?</Link>😊
       
      </h2>

      <section className="page">
        <h2 className="heading">Mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarroyo web</p>
        
        <div className="works">

        </div>

      </section>
    </div>

    
    
  )
}
