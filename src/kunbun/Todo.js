import React, { useContext,useEffect,useState,useRef} from 'react'
import noteContext from '../context/notes/noteContext';


function Todo() {
    const context = useContext(noteContext);
    const {getTask} = context;
    const {task} = context;

    useEffect(() => {
      getTask();
    

    }, [])
    
  return (
    <div style={{border:"solid 1px "}}>


  
{task.map((work,index) => {
          return <div > 
          
<div className='mt-3 '>
<t style={{color:"grey"}}>{index++ +1 } {work.title}</t>
</div>


          </div>;


        })}

    </div>
  )
}

export default Todo;