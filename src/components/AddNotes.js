import React from 'react'
import Notes from "./Notes";
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


export default function AddNotes() {
    const context = useContext(noteContext);
    const {addNote} = context ;
    
    const {getNotes} = context;
    const [note2add, setnote2add] = useState({Title: "", Description: "" , Tag:"default",Hrs:0,Min:0,Sec:0});
    let navigate = useNavigate();
    
    const handelClick= (e) =>{
      e.preventDefault();
      
      addNote(note2add.Title,note2add.Description,note2add.Tag);
    
   
   if(note2add.Hrs!==0 || note2add.Min!==0 || note2add.Sec!==0){
    var s1 = note2add.Title+"sec";
    var s2 = note2add.Title+"min";
    var s3 = note2add.Title+"hrs";
   localStorage.setItem(s1,note2add.Sec.toString());
   localStorage.setItem(s2,note2add.Min.toString());
   localStorage.setItem(s3,note2add.Hrs.toString());}
      setnote2add({Title: "", Description: "" , Tag:"default",Hrs:0,Min:0,Sec:0});
      getNotes();
    }
    const handelOnChange= (e) =>{
 setnote2add({...note2add, [e.target.name]:e.target.value})
    }
   
  return (
    <div>
<h3></h3>

<form   >
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


  <div className="input-group  mb-3 position-relative" style={{minWidth:"10%",maxWidth:"20%"}} >
  <span className="input-group-text " >Finish Time </span>
  <input type="number" aria-label="Hrs" name='Hrs'value={note2add.Hrs} placeholder="hh" onChange={handelOnChange}  max="24" min="0" className="form-control "/>
  <input type="number" aria-label="Min" name='Min'value={note2add.Min} placeholder="mm" onChange={handelOnChange}  max="60" min="0" className="form-control "/>
  <input type="number" aria-label="Sec" name='Sec'value={note2add.Sec} placeholder="ss" onChange={handelOnChange} max="60" min="0" className="form-control "/>
  </div>
  
  <small ><p className='mx-6 my-6'>Enter Time In hh:mm:ss Format </p></small>
  
  
 
  
  



  



 
  <button  disabled={note2add.Title.length<5 || note2add.Description.length<5}  type="submit" className="btn btn-primary" onClick={handelClick}>ADD A NOTE</button>
</form>
<h1>
<Notes></Notes>
</h1>




    </div>
  )
}
