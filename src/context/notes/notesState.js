import React from "react";
import var1 from "./noteContext"
import { useState } from "react";
const NoteState = (props) =>{

  const host = "http://localhost:5000";
    const state = {
        "name" : "AKSHIT",
        "class" : "5D"
    }





const notesInitial = [
]





  const [notes, setnotes] = useState(notesInitial);



  const getNotes = async ()=>{

    


    const response = await fetch( `${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
       'authToken' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNTUwYWYwZmE3ZjM3YzFjYWQ5NzZiIn0sImlhdCI6MTY3MjkxMTM0Mn0.Uu4rAhHcDL2Pnj0-5CNQBt7jT7eL61oFx-FZvkM36a0'
      },
      
    });

    



const json = await response.json();
setnotes(json);


 
  }







  //ADDING A NOTE 
  const addNote = async (title,description,tag)=>{

    


    const response = await fetch( `${host}/api/notes/addnote`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
       'authToken' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNTUwYWYwZmE3ZjM3YzFjYWQ5NzZiIn0sImlhdCI6MTY3MjkxMTM0Mn0.Uu4rAhHcDL2Pnj0-5CNQBt7jT7eL61oFx-FZvkM36a0'
      },
      body: JSON.stringify(title,description,tag)
    });

    const json = response.json(title,description,tag);
    console.log(json);






 const   note= {
        "_id": "63b7f210e227d8rrrffffrdd4fddf5b5eac8"+Date.now(),
        "user": "63b550af0fa7f37c1cad976b",
        "title": title,
        "description": description,
        "tag": "profeesional",
        "time": tag,
        "alarmTime": "6",
        "shareEmail": "kjdfgkljgdlkj@sggmail.com",
        "date": "2023-01-06T10:04:00.130Z",
        "__v": 0
      }
setnotes(notes.concat(note));
  }











  //deleting a note 
  const deleteNote =async (id)=>{





    const response = await fetch( `${host}/api/notes/delete/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json',
       'authToken' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNTUwYWYwZmE3ZjM3YzFjYWQ5NzZiIn0sImlhdCI6MTY3MjkxMTM0Mn0.Uu4rAhHcDL2Pnj0-5CNQBt7jT7eL61oFx-FZvkM36a0'
      },
      body: JSON.stringify()
    });
    const json = response.json();
    console.log(json);
    





console.log("DELETING A NOTE WITH ID "+id)
const newNotes = notes.filter((note)=>{ return note._id!==id})
setnotes(newNotes)
  }







  //edit a note 
  const editNote  = async(id,Title,Description,Tag)=>{

    const response = await fetch( `${host}/api/notes/update/${id}`, {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json',
       'authToken' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNTUwYWYwZmE3ZjM3YzFjYWQ5NzZiIn0sImlhdCI6MTY3MjkxMTM0Mn0.Uu4rAhHcDL2Pnj0-5CNQBt7jT7eL61oFx-FZvkM36a0'
      },



      
      body: JSON.stringify()
    });
    const json = response.json(Title,Description,Tag);
    console.log(json);
    
    
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        notes[index].title=Title;
        notes[index].description=Description;
        notes[index].tag=Tag;
      }
       break;
    }
    
    setnotes(notes);
    
    
    }


    return (

        <var1.Provider value={{state,notes,setnotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </var1.Provider>
    )
}

export default NoteState;