import React, { useContext,useEffect,useState,useRef} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from '../components/NoteItem';
import io from 'socket.io-client';
function  WorkItem(props) {

const ENDPOINT = "http://localhost:5000";
var socket = io(ENDPOINT);
var selectedChatCompare ;
    const context = useContext(noteContext);
    
    const [socketConnected, setsocketConnected] = useState(false);
    const msgRef = useRef(null);
    const {getTask} = context;
    const {task} = context;
    const {settask} = context;
    const { editWork } = context;
    const { getAllWork } = context;
    const {user}= context;

    const [first, setfirst] = useState([]);
    const [msg, setmsg] = useState([]);
    const [content, setcontent] = useState({ id: "", eTitle: "your title here", eDescription: "your description here ", eTag: "default", Upost: "Choose...", Urank: 0, Umail: "", Hrs: 0, Min: 0, Sec: 0, chat:"" });
    useEffect(() => {
      // socket = io(ENDPOINT);
    socket.on("messageReceived",(newMessage)=>{
      // setmsg(newMessage);
      // window.alert("putinder bolne lag gaya "+newMessage.chat);
      // var str = new String(newMessage.chat);
      // setmsg(str.split("\n\n"));

      // setcontent(newMessage);

      // settask(newMessage);



      const devi = document.createElement('div')
      const newChat = document.createElement('p');
      newChat.textContent = newMessage.chat;
      // devi.textContent = modalWork.chat;
      const style = {
        color: 'black',
        textAlign:'left',
        borderRadius:'10px',
        border: 'solid #ccc 1px',
        backgroundColor: 'white',
        fontFamily:'monospace',
        
        
       clear:'both',
       float:'left',
       maxWidth:'80%',
        // filter: drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15));
        // filter: "drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15))"
        

      };
      // Object.assign(newChat.style, style);
      Object.assign(devi.style, style);
      devi.classList.add('mx-0' ,'my-1' ,'py-1', 'px-1');
      // msgRef.current.appendChild(newChat);
      msgRef.current.appendChild(devi);
      devi.appendChild(newChat);


    

    })
   
    })
    
    useEffect(() => {
        setfirst(task);
      // getTask();
      // socket = io(ENDPOINT);
      socket.emit("setup",user);
      socket.on("connection",()=>{setsocketConnected(true);})
   
      if (msgRef.current) {
        msgRef.current.scrollTop = msgRef.current.scrollHeight;
      }
     
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
  
    setcontent({ id: note2._id, eTitle: note2.title, eDescription: note2.description, eTag: note2.tag, Upost: note2.Upost, Urank: note2.Urank, Umail: note2.Umail ,chat:""});
    var str = new String(note2.chat);
    setmsg(str.split("\n\n"));
    
   
  }
  // else{window.alert("send was clicked ");}
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
  editWork(content.id, content.eTitle, content.eDescription, content.eTag, content.Upost, erank, content.Umail,content.chat+'receiver');
  // localStorage.removeItem(s1);
  getAllWork();
  getTask();
  
  // socket = io(ENDPOINT);
  socket.emit("newMessage2",content);


  

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
                <button type="button" ref={refChat} className="btn btn-secondary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={()=>{
                  // socket = io(ENDPOINT );
  socket.emit("joinChat",content.id);}}  >
                  Discuss
                </button>



                <div className="modal fade" style={{ maxHeight: '80%', marginTop: '3%' }}id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" data-bs-keyboard="false" data-bs-backdrop="static" aria-hidden="true"   >
                  <div className="modal-dialog   modal-xl">
                    <div className="modal-content"  style={{ backgroundColor: 'white' ,   }}>
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel2">Chat Here <i className="fa fa-comments" aria-hidden="true"></i></h5>



                        <button type="button" className="btn-secondary btn  mx-3" onClick={() => { document.getElementById('myMSG').innerHTML = '';getTask(); }} data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i></button>


                      </div>
                      <div className="modal-body" style={{ overflowY: 'scroll' }} >
                        <form  onSubmit={e => e.preventDefault()} >
                        {msg.length===1 &&  <h3 style={{color:'grey'}}>Nothing To Show<i className="fa fa-deaf" aria-hidden="true"></i></h3> }
                        {   msg.length!==1 && msg.map((chat)=>{
                           if(chat.length!==0){
                    var str = new String(chat);
                    // var compar = new String(localStorage.getItem('mail'));
                    // var compar = new String(modalWork.Umail);
                    // str+=compar;
                    // var compar = new String(modalWork.Umail);
                    if(str.endsWith('receiver')){
                      return<div style={{ border: 'solid #ccc 1px', backgroundColor: '#00b2ff' ,fontSize:'100%', fontFamily:'revert-layer',borderRadius:'10px',textAlign:'right',float:'right',clear:'both', }}  className='mx-0 my-1 px-2 py-0 ' > <p style={{color: 'white',width: '-webkit-fill-available'}} >{str.substring(0,str.length-8)}</p> </div>
                      
                    }
                    else{ 
                      return<div style={{ border: 'solid #ccc 1px', backgroundColor: 'white',fontFamily:'monospace',float:'left',clear:'both',borderRadius:'10px',maxWidth:'80%'}}  className='mx-0 my-1 py-1 px-1' > <p style={{color:'black'}} >{str.substring(0,str.length-6)}</p> </div>
                    }
                  }
                  })
                  
                  
                  }   <div className='mx-1 my-4' id='myMSG' ref={msgRef} > </div>
                   <label htmlFor="chat" className="form-label "  ></label>
                        <input type='text' name='chat' className="form-control " id='chat' onChange={handelChat}  placeholder='Start Typing....'  value={content.chat} minLength={1} required></input>



                        <button type="button" className="btn btn-primary my-2" onClick={(e) => {
                  sendChat(e);
                  // document.getElementById('chat').innerText = '';
                  const devi = document.createElement('div')
                  const newChat = document.createElement('p');
                  newChat.textContent = content.chat;
                  // devi.textContent = modalWork.chat;
                  const style = {
                    color: 'white',
                    textAlign:'right',
                    borderRadius:'10px',
                    border: 'solid #ccc 1px',
                    backgroundColor: '#00b2ff',
                    fontFamily:'revert-layer',
                    marginTop: '2px',
                    paddingRight:'4px',
                   clear:'both',
                   float:'right',
                   maxWidth:'80%',
                    // filter: drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15));
                    // filter: "drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15))"
                    

                  };
                  // Object.assign(newChat.style, style);
                  Object.assign(devi.style, style);
                  devi.classList.add('mx-0' ,'my-1' ,'py-1' ,'px-1');
                  // msgRef.current.appendChild(newChat);
                  msgRef.current.appendChild(devi);
                  devi.appendChild(newChat);

                  setcontent(prevState => ({ ...prevState, chat: "" }));
                }} disabled={  content.chat === "" } ><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>


                        </form>
                      </div>
                      {msg.length > 10 &&  <div className=' position-fixed my-5 ' style={{border:'solid grey 0px'}}  >
                <a href='#exampleModalLabel2' ><i style={{ color: 'grey', fontSize: '90%' }} className="fa fa-arrow-circle-up" aria-hidden="true"></i></a><br />

                <a href='#chat' ><i style={{ color: 'grey', fontSize: '90%' }} className="fa fa-arrow-circle-down" aria-hidden="true"></i></a> </div> }


                      <div className="modal-footer">
                        <button type="button" ref={refCloseChat} className="btn btn-secondary" data-bs-dismiss="modal"   onClick={() => { document.getElementById('myMSG').innerHTML = '';getTask(); }} >Close <i className="fa fa-times" aria-hidden="true"></i></button>
                       
                      </div>
                    </div>
                  </div>
                </div>

              </div>
     
    </div>
  )
}

export default WorkItem