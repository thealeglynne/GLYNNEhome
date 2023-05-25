
import video from "../componentes/videos/videoWebDef (2).mp4";
import "../componentes/estilo /video.css"

function Video() {
  return(
    <div>
        <video className="video" src={video} alt="video.mp4" autoPlay muted loop></video>
    </div>
  )
  }
export default Video;
