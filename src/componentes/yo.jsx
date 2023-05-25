import React from "react";
import foto from "../img/yoimagen.png"
import "../componentes/estilo /yo.css"

function Foto(){
    return(
        <div className="yoContainer">
            <img className="foto" src={foto} alt="foto" />
        </div>
    );
}

export default Foto;