import React from 'react';
import whatsapp from "../img/whatApp.png"
import "../componentes/estilo /cuerpo.css"
function WhatsApp() {
  return (
    <a className='watsapp' href="https://wa.me/573142142188"> <img className='iconos' src={whatsapp} alt="watsapp" /> </a>
  );
}

export default WhatsApp

