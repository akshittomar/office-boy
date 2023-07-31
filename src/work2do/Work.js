import React, { useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import WorkItem from './WorkItem';
import image from './imgg1.jpg';
import image2 from './imgg2.jpg';
import image3 from './img4.jpg';
import { useNavigate } from 'react-router-dom';
function Work() {
    const context = useContext(noteContext);
    const {getUser} = context;
    const {user}= context;
    const {getTask} = context;
    const {mail} = context;
    let navigate = useNavigate();

useEffect(() => {
  if (!localStorage.getItem('token')) {
    navigate("/login");

  }else{
 getUser();
console.log(user.name);
  getTask();}
}, [])


  return (
    <>
   






    <div>
        
        <WorkItem user={user} />
    </div>
    </>
  )
}

export default Work