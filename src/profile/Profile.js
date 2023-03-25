import React, { useContext ,useState} from 'react'
import noteContext from "../context/notes/noteContext"
import Alarm from '../components/Alarm';

export default function Profile() {
  const context = useContext(noteContext);
  const notes = context.notes;
  const [image, setimage] = useState();
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
