import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <ul className="social-media">
            <li>
                <NavLink to='/servicios'><i className="fa-brands fa-github"></i>
                </NavLink>
            </li>
            <li>
                <NavLink to='/contacto'>
                    <i className="fa-brands fa-linkedin"></i>
                </NavLink>
            </li>
            <li>
                <NavLink to='/portafolio'>
                    <i className="fa-brands fa-instagram"></i>
                </NavLink>
            </li>
            <li>
                <NavLink to='/servicios'>
                    <i className="fa-brands fa-youtube"></i>
                </NavLink>
            </li>
        </ul>
        

        <ul className="technologies">
        <li>
            <NavLink to="/portafolio"><i className="fa-brands fa-html5"></i></NavLink>
        </li>
        <li>
            <NavLink to="/portafolio"><i className="fa-brands fa-css3-alt"></i>
            </NavLink>
        </li>
        <li>
            <NavLink to="/portafolio"><i className="fa-brands fa-js-square"></i>
            </NavLink>
        </li>
        <li>
            <NavLink to="/portafolio"><i className="fa-brands fa-react"></i>
            </NavLink>
        </li>
        </ul>
    </footer>
  )
}
