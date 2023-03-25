import React, {  } from 'react'
// import { Beforeunload } from 'react-beforeunload';

import Alarm from './Alarm';


// import AOS from 'aos'
// import 'aos/dist/aos.css'


export default function NoteItem(props) {

  
  


  const note = props.notes;
  
  const  deleteNote  = props.deleteNote;

  const updateNote = props.updateNotes;





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
    <div className="col-md-3 my-4 mx-3 "     >
      <div className="card my-4  " >

        <div className="card-body ">

          <div className='d-flex align-items-center '>
            <h2 className="card-title container"><u><strong>Title:</strong></u><br /><i>{note.title}</i></h2>

          </div>
          <hr />
        {props.cloured==="true" ? <h3 className="card-text container" ><u><strong>Description:</strong></u><br />{note.description}</h3> : <><h3 className="card-text container" ><u><strong>Description:</strong></u><br /><div dangerouslySetInnerHTML={{__html:note.description}} ></div></h3>
        
        
        </>
        
        }  
          <br />


          <div className=" card-footer d-flex justify-content-between container" >

            <div className="d-flex justify-content-center container">
              <h6 style={{ color: "black", cursor: "pointer" }} onClick={() => {
                var s1 = note.title + "sec";
                var s2 = note.title + "min";
                var s3 = note.title + "hrs"; localStorage.removeItem(s1);
                localStorage.removeItem(s2);
                localStorage.removeItem(s3); deleteNote(note._id)
              }} >Delete <i className="fa-solid fa-trash    " ></i></h6>
            </div>

            {/* <div className=" card-footer d-flex justify-content-between " >
                                  <Beforeunload onBeforeunload={
                                
                                
                                () => alert('You will lose your data!') }>
                                  <h6><Delay></Delay></h6>
                                    </Beforeunload>
                                
                                  </div> */}



{
      
      <Alarm key={note._id} notes={note} show="true" />
    }
            
            <div className="d-flex justify-content-center container">
              <h6 style={{ color: "black", cursor: "pointer" }} onClick={() => { updateNote(note) }}  >Edit <i className="fa-solid fa-file-pen sm  " onClick={() => { updateNote(note) }}></i></h6>
            </div>

          </div>





        </div>
      </div>

    </div>
  )
}

