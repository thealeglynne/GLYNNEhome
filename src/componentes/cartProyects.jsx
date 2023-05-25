import "../componentes/estilo /slProd.css"
import img1 from "../img/desarrolloWeb.jpg"
import img2 from "../img/desarrolloApp.jpg"
import img3 from "../img/bastidores-servidores-datos-sala-central-centro-computo-big-data-interior-azul-alojar-hardware-almacenamiento.jpg"
import MyButton from "../componentes/botonesCarrucel"


function MyCarousel2() {
  return (
    <div className="slProdContenedor">
      <div className="caroucelItem">
        <div className="row">
          <div id="col-md-1" className="col-md-4">
            <img
              className="d-block w-270px"
              src={img1}
              alt="First slide"
            />

            <h3 className='th3'><b>WEB development</b></h3>
            <p  id="desarrolloWeb" className='TextoCard'>We develop custom and optimized websites to provide an exceptional user experience, with modern design and advanced functionalities.</p>
            <MyButton />
          </div>
          <div  id="col-md-2"className="col-md-4">
            <img
              className="d-block w-98"
              src={img2}
              alt="Second slide"
            />
            <h3  className='th3'><b>APP Development </b></h3>
            <p id='desarrolloApp' className='TextoCard'>We create intuitive and efficient mobile applications, with attractive design and advanced features that meet the needs of our clients.</p>
            <MyButton />
          </div>
          <div id="col-md-3" className="col-md-4">
            <img
              className="d-block w-98"
              src={img3}
              alt="Third slide"
            />
            <h3 id="backEnd" className='th3'><b>BACK-end Development</b></h3>
            <p id="textoBackEnd" className='TextoCard'>We develop scalable and robust backend solutions with Node.js, using modern technologies to ensure optimal performance and efficient data management.</p>
            <MyButton />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default MyCarousel2