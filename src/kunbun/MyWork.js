import React , { useContext, useRef, useState, useEffect }from 'react'
import noteContext from "../context/notes/noteContext";
import image from "./done.jpg";
function MyWork() {
     const context = useContext(noteContext);
     const notes = context.notes ;
     const getNotes = context.getNotes ;
     useEffect(() => {
      
    getNotes();
     
     }, [])
  return (
    <>
    {
        notes.map((note,index)=>{
            return <tr>
                
<td style={{color:"grey",wordBreak:"break-all"}}>{index++ +1 } {note.title}</td>
            </tr>;
        })
    }
     {notes.length === 0 &&<div style={{ backgroundColor: "white" }}  ><img className='' 
        style={{ borderColor: "white", width: "50%", marginLeft: "20%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
        className='mx-5 my-5' > NO TODO FOUND</h5><br/></div> }
    </>
  )
}

export default MyWork