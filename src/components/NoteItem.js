
import React, { useState } from 'react'
// import { Beforeunload } from 'react-beforeunload';

import Alarm from './Alarm';

// import Chat from '../chat/Chat';
// import AOS from 'aos'
// import 'aos/dist/aos.css'


export default function NoteItem(props) {


// const [chat, setchat] = useState("");




  const note = props.notes;

  const deleteNote = props.deleteNote;

  const updateNote = props.updateNotes;

const chatFunc = props.Chat;



  // const Delay=()=>{
  //     return <><Time  hrs={hh} min={mm} sec={ss} sethh={sethh} setss={setss} setmm={setmm} ></Time></>
  // }

 // useEffect(() => {
  //     AOS.init({ 
  //     //   animatedClassName: 'aos-animate',
  //       duration: 1000,
  //       anchorPlacement: 'top-bottom',

  //     });


  //   }, [])

  // useEffect(() => {


  //     return () => {
  //       {
  //           <div className="d-flex justify-content-center">
  //            ( note.hrs!==0 || note.min!==0 || note.sec!==0 )&&  <h6><Time  hrs={note.hrs} min={note.min} sec={note.sec}  title={note.title}></Time></h6></div>  }
  //     }
  //   }, []) 

//    useEffect(() => {


  //      return () => {


  //         window.onbeforeunload =()=>
  //         {
  //             setTimeout(() => {
  //                 window.alert("refreshing");        
  //             }, 1000);
  //         //  window.confirm("Confirm refresh");
  //         window.alert("refreshing");
  //         // console.log("refreshing page");


  //         };

  //      }
  //    }, [])











  return (
    // <div className="col-md-3 my-4 mx-3 "    data-aos="zoom-in-up" >
    <div className="col-md-3 my-4 mx-3 card-deck"     >
      <div className="card my-4  " style={{ width: "50vp" }}>

        <div className="card-body  ">

          <div className='d-flex  '>
            <h2 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><u><strong>Title:</strong></u><br /><i>{note.title}</i></h2>

          </div>
          <hr />
          {props.cloured === "true" ? <h3 className="card-text container overflow-auto" style={{ height: "15vh" }} ><u><strong>Description:</strong></u><br />{note.description}</h3> : <><h3 className="card-text container" ><u><strong>Description:</strong></u><br /><div dangerouslySetInnerHTML={{ __html: note.description }} ></div></h3>


          </>

          }
          <br />

          {
            // <div className=" card-footer d-flex justify-content-between container" > original it was like this 
            <div className=" card-footer d-flex  " style={{ maxWidth: "45vp" }} >
              {/* <div className="d-flex justify-content-center container"> */}
              {props.option === "true" && <div className='container'>
                <h6 style={{ color: "black", cursor: "pointer" }} onClick={() => {
                  var s1 = note.title + "sec";
                  var s2 = note.title + "min";
                  var s3 = note.title + "hrs"; localStorage.removeItem(s1);
                  localStorage.removeItem(s2);
                  localStorage.removeItem(s3); deleteNote(note._id)
                }} ><i className="fa-solid fa-trash    " ></i></h6>
              </div>
                }
              {/* <div className=" card-footer d-flex justify-content-between " >
                                  <Beforeunload onBeforeunload={
                                
                                
                                () => alert('You will lose your data!') }>
                                  <h6><Delay></Delay></h6>
                                    </Beforeunload>
                                
                                  </div> */}



              {

                              props.option === "true" && <div className='container' > <Alarm key={note._id} notes={note} show="true" /></div>
              }

             { props.option === "true" && <div className=" container">
                <h6 style={{ color: "black", cursor: "pointer" }} onClick={() => { updateNote(note);  }}  ><i className="fa-solid fa-file-pen sm  " onClick={() => { updateNote(note) }}></i></h6>
              </div>}

              
              
              
              { props.cloured==="false" && 
              <div className='container'>
              <h6 style={{ color: "black", cursor: "pointer" }}  onClick={()=>{console.log("on click is correct2");props.Chat(note)}}><small> <i className="fa fa-commenting" aria-hidden="true"></i></small></h6>
             </div>}

{/* we have to make a <input> tag to take text as input with just a simpel button to send chat 
chat k liye ek state varibel chat,setchat 
<input> tag pe onchange 
button pe onClick 
onClick pe update api call mardo same vhi purane walli api 
this text state variabel content will be comman between distributer and myWork 
remember every chat will be unique between 
bhai workDistributer mai bas add hogi chat 
we will retreive these chats from workDistributer as we are retreiving all tasks .
and task mai message bhejna is alzso an uppdate call of workDistributer 



*/}




            </div>

          }



        </div>
      </div>

    </div>
  )
}

