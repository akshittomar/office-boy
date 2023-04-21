import React, { useContext ,useState,useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import Alarm from '../components/Alarm';
import io from 'socket.io-client';
export default function Profile() {
  const context = useContext(noteContext);
  const notes = context.notes;
  const [image, setimage] = useState();
  const host = "http://localhost:5000";
  const socket = io();
  const getNotes = async ()=>{

    const response = await fetch( `${host}`, {
      method: 'GET'
     
      
    });

const json = await response.json();
console.log("/ get hogya "+json);
socket.on('connec', (data) => {
  window.alert("socket");
});
 
} 
  useEffect(() => { 
    getNotes();
    
    socket.on('connec', (data) => {
      window.alert("socket");
    });
  
   
  }, [])
  
  return (
    <>MY-PROFILR  WILL SHOW UP HERE 
    
    {notes.map((notes) => {
      
      return <Alarm key={notes._id} notes={notes}  show="false" />;
    })}
    
    <div className="mb-3 mx-3">
 
 <label htmlFor="Title" className="form-label"  >Project Name</label>
 <input type="file" className="form-control" id="Title" name="Title" onChange={(e)=>{setimage(e.target.files[0]);}}   />
<button className='btn btn-primary' onClick={console.log(image)}></button>
</div>
    
    
    
     </>
  )
}
