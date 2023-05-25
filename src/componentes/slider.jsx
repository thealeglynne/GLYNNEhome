import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from "../img/fotoslider2.jpg"
import imagen3 from "../img/fotoslider3.jpg"
import imagenAdaptabilidad from "../img/sliderRepuesto.jpg";
import "../componentes/estilo /carrucel.css";
function Section1() {
  return (
    <Carousel className="caruselContainer">
      <Carousel.Item>
        <img
          className="d-block2 w-100"
          src={imagen}
          alt="First"      
        />
        <Carousel.Caption>
          <h3>Creatividad</h3>
          <p> Capacidad para pensar fuera de lo convencional y ofrecer soluciones innovadoras a los problemas de software.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block2 w-100"
          src={imagenAdaptabilidad}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Adaptabilidad:</h3>
          <p>Capacidad para adaptarse rápidamente a los cambios en los requisitos del proyecto y en las tecnologías utilizadas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block2 w-100"
          src={imagen3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Comunicación:</h3>
          <p> Habilidad para comunicarse claramente con el equipo de desarrollo y los usuarios finales para entender las necesidades y expectativas de ambos.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Section1;

