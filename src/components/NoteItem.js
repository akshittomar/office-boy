import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
export default function NoteItem(props) {
    const note = props.notes;
    const context = useContext(noteContext);
   const {deleteNote}= context ;
   const updateNote = props.updateNotes;
    return (
        <div className="col-md-3 my-4 mx-3">
            <div className="card my-4" >

                <div className="card-body">
                  
                    <div className='d-flex align-items-center'>
                    <h4 className="card-title">{note.title}</h4>
                  <h6><i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id)}}></i></h6>  
                   <h6> <i className="fa-solid fa-file-pen  " onClick={()=>{updateNote(note)}}></i></h6>

                    </div>
                    <h6 className="card-text">{note.description}</h6>




                </div>
            </div>

        </div>
    )
}

