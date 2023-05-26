// import React,{useEffect} from 'react'
// import NoteItem from './NoteItem';
// function NotesUpdate(props) {
//     var notes = props.notes ;
//     const deleteNote = props.deleteNote;

//   const updateNotes = props.updateNotes;
//   const Func=()=> {
//     // {notes.length===0  && `NO PENDING WORK ` }
//     {notes.map((notes) => {
//       return <NoteItem key={notes._id} cloured="true" notes={notes} updateNotes={updateNotes} deleteNote={deleteNote} option="true" />;
//     })}
//   }
//   useEffect(() => {
    
//   Func();
   
//   }, [notes])
  
//   return (
//     <>
        
//       <div className="row" >  
        
//        {Func()}
//       </div> 
//     </>
//   )
// }

// export default NotesUpdate ;





















// import React, { useEffect } from 'react';
// import NoteItem from './NoteItem';

// function NotesUpdate(props) {
//   var notes = props.notes;
//   const deleteNote = props.deleteNote;
//   const updateNotes = props.updateNotes;

//   const Func = () => {
//     return notes.map((note) => (
//       <NoteItem
//         key={note._id}
//         cloured="true"
//         notes={note}
//         updateNotes={updateNotes}
//         deleteNote={deleteNote}
//         option="true"
//       />
//     ));
//   };

//   useEffect(() => {
//     // Func();
//   }, [notes]);

//   return (
//     <>
//      <div className="row" >  
        
//         {notes.length===0  && `NO PENDING WORK ` }
//         {notes.map((notes) => {
//           return <NoteItem key={notes._id} cloured="true" notes={notes} updateNotes={updateNotes} deleteNote={deleteNote} option="true" />;
//         })}
//       </div>  
//     </>
//   );
// }

// export default NotesUpdate;



















import React from 'react';
import NoteItem from './NoteItem';

function NotesUpdate(props) {
  var notes = props.notes;
  const deleteNote = props.deleteNote;
  const updateNotes = props.updateNotes;

  return (
    <>
      {/* <div className="row">
        {notes.length === 0 ? (
          <p>NO PENDING WORK</p>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note._id}
              cloured="true"
              notes={note}
              updateNotes={updateNotes}
              deleteNote={deleteNote}
              option="true"
            />
          ))
        )}
      </div> */}
    </>
  );
}

export default NotesUpdate;

