import React from 'react'
import Notes from "./Notes";
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import { useState } from 'react';

export default function AddNotes() {
    const context = useContext(noteContext);
    const {addNote} = context ;
    const [note2add, setnote2add] = useState({Title: "", Description: "" , Tag:"default"});
    const handelClick= (e) =>{
      e.preventDefault();
      
      addNote(note2add.Title,note2add.Description,note2add.Tag);
      
    }
    const handelOnChange= (e) =>{
 setnote2add({...note2add, [e.target.name]:e.target.value})
    }
  return (
    <div>


<form>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label"  >Title</label>
    <input type="text" className="form-control" id="Title" name="Title" onChange={handelOnChange} />
   
  </div>
  <div className="mb-3">
    <label htmlFor="Description" className="form-label"  >Description</label>
    <input type="text" className="form-control" id="Description" name="Description"   onChange={handelOnChange} />
  </div>



  <div className="mb-3">
    <label htmlFor="Tag" className="form-label"  >TAG</label>
    <input type="text" className="form-control" id="Tag" name="Tag"   onChange={handelOnChange} />
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handelClick}>ADD A NOTE</button>
</form>
<h1>
<Notes></Notes>
</h1>




    </div>
  )
}
