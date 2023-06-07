import React, { useEffect } from 'react'
import Alarm from './Alarm';
function MyNoteItem(props) {


    const note = props.notes;

    const deleteNote = props.deleteNote;
  
    const updateNote = props.updateNotes;


    
useEffect(() => {
    
  
    
}, [note])

  return (
    <>

{/* <div className="col-md-3 my-4 mx-3 card-deck"   style={{backgroundImage:'url()'}}  > */}

<div className="col-md-3 my-4 mx-3 card-deck" >

      <div className="card my-4  " style={{ width: "50vp" }}>

        <div className="card-body  ">

          <div className='d-flex  '>
            <h2 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><u><strong></strong></u><br /><i>{note.title}</i></h2>

          </div>
          <hr />
          {
          
         
           <h3 className="card-text container overflow-auto" style={{ height: "15vh" }} ><u><strong>Description:</strong></u><br />{note.description}</h3> 
           
          

          }
          <br />

          {
            // <div className=" card-footer d-flex justify-content-between container" > original it was like this 
            <div className=" card-footer d-flex  " style={{ maxWidth: "45vp" }} >
              {/* <div className="d-flex justify-content-center container"> */}
              { <div className='container'>
                <h6 style={{ color: "black", cursor: "pointer" }} onClick={() => {
                  var s1 = note.title + "sec";
                  var s2 = note.title + "min";
                  var s3 = note.title + "hrs"; localStorage.removeItem(s1);
                  localStorage.removeItem(s2);
                  localStorage.removeItem(s3); deleteNote(note._id)
                }} ><i className="fa-solid fa-trash    " ></i></h6>
              </div>
                }
            



              {

                             <div className='container' > <Alarm key={note._id} notes={note} show="true" /></div>
              }

             {  <div className=" container">
                <h6 style={{ color: "black", cursor: "pointer" }} onClick={() => { updateNote(note);  }}  ><i className="fa-solid fa-file-pen sm  " onClick={() => { updateNote(note) }}></i></h6>
              </div>}

              
              
              
             
</div>

          }



        </div>
      </div>

    </div>


    </>
  )
}

export default MyNoteItem ;