import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Alarm from '../components/Alarm';


function Done() {

    const context = useContext(noteContext);
    
    const accomp= context.accomp;

    useEffect(() => {
      
    
     
    }, [accomp])
    
  return (<div style={{border:"solid 1px "}}>


  
{accomp.map((acc,index) => {
          return <div > 
          
<div className='mt-3 '>
<t style={{color:"grey"}}>{index++ +1 } {acc.title}</t>
</div>


          </div>;


        })}

    </div>
  )
}

export default Done;