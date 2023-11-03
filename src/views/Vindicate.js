import "../css/loading.css"
import { stopp } from "../vfx/sakura";

const Vindicate = () => {

  function handleClic(){
    window.location.href = "http://localhost:3000/#/third";
    stopp();

  }

/*   const buttonLocaltion = {
    position: "absolute",
    float: "center",
    width: "100%,",
    height: "100%",
    right: "0%",
    bottom: "0%",  
  
    textAlign: "center",
    display: "-webkit-box",
    WebkitBoxArient: "horizontal",
    WebkitBoxPack: "center",
    WebkitBoxAlign: "center",
    
    display: "-moz-box",
    MozBoxOrient: "horizontal",
    MozBoxPack: "center",
    MozBoxAlign: "center",
    
    display: "-o-box",
    OBoxOrient: "horizontal",
    OBpack: "center",
    OBoxAlign: "center",
    
    display: "-ms-box",
    MsBoxOrient: "horizontal",
    MsBoxPack: "center",
    MsBoxAlign: "center",
    
    display: "box",
    boxOrient: "horizontal",
    boxPack: "center",
    boxAlign: "center",
  }
 */

  return(
    <div className='backgroundcss'>
      <button class="button2"  onClick={handleClic}>
          启程
          <div class="hoverEffect">
            <div>
            </div>
          </div>
        </button>
    </div>
  )
}

export default Vindicate;
