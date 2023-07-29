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
    
  return (< >


  
{work.map((work,index) => {
          return <tr style={{width:"10%"}} > 
          

<td style={{color:"grey",wordBreak:"break-all"}}> {index++ +1 } {work.title} </td>



          </tr>;


        })}

    </>
  )
}

export default Doing;