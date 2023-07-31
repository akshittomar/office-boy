import React, { useEffect,useContext } from 'react'
import Alarm from '../components/Alarm'
import img from '../work2do/img3.avif';
import noteContext from '../context/notes/noteContext';
function Workcard(props) {
    const context = useContext(noteContext);
    const notes = context.notes;
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
         {notes.map((notes) => {
          return <Alarm key={notes._id} notes={notes} show="false" />;
        })}
        
            <div className="col-md-3 my-4 mx-4 card" style={headingStyle}    >
                <div className="card my-4 shadow-lg  bg-body-tertiary rounded " style={{ width: "50vp" }}>
                    <div className="card-header " style={{fontFamily:"serif"}}>

                     <u>ASSIGNED BY: <i className="fa-solid fa-briefcase"></i></u> {note.epost}&nbsp;<i className="fa-solid fa-id-card-clip"></i> {note.name}

                    </div>
                    <img class="card-img-top" src={img} style={{backgroundSize:"50%"}} alt="Card image cap"></img>
                    <div className="card-body  ">

                        <div className='d-flex  '>
                            <h6 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><strong>Topic&nbsp;<i className="fa-solid fa-book-open fa-sm"></i></strong><br /><i>{note.title}</i></h6>

                        </div>
                      
                         <div><h6 style={{ height: "10vh" }} className="card-text container overflow-auto" ><strong>Work <i className="fa-sharp fa-solid fa-briefcase"></i></strong><div dangerouslySetInnerHTML={{ __html: note.description }} ></div></h6>

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