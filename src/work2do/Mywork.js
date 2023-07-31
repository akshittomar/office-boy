import React, { useContext, useEffect, useState ,useCallback} from 'react';
import noteContext from '../context/notes/noteContext';
import Alarm from '../components/Alarm';
import NoteItem from '../components/NoteItem';
export default function Mywork() {
  const [user, setUser] = useState({ name: '', email: '', epost: '', doj: '' });
  const initial = [] ;
  const [todo, setTodo] = useState(initial);
  const context = useContext(noteContext);
  const notes = context.notes;
  
  const [first, setfirst] = useState('');
  
  const getUser = useCallback( async () => {
    const response = await fetch(`https://office-boy-backend.onrender.com/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('token'),
      },
    });
    const json1 = await response.json();
    
  const  user =     { name: json1.name, email: json1.email, epost: json1.epost, doj: json1.date };
  console.log('user is this ' + user.name);
  setUser(user);
  return  user;  
  },[])

  const getTask =  useCallback(async () => {
    const response = await fetch(`https://office-boy-backend.onrender.com/api/sendwork/fetchalltask`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('token'),
      },
      body: JSON.stringify({ taskFind: user.email }),
    });
    const json = await response.json();
    console.log(json);
    setTodo(json);
    // return json ;
  },[])




  useEffect(() => {
    getUser().then(setUser);
    setfirst('jj');
    console.log("is user clear"+user.name);


   
setfirst('pp');
getTask().then(setTodo);
setfirst('pp');
  }, [first,getTask,getUser]);

  return (
    <div>
      <h1>MY PENDING PROJECTS:</h1>

      <div>
        Mywork
        {notes.map((notes) => {
          return <Alarm key={notes._id} notes={notes} show="false" />;
        })}
      </div>

      <div className='row'>
         {todo &&  todo.length === 0 && `NO PENDING PROJECT `}
        {todo && todo.map((todo) => {
          return <NoteItem key={todo._id} notes={todo} cloured="false" option="false" />;
        })} 
      </div>
    </div>
  );
}
