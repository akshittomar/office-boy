import React, { useContext,useEffect,useState} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from '../components/NoteItem';

function WorkItem() {


    const context = useContext(noteContext);
    
    const {getTask} = context;
    const {task} = context;

    const [first, setfirst] = useState([]);
    useEffect(() => {
        setfirst(task);
      // getTask();
    
     
    }, [task])
    
  return (
    <div>
        
        <div className='row'>
         {first &&  first.length === 0 && `NO PENDING PROJECT `}
        {first.map((todo) => {
          return <NoteItem key={todo._id} notes={todo} cloured="false" option="false" />;
        })} 
        
      </div>
    </div>
  )
}

export default WorkItem