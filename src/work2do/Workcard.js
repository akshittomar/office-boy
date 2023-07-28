import React, { useEffect } from 'react'
import Alarm from '../components/Alarm'
function Workcard(props) {

    const note = props.notes;

    const deleteNote = props.deleteNote;
    const updateNote = props.updateNotes;

    const chatFunc = props.Chat;

    const headingStyle = {
        background: 'radial-gradient(circle, #040044, rgb(163 202 212))',
        // WebkitBackgroundClip: 'text',
        
        // color: 'lavender',
        fontFamily:"serif" 
        
        // backgroundColor:"red"
      }; 
    useEffect(() => {



    }, [note])

    return (
        <>
            <div className="col-md-3 my-4 mx-3 card" style={headingStyle}    >
                <div className="card my-4 shadow-lg  bg-body-tertiary rounded " style={{ width: "50vp" }}>
                    <div className="card-header">

                     <u>PROJECT UNDER:</u>{note.epost} <i className="fa-solid fa-people-arrows"></i>&nbsp;{note.name}

                    </div>
                    <div className="card-body  ">

                        <div className='d-flex  '>
                            <h6 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><u><strong>Title:</strong></u><br /><i>{note.title}</i></h6>

                        </div>
                      
                         <div><h6 style={{ height: "10vh" }} className="card-text container overflow-auto" ><u><strong>Work:</strong></u><div dangerouslySetInnerHTML={{ __html: note.description }} ></div></h6>

                            </div>

                        
                        <br />


                        {

                            <div className=" card-footer d-flex  " style={{ maxWidth: "45vp" }} >

                              <div className='container'>
                                        <h6 style={{ color: "black", cursor: "pointer" }} onClick={() => { console.log("on click is correct2"); localStorage.setItem("room", new String(note._id)); props.Chat(note) }}><small> <i className="fa fa-commenting" aria-hidden="true"> DISCUSS</i></small></h6>
                                    </div>


                            </div>

                        }



                    </div>
                </div>

            </div>
        </>
    )
}

export default Workcard