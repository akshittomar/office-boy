import React, { useContext,useEffect,useState,useRef} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from '../components/NoteItem';

function WorkItem() {


    const context = useContext(noteContext);
    
    const {getTask} = context;
    const {task} = context;
    const { editWork } = context;
    const { getAllWork } = context;

    const [first, setfirst] = useState([]);
    const [msg, setmsg] = useState('Start Chating');
    const [content, setcontent] = useState({ id: "", eTitle: "your title here", eDescription: "your description here ", eTag: "default", Upost: "Choose...", Urank: 0, Umail: "", Hrs: 0, Min: 0, Sec: 0, chat: "" });
    useEffect(() => {
        setfirst(task);
      // getTask();
   
      
     
    }, [task,msg])

    const handelChat=(e)=>{
      setcontent({ ...content, [e.target.name]: e.target.value })
    }

   
    
const refChat = useRef(null);

const refCloseChat = useRef(null);


const updateChat=(note2)=>{
  console.log("notes");
  console.log("title"+note2.description);
  
  if(note2){refChat.current.click();
  
    setcontent({ id: note2._id, eTitle: note2.title, eDescription: note2.description, eTag: note2.tag, Upost: note2.Upost, Urank: note2.Urank, Umail: note2.Umail ,chat:note2.chat});
      setmsg(note2.chat);
  }
  else{window.alert("send was clicked ");}
}



const sendChat = (e) => {
  e.preventDefault();
  // setnote(note._id,note.eTitle,note.eDescription,note.eTag);
  // setnote({...note, [e.target.name]:e.target.value})
  // setnote({...note, [note.name]:note.value})
  var erank = 0;
  switch (content.Upost) {
    case "Analyst":
      erank = 1;
      break;
    case "Senior Analyst":
      erank = 2;
      break;
    case "DevOps Engineer":
      erank = 4;
      break;
    case "React Developer":
      erank = 3;
      break;
    case "SDE":
      erank = 5;
      break;
    default:
      break;
  }

  // var s1 = dummy.Title + "sec";
  // var s2 = dummy.Title + "min";
  // var s3 = dummy.Title + "hrs";
  // localStorage.removeItem(s1);
  // localStorage.removeItem(s2);
  // localStorage.removeItem(s3);
  editWork(content.id, content.eTitle, content.eDescription, content.eTag, content.Upost, erank, content.Umail,content.chat);
  // localStorage.removeItem(s1);
  

  getAllWork()
  

}




  return (
    <div>
        
        <div className='row'>
         {first &&  first.length === 0 && `NO PENDING PROJECT `}
        {first.map((todo) => {
          return <NoteItem key={todo._id} notes={todo} cloured="false" option="false" Chat={updateChat} />;
        })} 
        
      </div>
       <div  >
                <button type="button" ref={refChat} className="btn btn-secondary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal2"   >
                  Discuss
                </button>



                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true"   >
                  <div className="modal-dialog  ">
                    <div className="modal-content"  style={{backgroundImage:`url(${"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No_Treason%2C_v6.djvu/page2-360px-No_Treason%2C_v6.djvu.jpg"})`}}>
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel2">Chat Here</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form  onSubmit={e => e.preventDefault()} >
                          {msg}
                      <label htmlFor="chat" className="form-label"  ></label>
                        <input type='text' name='chat' className="form-control" id='chat' onChange={handelChat}  placeholder='Start Typing....'  minLength={1}></input>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" ref={refCloseChat} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={sendChat} >Send</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
     
    </div>
  )
}

export default WorkItem