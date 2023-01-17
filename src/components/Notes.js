import React from 'react';
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
// import AddNotes from './AddNotes';
import { useEffect } from 'react';
import { useRef , useState } from 'react';


export default function Notes() {
  const ref = useRef(null);
  const refClose = useRef(null);
  const context = useContext(noteContext);//bhai curly brackets use krega to exact cheez  load hogi context api mai se nhi to phir koi xyz variabel bna kr usme se dot . ka use krke niklega  

  const notes = context.notes;//bhai function import hua hai yeh kuch extra nhi likhna padta function k liye mtlb parantheses vgra nhi hai idhar par 
const {getNotes} = context;
  const {editNote} = context;
  // const setnotes = context.setnotes;
  const [note, setnote] = useState({id:"",eTitle: "", eDescription: "" , eTag:"default"});
  useEffect(() => {// will find out what is useeffect used for 



    getNotes();

  },[] )

  const updateNotes =  (currentNotes) => {// responsibel to update id & eTitle & eDescription iske parameters mai jo currentNotes mille hai voh context API se aa rhe hai Notesitem ne call kiya h is function ko aur "notes" as props bheje gye the Notes.js k dware 
    console.log(currentNotes);
    // setnote({id:currentNotes._id, eTitle:currentNotes.title,eDescription:currentNotes.description, etag:currentNotes.tag});
    
    // setnote({...note, [note.name]:note.value})
    setnote(currentNotes);       
    setnote(currentNotes);
    console.log("AFTER SETNOTE");
    console.log(note);
    ref.current.click();
  }




  const handelClick= (e) =>{
  
    setnote(note._id,note.eTitle,note.eDescription,note.eTag);
    setnote({...note, [e.target.name]:e.target.value})
    setnote({...note, [note.name]:note.value})
    editNote(note._id , note.eTitle, note.eDescription, note.eTag)
    setnote(note._id,note.eTitle,note.eDescription,note.eTag);
    setnote({...note, [e.target.name]:e.target.value})
    setnote({...note, [note.name]:note.value})
    e.preventDefault();  getNotes();
    refClose.current.click();
  }
  const handelOnChange= (e) =>{
setnote({...note, [e.target.name]:e.target.value})
getNotes();
  }

  return (
    <>










      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT NOTES</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">




              <form   onSubmit={e => e.preventDefault()} >
                <div className="mb-3">
                  <label htmlFor="eTitle" className="form-label"  >Title</label>
                  <input type="text" className="form-control" id="eTitle" name="eTitle" onChange={handelOnChange} value={note.eTitle}  minLength={5} required />

                </div>
                <div className="mb-3">
                  <label htmlFor="eDescription" className="form-label"  >Description</label>
                  <input type="text" className="form-control" id="eDescription" name="eDescription" onChange={handelOnChange} value={note.eDescription} minLength={5} required />
                </div>



                <div className="mb-3">
                  <label htmlFor="eTag" className="form-label"  >TAG</label>
                  <input type="text" className="form-control" id="eTag" name="eTag" onChange={handelOnChange} value={note.eTag} minLength={5} required />
                </div>

               
              </form>





            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" 
              
            
              onClick={ handelClick}>UPDATE NOTES </button>
            </div>
          </div>
        </div>
      </div>











      <div className="row">
        {notes.length === 0 && 'NO NOTES TO DISPLAY '}
        {notes.map((notes) => {
          return <NoteItem key={notes._id+Date.now()} notes={notes} updateNotes={updateNotes} />;
        })}
      </div>
    </>
  )
}
