import React from "react";
import var1 from "./noteContext"
import { useState } from "react";
const NoteState = (props) =>{

  const host = "http://localhost:5000";
    const a = {
        "name" : "AKSHIT",
        "class" : "5D"
    }
 

const [employee, setemployee] = useState([]);


const notesInitial = [
]

const [mail, setmail] = useState("for exampel@gmail.com");


  const [notes, setnotes] = useState(notesInitial);
const getNotes = async ()=>{

    const response = await fetch( `${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        
       'authToken' :localStorage.getItem('token'),
      },
      
    });

const json = await response.json();
console.log("i am running");
setnotes(json);
}


const sendmail=async(hrs,min,sec)=>{
const response = await fetch(`${host}/api/scheduler/schedulesms`,{
  method:'GET',
  headers:{
    'Content-Type':'application/json',

    
   
  },
  body: JSON.stringify({hrs,min,sec})
});
const json = await response.json();
console.log(json);
}

const mailing=async(mail,subject,description)=>{
  
  const response = await fetch(`${host}/api/mail/sendmail`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
  
      
     
    },
    body: JSON.stringify({mail,subject,description})
   
  });
  const json = await response.json();
}








  //ADDING A NOTE 
  const addNote = async (title,description,tag)=>{

    console.log("PARAMETERS OF ADD NOTE"+title+" "+description+" "+tag);


    const response = await fetch( `${host}/api/notes/addnote`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
       'authToken' :localStorage.getItem('token'),
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
       'authToken' :localStorage.getItem('token'),
       
      },
      body: JSON.stringify()
    });
    const json = response.json();
    console.log("BECHARA DELETED HUA KA RESPONSE JSON ")
    console.log(json);
    





console.log("DELETING A NOTE WITH ID "+id)
const newNotes = notes.filter((note)=>{ return note._id!==id})
setnotes(newNotes);

  }







  //edit a note 
  const editNote  = async(id,title,description,tag)=>{
console.log("PARAMETERS in frontend ARE : "+id+title+description+tag);
    const response = await fetch( `${host}/api/notes/update/${id}`, {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json',
       'authToken' :localStorage.getItem('token'),
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









    const workInitial = []
    const [work, setwork] = useState(workInitial);


    const getAllWork = async ()=>{
      

        const response = await fetch( `${host}/api/sendwork/fetchallwork`, {
          method: 'GET',
          headers:{
            'Content-Type':'application/json',
            
           'authToken' :localStorage.getItem('token'),
          },
          
        });
      
      const json = await response.json();
      console.log("i am running");
      setwork(json);
      }






      const addWork = async (title,description,tag,epost,erank,empemail)=>{

        console.log("PARAMETERS OF ADD WORK "+title+" "+description+" "+tag+" "+epost+" "+erank+" "+empemail);
    
    
        const response = await fetch( `${host}/api/sendwork/addwork`, {
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
           'authToken' :localStorage.getItem('token'),
          },
          body: JSON.stringify({title,description,tag,epost,erank,empemail})
        });
    
        const json = response.json(title,description,tag,epost,erank,empemail);
        console.log("ADDED NOTE IS THIS "+json.title);
    
    
       
    
    
    
    
     const   wrk = json ;
    setwork(work.concat(wrk));
    
      }




      const deleteWork =async (id)=>{
        const response = await fetch( `${host}/api/sendwork/delete/${id}`, {
          method: 'DELETE',
          headers:{
            'Content-Type':'application/json',
           'authToken' :localStorage.getItem('token'),
           
          },
          body: JSON.stringify()
        });
        const json = response.json();
        console.log("BECHARA DELETED HUA KA RESPONSE JSON ")
        console.log(json);
        
      
      
      
      
      
      console.log("DELETING A NOTE WITH ID "+id)
      const newWork = work.filter((wrk)=>{ return wrk._id!==id})
      setwork(newWork);
      
      }






      const editWork  = async(id,title,description,tag,epost,erank,empemail)=>{
        console.log("PARAMETERS in frontend ARE : "+id+title+description+tag);
            const response = await fetch( `${host}/api/sendwork/update/${id}`, {
              method: 'PUT',
              headers:{
                'Content-Type':'application/json',
               'authToken' :localStorage.getItem('token'),
              },
        
        
             
              
              body: JSON.stringify({id,title,description,tag,epost,erank,empemail})
            });
            const json = response.json(id,title,description,tag);
            console.log("KYA TUM PROMISE HO")
            console.log(json);
            
            
            for (let index = 0; index < work.length; index++) {
              const element = work[index];
              console.log("ALL OK ");
              if(element._id === id){
                work[index].title=title;
                work[index].description=description;
                work[index].tag=tag;
                work[index].epost=epost;
                work[index].erank=erank;
                work[index].empemail=empemail;
                
              }
              else{
                console.log("eroooor ");
              }
               
            }
            console.log("YEH HUA H UPDATION MAI work ")
            console.log(work);
            const newwork = work;
            setwork(newwork);
            
            
            }



            const getAllEmp = async (epostFind)=>{
      

              const response = await fetch( `${host}/api/sendwork/fetchallepm`, {
                method: 'PUT',
                headers:{
                  'Content-Type':'application/json',
                  
                 'authToken' :localStorage.getItem('token'),
                },
                body: JSON.stringify({epostFind})
              });
            
            const json = await response.json();
            console.log("i am running");
            console.log(json);
            setemployee(json);
            }
       








//user database is there ----> do update database required:true , default :sde , as emppost 
//update fetch employee api 
//do add my work databse calls complete my-work component  with  chats 
// at home resolve jodit error 
//make work distributer routes 
//add profile section 
//resolve alarm component 
//add other requests to make app informative 
//add styling and deploy 


    return (

        <var1.Provider value={{a,employee,setemployee,notes,getAllEmp,setnotes,addNote,deleteNote,editNote,getNotes,mail,setmail,mailing,addWork,deleteWork,editWork,getAllWork,work,setwork}}>
            {props.children}
        </var1.Provider>
    )
}

export default NoteState;