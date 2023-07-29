import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Alarm from '../components/Alarm';
import image from './img.png';

function Done() {

    const context = useContext(noteContext);
    
    const accomp= context.accomp;

    useEffect(() => {
      
    
     
    }, [accomp])
    
  return (<>


  
{accomp.map((acc,index) => {
          return <tr > 
          

<td style={{color:"grey",wordBreak:"break-all"}}>{index++ +1 } {acc.title}</td>



          </tr>;


        })}
        {accomp.length === 0 &&<div style={{ backgroundColor: "white",marginTop:"0%" }}  ><img className='' 
        style={{ borderColor: "white", width: "45%", marginLeft: "30%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
        className='mx-5 my-5' > NO COMPELETED WORK</h5><br/></div> }

    </>
  )
}

export default Done;