import React from "react";
import var1 from "./noteContext"
import { useState } from "react";
const NoteState = (props) =>{

  const host = "http://localhost:5000";
    const a = {
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
console.log("i am running");
setnotes(json);


 
  }







  //ADDING A NOTE 
  const addNote = async (title,description,tag)=>{

    console.log("PARAMETERS OF ADD NOTE"+title+" "+description+" "+tag);


    const response = await fetch( `${host}/api/notes/addnote`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
       'authToken' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNTUwYWYwZmE3ZjM3YzFjYWQ5NzZiIn0sImlhdCI6MTY3MjkxMTM0Mn0.Uu4rAhHcDL2Pnj0-5CNQBt7jT7eL61oFx-FZvkM36a0'
      },
      body: JSON.stringify({title,description,tag})
    });

    const json = response.json(title,description,tag);
    console.log("ADDED NOTE IS THIS "+json.title);






 const   note= json ;
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
    console.log("BECHARA DELETED HUA KA RESPONSE JSON ")
    console.log(json);
    





console.log("DELETING A NOTE WITH ID "+id)
const newNotes = notes.filter((note)=>{ return note._id!==id})
setnotes(newNotes)
  }







  //edit a note 
  const editNote  = async(id,title,description,tag)=>{
console.log("PARAMETERS in frontend ARE : "+id+title+description+tag);
    const response = await fetch( `${host}/api/notes/update/${id}`, {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json',
       'authToken' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNTUwYWYwZmE3ZjM3YzFjYWQ5NzZiIn0sImlhdCI6MTY3MjkxMTM0Mn0.Uu4rAhHcDL2Pnj0-5CNQBt7jT7eL61oFx-FZvkM36a0'
      },


     
      
      body: JSON.stringify({id,title,description,tag})
    });
    const json = response.json(id,title,description,tag);
    console.log("KYA TUM PROMISE HO")
    console.log(json);
    
    
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      console.log("ALL OK ");
      if(element._id === id){
        notes[index].title=title;
        notes[index].description=description;
        notes[index].tag=tag;
        
      }
      else{
        console.log("eroooor ");
      }
       
    }
    console.log("YEH HUA H UPDATION MAI NOTES ")
    console.log(notes);
    const newNotes = notes;
    setnotes(newNotes);
    
    
    }


    return (

        <var1.Provider value={{a,notes,setnotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </var1.Provider>
    )
}

export default NoteState;