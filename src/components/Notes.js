import React from 'react';
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    
const notes = context.notes;
// const setnotes = context.setnotes;

  return (
    <>
    <div className="row">
        {notes.map((notes)=>{
    return <NoteItem notes={notes}/> ;
})}
    </div>
    </>
  )
}
