import React from 'react'

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      
        <form className="contact" action='mailto:danielmateu86@gmail.com'>
          <div className="info">
            <input type="text" className="" placeholder='Nombre'/>
            <input type="text" className="" placeholder='Apellidos'/>
            <input type="text" className="" placeholder='Email'/>
            <textarea placeholder="Motivo de contacto"/>
            <input type='submit' value='ENVIAR'/>
          </div>
        </form>
    </div>
  )
}
