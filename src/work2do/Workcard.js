import React, { useEffect } from 'react'
import Alarm from '../components/Alarm'
function Workcard(props) {

    const note = props.notes;

    const deleteNote = props.deleteNote;
    const updateNote = props.updateNotes;

    const chatFunc = props.Chat;

    useEffect(() => {



    }, [note])

    return (
        <>
            <div className="col-md-3 my-4 mx-3 card-deck"     >
                <div className="card my-4  " style={{ width: "50vp" }}>
                    <div className="card-header">

                     PROJECT UNDER :   {note.epost + " " + note.name}

                    </div>
                    <div className="card-body  ">

                        <div className='d-flex  '>
                            <h2 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><u><strong>Title:</strong></u><br /><i>{note.title}</i></h2>

                        </div>
                        <hr />
                         <div><h3 className="card-text container" ><u><strong>Description:</strong></u><br /><div dangerouslySetInnerHTML={{ __html: note.description }} ></div></h3>

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