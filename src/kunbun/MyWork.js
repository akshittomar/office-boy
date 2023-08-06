// import React , { useContext, useRef, useState, useEffect }from 'react'
// import noteContext from "../context/notes/noteContext";
// import image from "./done.jpg";
// function MyWork() {
//      const context = useContext(noteContext);
//      const notes = context.notes ;
//      const getNotes = context.getNotes ;
//      useEffect(() => {
      
//     getNotes();
     
//      }, [])
//   return (
//     <>
//     {
//         notes.map((note,index)=>{
//             return <tr>
                
// <td style={{color:"grey",wordBreak:"break-all"}}>{index++ +1 } {note.title}</td>
//             </tr>;
//         })
//     }
//      {notes.length === 0 &&<div style={{ backgroundColor: "white" }}  ><img className='' 
//         style={{ borderColor: "white", width: "50%", marginLeft: "20%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
//         className='mx-5 my-5' > NO TODO FOUND</h5><br/></div> }
//     </>
//   )
// }

// export default MyWork






import React, { useContext, useState, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import image from './done.jpg';
import Spinner from '../Spinner.gif';

function MyWork() {
  const context = useContext(noteContext);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state

  const notes = context.notes;
  const getNotes = context.getNotes;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await getNotes();
        setLoading(false); // Step 3: Update loading state to false after data is fetched
      } catch (error) {
        // Handle errors here
        console.error(error);
        setLoading(false); // Ensure loading is updated even in case of errors
      }
    };

    fetchData();
  }, []);

 

  return (
    <>
      {
    // Step 2: Render a loading state while the data is being fetched
    loading === true && <img src={Spinner}></img>
  
  }
      {loading===false&&notes.map((note, index) => {
        return (
          <tr key={note._id}>
            <td style={{ color: 'grey', wordBreak: 'break-all' }}>
              {index + 1} {note.title}
            </td>
          </tr>
        );
      })}
      {notes.length === 0 && loading === false &&
        <div style={{ backgroundColor: 'white' }}>
          <img
            className=''
            style={{ borderColor: 'white', width: '50%', marginLeft: '20%' }}
            src={image}
            alt=''
          />
          <br />
          <h5
            style={{ fontFamily: 'cursive', color: '#7289c4' }}
            className='mx-5 my-5'
          >
            NO TODO FOUND
          </h5>
          <br />
        </div>
      }
    </>
  );
}

export default MyWork;
