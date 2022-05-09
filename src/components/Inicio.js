import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className="container">
      <div className="intro">
        <h1>Soy Desarrollador Front End!</h1>
          <p>Especializado en diseño web, desde el año 2020 he estado investigando y estudiando por mi cuenta, por lo que me considero un desarrollador autodidacta, sin miedo a aprender nuevas tecnologías y con muchas ganas de crear soluciones.
          </p>
      </div>

      <h2 className="crear-soluciones">Te ayudo a crear soluciones para tu sitio web y a tener más visivilidad y relevancia en internet <Link to='/contacto'>Contacta conmigo <i class="fa-brands fa-empire"></i></Link></h2>

      <section className="last-works">
        <h2>Quieres saber más de mi?</h2>
        <p>Esta Single page app es mi primera inmersión en la librería React JS, por lo que actualmente estoy investigando y experimentando la infinidad de posibilidades que me puede ofrecer este framework tan potente.</p>

        <div className="works"></div>
      </section>
      
    </div>
    
  )
}
