import React from 'react'
import Notes from "./Notes";
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import { useState,useEffect } from 'react';


export default function AddNotes() {
    const context = useContext(noteContext);
    const {addNote} = context ;
    const {getNotes} = context;
    const [note2add, setnote2add] = useState({Title: "", Description: "" , Tag:"default"});
    useEffect(() => {
      getNotes();
     },[note2add]);
    const handelClick= (e) =>{
      e.preventDefault();
      
      addNote(note2add.Title,note2add.Description,note2add.Tag);
     
      setnote2add({Title: "", Description: "" , Tag:"default"});
      getNotes();
    }
    const handelOnChange= (e) =>{
 setnote2add({...note2add, [e.target.name]:e.target.value})
    }
   
  return (
    <div>


<form>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label"  >Title</label>
    <input type="text" className="form-control" id="Title" name="Title" onChange={handelOnChange} value={note2add.Title} minLength={5} required  />
   
  </div>
  <div className="mb-3">
    <label htmlFor="Description" className="form-label"  >Description</label>
    <input type="text" className="form-control" id="Description" name="Description"  value={note2add.Description} onChange={handelOnChange} minLength={5}required/>
  </div>



  <div className="mb-3">
    <label htmlFor="Tag" className="form-label"  >TAG</label>
    <input type="text" className="form-control" id="Tag" name="Tag"   onChange={handelOnChange} value={note2add.Tag} minLength={5} required/>
  </div>
 
  <button  disabled={note2add.Title.length<5 || note2add.Description.length<5}  type="submit" className="btn btn-primary" onClick={handelClick}>ADD A NOTE</button>
</form>
<h1>
<Notes></Notes>
</h1>




    </div>
  )
}
