import React, { useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import WorkItem from './WorkItem';

function Work() {
    const context = useContext(noteContext);
    const {getUser} = context;
    const {user}= context;
    const {getTask} = context;
    const {mail} = context;

useEffect(() => {
 getUser();
console.log(user.name);
  getTask();
}, [])


  return (
    <div>{user.name}<br/>
    {user.email}<br/>
    {user.epost}<br/>
    {user.doj}<br/>
    {mail}<br/>
    {localStorage.getItem('mail')}
    <div>
        {/* {getTask(user.email)} */}
        <WorkItem/>
    </div>
    </div>
  )
}

export default Work