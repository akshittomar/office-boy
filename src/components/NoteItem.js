import React, { useContext,useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Time from './Time';
// import AOS from 'aos'
// import 'aos/dist/aos.css'


export default function NoteItem(props) {


    const Delay=()=>{
        return <><Time  hrs={note.hrs} min={note.min} sec={note.sec}  title={note.title}></Time></>
    }
useEffect(() => {


 Delay();
}, [])





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
    

  
    


    const note = props.notes;
    const context = useContext(noteContext);
   const {deleteNote}= context ;
   const updateNote = props.updateNotes;
    return (
        // <div className="col-md-3 my-4 mx-3 "    data-aos="zoom-in-up" >
            <div className="col-md-3 my-4 mx-3 "     >
            <div className="card my-4  " >

                <div className="card-body ">
                  
                    <div className='d-flex align-items-center '>
                    <h2 className="card-title container"><u><strong>Title:</strong></u><br/><i>{note.title}</i></h2>
                    
                    </div>
                    <hr/>
                    <h3 className="card-text container"><u><strong>Description:</strong></u><br/>{note.description}</h3>
                    <br/>


                    <div className=" card-footer d-flex justify-content-between " >
                        
                            <div className="d-flex justify-content-center">
                  <h6>Delete <i className="fa-solid fa-trash    " onClick={()=>{deleteNote(note._id)}}></i></h6>  
                  </div>
                  
                  <div className=" card-footer d-flex justify-content-between " >
                 <h6><Delay></Delay></h6>
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

