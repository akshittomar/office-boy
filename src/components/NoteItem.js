import React, { useContext,useEffect } from 'react'
import noteContext from "../context/notes/noteContext";

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function NoteItem(props) {


    useEffect(() => {
        AOS.init({ 
        //   animatedClassName: 'aos-animate',
          duration: 1000,
          anchorPlacement: 'top-bottom',
          
        });
      
       
      }, [])



    const note = props.notes;
    const context = useContext(noteContext);
   const {deleteNote}= context ;
   const updateNote = props.updateNotes;
    return (
        <div className="col-md-3 my-4 mx-3 "    data-aos="zoom-in-up" >
            <div className="card my-4  " >

                <div className="card-body ">
                  
                    <div className='d-flex align-items-center '>
                    <h4 className="card-title container">Title:<br/>{note.title}</h4>
                    
                    </div>
                    <hr/>
                    <h6 className="card-text container">Description:<br/>{note.description}</h6>

                    <div className=" card-footer d-flex justify-content-between " >
                        
                            <div className="d-flex justify-content-center">
                  <h6>Delete <i className="fa-solid fa-trash    " onClick={()=>{deleteNote(note._id)}}></i></h6>  
                  </div>
                  
                  <div   className="d-flex justify-content-center">
                   <h6>Edit <i className="fa-solid fa-file-pen sm  " onClick={()=>{updateNote(note)}}></i></h6>
                   </div>
                  
                   </div>


                   


                </div>
            </div>

        </div>
    )
}

