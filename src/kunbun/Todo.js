import React, { useContext,useEffect,useState,useRef} from 'react'
import noteContext from '../context/notes/noteContext';
import image from "./done.jpg";

function Todo() {
    const context = useContext(noteContext);
    const {getTask} = context;
    const {task} = context;

    useEffect(() => {
      getTask();
    

    }, [])
    
  return (
    <>


  
{task.map((work,index) => {
          return <tr > 
          

<td style={{color:"grey",wordBreak:"break-all"}}>{index++ +1 } {work.title}</td>



          </tr>;


        })}
        {task.length === 0 &&<div style={{ backgroundColor: "white" }}  ><img className='' 
        style={{ borderColor: "white", width: "50%", marginLeft: "20%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
        className='mx-5 my-5' > NO TODO FOUND</h5><br/></div> }

    </>
  )
}

export default Todo;