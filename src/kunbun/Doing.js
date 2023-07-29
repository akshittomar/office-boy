import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Alarm from '../components/Alarm';
import { useNavigate } from 'react-router-dom';
import image from './pending.jpg'

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

{work.length === 0 &&<div style={{ backgroundColor: "white",marginTop:"10%" }}  ><img className='' 
        style={{ borderColor: "white", width: "50%", marginLeft: "20%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
        className='mx-5 my-5' > NO PENDING WORK</h5><br/></div> }

    </>
  )
}

export default Doing;