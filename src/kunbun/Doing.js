import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Alarm from '../components/Alarm';


function Doing() {

    const context = useContext(noteContext);
    const notes = context.notes;
    const work = context.work;
    const { getAllWork } = context;
    useEffect(() => {
      
    
     
    }, [work])
    
  return (<div style={{border:"solid 1px "}}>


  
{work.map((work,index) => {
          return < > 
          <div></div>
<div className='mt-3 '>
<t style={{color:"grey"}}>{index++ +1 } {work.title}</t>
</div>


          </>;


        })}

    </div>
  )
}

export default Doing;