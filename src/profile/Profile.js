import React, { useContext ,useState,useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import Alarm from '../components/Alarm';

export default function Profile() {
  const context = useContext(noteContext);
  const notes = context.notes;
  const {user}= context; const accomp= context.accomp;
  const {getUser} = context;
  const {getAccomp} = context;
 
  useEffect(() => { 
    
    
   getUser();
   getAccomp();
  
   
  }, [])
  
  return (
    <div>MY-PROFILR  WILL SHOW UP HERE 
    
    {notes.map((notes) => {
      
      return <Alarm key={notes._id} notes={notes}  show="false" />;
    })}
    
   
    <div>{user.name}<br/>
    {user.email}<br/>
    Post:{user.epost}<br/>
    DOJ:{user.doj}<br/>
    {}<br/></div>
    

    {accomp.map((acc,index) => {
          return 
        
<div className='mt-3 '>
<t style={{color:"grey"}}>{index++ +1 } {acc.title}</t>
</div>;


        })}
    
     </div>
  )
}
