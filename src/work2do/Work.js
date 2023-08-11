import React, { useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import WorkItem from './WorkItem';
import Alarm from '../components/Alarm'


import { useNavigate } from 'react-router-dom';
function Work() {
    const context = useContext(noteContext);
    const {getUser} = context;
    const {user}= context;
    const {getTask} = context;
    const notes = context.notes;
    let navigate = useNavigate();

useEffect(() => {
  if (!localStorage.getItem('token')) {
    navigate("/sign-up");

  }else{
 getUser();
//console.log(user.name);
  getTask();}
}, [])


  return (
    <>
   
   { localStorage.getItem('token') && notes.map((notes) => {
          return <Alarm key={notes._id} notes={notes} show="false" />;
        })} 





    <div>
        
        <WorkItem user={user} />
    </div>
    </>
  )
}

export default Work