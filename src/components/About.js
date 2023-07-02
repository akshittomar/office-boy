import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Alarm from './Alarm';
export default function About() {
    const  {a} = useContext(noteContext);
    const context = useContext(noteContext);
    const notes = context.notes;


    
  return (
    <div>
    <div> I AM IN ABOUT COMPONENET OF {a.name} AND HE BELONGS TO {a.class}</div>
    {notes.map((notes) => {
      
          return <Alarm key={notes._id} notes={notes}  show="false" />;
        })}
        <div>NAMSTE BRO</div>
    </div>
  )
}
