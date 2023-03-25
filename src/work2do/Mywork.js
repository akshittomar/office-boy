import React, { useContext,useEffect ,useState} from 'react'
import noteContext from "../context/notes/noteContext"
import Alarm from '../components/Alarm';
import NoteItem from '../components/NoteItem';
export default function Mywork() {
  const context = useContext(noteContext);
  const notes = context.notes;
  
  //yahan pr uppdate call is send chat I think so 
  //update call ---> update user database with message sent and update work distributer database as well 
  //update is send chat 
  // delete chat --->   not availabel 


const [todo, settodo] = useState();//set my todo's array 

  useEffect(() => {
    
  // getmywork();//get  all pending work ;
    
  }, [] )
  

  const update=()=>{
    
  }
  
  
  return (


    <>


<h1>MY PENDING PROJECTS:</h1>

{/* {
  todo.map(todo){
    <>
    <NoteItem   title={todo.titel} description={todo.description}  ></NoteItem>
    <button className='btn btn-primary'>Work Completed</button>
    <button className='btn btn-primary'>EXTEND MY DEADLINE </button>

</>
  }
} */}



    <div>Mywork{notes.map((notes) => {
      
      return <Alarm key={notes._id} notes={notes}  show="false" />;
      })} </div>

</>
  )
}
