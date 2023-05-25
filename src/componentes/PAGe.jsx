import React from "react";
import "../componentes/estilo /cuerpo.css"
import Section1 from "../componentes/slider"
import imagen7 from "../img/react.png"
import Banner from "../componentes/baner";
import  "../componentes/estilo /carrucel.css"
import MenuDesplegable from "../componentes/menu"
import MyCarousel2 from '../componentes/cartProyects'
import imgRobot from "../img/—Pngtree—three dimensional mechanical 3d texture_6939141.png"
import MyButtonText from "../componentes/botonTexto"
import linkedin from "../img/linkeding.png"
import GitHub from "../img/githubg.png"
import EnlaceWhatsApp from "../componentes/whatsaap"
import instagram from "../img/instagram.png"
import email from "../img/email.png"
import telegram from "../img/telegram.png"
import home from "../img/home.png"
import proyectos from "../img/ProyectosF.png"
import informacion from "../img/info.png"
import proceso from "../img/proceso.png"
import Video from "../componentes/video"
import Foto from "../componentes/yo"
import CardYo from "../componentes/yoCard"
import LetreroVideo from "../componentes/letreroVideo"
import BrilloVideo from "../componentes/brilloLetrero"



function Cuerpo() {
  return (
    <div className="App">
      {/* HEADER */}
      <header>
          <Banner />
          <img className="img7" src={imagen7} alt="img"/>
    
         <h2 className="nombreHeader">GLYNNE</h2>
         <MenuDesplegable className="menuDesplegable"  />
      </header>

      {/* MAIN */}
      
      <main>
        <section id="section1">
          
         <Section1 />
        </section>
    
        </main>
        <section id="section2">
            
        </section>
        <h2 className="tituloCarrucel2"> project information</h2>
        <section className="section3">
     
          <div className="infoContenedor" > 
          
            <MyCarousel2 className="carrucel" />
          </div>
        </section>
    
    <section id="information" className="sectionRender">
      <div className="textoRobotContenedor">
      <h2 className="h2Robot">Web Developer with experience in frontend and backend technologies.</h2>
      <p className="textoRobot">Welcome to my website! Here you will find examples of my skills in frontend and backend technologies such as HTML, CSS, Bootstrap, React, Node.js, and Git. You will be able to see my experience in designing and developing highly interactive and responsive web pages, as well as developing scalable and customized backend solutions using Express and MongoDB. I am committed to staying up-to-date with the latest trends and technologies in web development, and I am always looking for ways to improve the quality and efficiency of my work. If you are looking for an experienced developer for your project, I am here to help!</p>
      </div>
      <img id="imgRobot" className="imgRobot" src={imgRobot} alt="imgRobot" />
      
      <MyButtonText className="botonRender" />
    </section>
    <section className="matrix">
      
    </section>
    <div>
    
    </div>
    <div className="VideoContainer">
      <div className="textoVideoConteiner">
       
       <LetreroVideo/>
       <BrilloVideo/>
        </div>
      <Video/>
    </div >
    <div  className="yoSection">
   <div className="fotoContenedor">
      <Foto/>
  </div>
   <div id="perfilTituloC" className='perfilTituloC'>
    <h3 id="perfilTitulo2" className='perfilTutulo2'>DEVELOPER PROFILE</h3>
   </div>
  <div className="cardYoContenedor">
      <CardYo/>
  </div>
  </div>

      {/* FOOTER */}
    <footer id="section3">
      <div className="componentesFooter">
    <p className="GLYNNE"> © GLYNNE Web Development. All Rights Reserved.</p>
    <h3 className="Tac">CONtact</h3>
        <h4 className="contact">Contact me directy:</h4>
        <div className="logosRedes">
        <div className="iconosRedes">
            <EnlaceWhatsApp />
            <img className="iconos" src={email} alt="email"/>
            <img className="iconos" src={telegram} alt="linkedin"/>
        </div>
        <h4 className="contact2">Check my profiles:</h4>
        <div className="checkImagenes">
          <img className="iconos" id="github" src={GitHub} alt="GitHub"/>
          <img className="iconos" src={linkedin} alt="linkedin"/>
          <img className="iconos" src={instagram} alt="instagram"/>
        </div>
        <div className="infoTetcontenedor">
        <a href="g"   className="texInfo1"> (+57) 314 253 4964</a>
        <a href="g"   id="email" className="texInfo2">alexanderqp12@gmail.com</a>
        <a href="g"   id="telegram" className="texInfo3"> (+57) 314 253 4964</a>
      </div>
      </div>
      <div className="checMeText">
        <a id="icon1" className="checIcon1" href="https://github.com/thealeglynne" target="-BLANK">GitHub</a>
        <a id="icon2"  className="checIcon"  href="https://www.linkedin.com/in/alexander-quiroga-90a781245/" target="-BLANK">Linkedin</a>
        <a id="icon3" className="checIcon" href="https://www.instagram.com/thealexglynne/" target="-BLANK">Instagram</a>
      </div>
      <h4 className="menu">Menu:</h4>
      <div className="iconosMenu">
        <img className="iconosIMGmenu" src={home} alt="home"/>
        <img className="iconosIMGmenu" src={proyectos} alt="proyectos"/>
        <img className="iconosIMGmenu" src={informacion} alt="informacion"/>
        <img id="proceso" className="iconosIMGmenu" src={proceso} alt="proceso"/>
       
      </div>
      <div className="checMeText">
        <a id="textoMenu1" className="checIcon1" href="https://github.com/thealeglynne" target="-BLANK">home</a>
        <a id="textoMenu2"  className="checIcon1"  href="https://www.linkedin.com/in/alexander-quiroga-90a781245/" target="-BLANK">proyects</a>
        <a id="textoMenu3" className="checIcon1" href="https://www.instagram.com/thealexglynne/" target="-BLANK">information</a>
        <a id="textoMenu4" className="checIcon2" href="https://www.instagram.com/thealexglynne/" target="-BLANK">process</a>
      </div>
      </div>
    </footer>
    </div>
  );
}

export default Cuerpo;


