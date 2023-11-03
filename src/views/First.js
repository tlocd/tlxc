import React, { useState } from 'react'
import "../css/loading.css"
import { startSakura } from "../vfx/sakura";


var i = 0;

const Load = ({isLoading, begin}) => { 

  if (isLoading === 1){

    return (
      <div class="load-wrapp">
        <div class="load-1">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
      </div>
    );

  } else if (isLoading === 2){
    return (
      <div id='begin'>
        <div> {begin} </div>
      </div>
    );

  }else{
    
    function handleClic(){
      window.location.href = "http://localhost:3000/#/second";
      startSakura(true);
    }

    return (
      <div className='backgroundcss' >
        <button class="button1" onClick={handleClic}>
          Get in touch
          <div class="hoverEffect">
            <div>
            </div>
          </div>
        </button>
      </div>
    );

  }
}



const First = () => {

  let [begin, setBegin] = useState("");
  let [load, setLoad] = useState(1);

  
  var msg = "准备好了吗，要开始了  ";

  let handleZ = () => {
    let timeId = setTimeout(function tick1(){
      setBegin(msg.substring(0, i));
      console.log(i);
      i++;
      if (i <= msg.length){
        setTimeout(tick1, 200);
      }else{
        clearTimeout(timeId);
      }
    }, 200);
  }

  let timeId = setTimeout(function tick(){
    if(load <= 3){
      setLoad(++load);
      console.log("load" + load);

      if (load === 2){
        handleZ();
      }
      setTimeout(tick, 5000);
    }else{
      clearTimeout(timeId);
    }
  }, 5000);

  return (
    <div>
      <Load isLoading={load} begin={begin}></Load>
    </div>
  )
}
export default First;
