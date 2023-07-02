import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Alarm from '../components/Alarm';
import { useNavigate } from 'react-router-dom';


function Doing() {
  let navigate = useNavigate(); 
    const context = useContext(noteContext);
    const notes = context.notes;
    const work = context.work;
    const { getAllWork } = context;
    useEffect(() => {
      
    
     
    }, [work])
    
  return (<div style={{border:"solid 1px "}}>


  
{work.map((work,index) => {
          return <div > 
          <div></div>
<div className='mt-3 '>
<t style={{color:"grey"}}>{index++ +1 } {work.title} <i className="fa fa-external-link" onClick={()=>navigate('/task')} aria-hidden="true"></i></t>
</div>


          </div>;


        })}

    </div>
  )
}

export default Doing;