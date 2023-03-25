import React, { useContext ,useRef,useState,useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import workContext from "../context/notes/ds"
import Alarm from '../components/Alarm';
import JoditEditor from 'jodit-react';
import NoteItem from '../components/NoteItem';



export default function Task() {
  const ref = useRef(null);
  const [content, setcontent] = useState('');
  const [post, setpost] = useState("");
  const [mail, setmail] = useState("");
  const refClose = useRef(null);
  // const [employee, setemployee] = useState([]);
  const context = useContext(noteContext);
  const wcontext = useContext(workContext);
  const [first, setfirst] = useState('true');
  const work = context.work;
  const notes = context.notes;
  const {addWork} = context;
  const {getAllWork} = context;
  const {getAllEmp} = context;
  const {employee} = context;
  const {editWork} = context;
  const host = "http://localhost:5000";
  
  const {deleteWork} = context;
  const editor = useRef(null);
  const [work2add, setwork2add] = useState({Title: "", Description: "" , Tag:"default",Epost:"",Empmail:"",Erank:0,Hrs:0,Min:0,Sec:0});


  const [modalWork, setmodalWork] = useState({id:"",eTitle: "your title here", eDescription: "your description here " , eTag:"default",Upost:"Choose...",Urank:0,Umail:"",Hrs:0,Min:0,Sec:0});
  const [dummy, setdummy] = useState({Title: ""});
  const [change, setchange] = useState(false);

  useEffect(() => {
    getAllWork();
    fetchWorker();
    setfirst("false");
    console.log("I AM IN USEFFECT "+post);
    
  }, [change,post,mail])
  

const handelClick= (e) =>{
  e.preventDefault();
  var erank = 0 ;
switch (post) {
  case "Analyst":
    erank=1;
    break;
  case "Senior Analyst":
    erank=2;
    break;
    case "DevOps Engineer":
      erank=4;
      break;
      case "React Developer":
        erank=3;
        break;
        case "SDE":
          erank=5;
          break;
  default:
    break;
}





  setchange(true);
   addWork(work2add.Title,content,work2add.Tag,post,work2add.Erank,mail);
  // addWork("sdsdsdsdsc","swdwsdwdwd","wdwsdswdwsdwsdwsd","SDE",5,work2add.Empmail.slice(work2add.Empmail.lastIndexOf(" "+1)));
  

if(work2add.Hrs!==0 || work2add.Min!==0 || work2add.Sec!==0){
var s1 = work2add.Title+"sec";
var s2 = work2add.Title+"min";
var s3 = work2add.Title+"hrs";
localStorage.setItem(s1,work2add.Sec.toString());
localStorage.setItem(s2,work2add.Min.toString());
localStorage.setItem(s3,work2add.Hrs.toString());}
setcontent('');
  setwork2add({Title: "", Description: "" , Tag:"default",Epost:"",Erank:0,Empmail:"",Hrs:0,Min:0,Sec:0});
  getAllWork();
  setchange(false);
}



const handelMail=(e)=>{
 
  setmail(e.target.value.slice(e.target.value.lastIndexOf(" ")+1));
}


const handelOnChange= (e) =>{
  
  setwork2add({...work2add, [e.target.name]:e.target.value})
 if(e.target.name==="Empmail")
  console.log(work2add.Empmail);
  }


  const handelModal= (e) =>{
    e.preventDefault(); 
    // setnote(note._id,note.eTitle,note.eDescription,note.eTag);
    // setnote({...note, [e.target.name]:e.target.value})
    // setnote({...note, [note.name]:note.value})
    var erank = 0 ;
    switch (modalWork.Upost) {
      case "Analyst":
        erank=1;
        break;
      case "Senior Analyst":
        erank=2;
        break;
        case "DevOps Engineer":
          erank=4;
          break;
          case "React Developer":
            erank=3;
            break;
            case "SDE":
              erank=5;
              break;
      default:
        break;
    }
    
    var s1 = dummy.Title+"sec";
    var s2 = dummy.Title+"min";
    var s3 = dummy.Title+"hrs";
    localStorage.removeItem(s1);
    localStorage.removeItem(s2);
    localStorage.removeItem(s3);
    editWork(modalWork.id, modalWork.eTitle,modalWork.eDescription,modalWork.eTag,modalWork.Upost,erank,modalWork.Umail);
    localStorage.removeItem(s1);
    // setnote(note._id,note.eTitle,note.eDescription,note.eTag);
    // setnote({...note, [e.target.name]:e.target.value})
    // setnote({...note, [note.name]:note.value})
    
     getAllWork()
     localStorage.removeItem(s1);
    refClose.current.click();
  }
  





  const updateModal =  (currentNotes) => {// responsibel to update id & eTitle & eDescription iske parameters mai jo currentNotes mille hai voh context API se aa rhe hai Notesitem ne call kiya h is function ko aur "notes" as props bheje gye the Notes.js k dware 
    console.log(currentNotes);
    // setnote({id:currentNotes._id, eTitle:currentNotes.title,eDescription:currentNotes.description, etag:currentNotes.tag});
    
    // setnote({...note, [note.name]:note.value})
    setdummy({Title:currentNotes.title});
    setmodalWork({id:currentNotes._id,eTitle:currentNotes.title,eDescription:currentNotes.description,eTag:currentNotes.tag,Upost:currentNotes.Upost,Urank:currentNotes.Urank,Umail:currentNotes.Umail});    
    // settitle({tit:currentNotes.title})   ;
    // console.log("UPDATING TITLE "+title.tit)
    // setnote(currentNotes);99
    console.log("AFTER SETNOTE");
    console.log(modalWork);
    ref.current.click();
  }

const fetchWorker=()=>{

  
      const empPost = post;

  getAllEmp(empPost);



}



const handelOption=(e)=>{
setpost(e.target.value);
fetchWorker();
}



  const handelOnModalChange= (e) =>{
    setmodalWork({...modalWork, [e.target.name]:e.target.value})
    
    }

    let joditChange = (key, newContent)=>{
      setwork2add(
         {
            ...work2add,
            [key]: newContent
         }
      )
  }
    

  return (
    <>
       
        {notes.map((notes) => {
      
      return <Alarm key={notes._id} notes={notes}  show="false" />;
    })}





<form  className='mx-4' >
  <div className="mb-3 ">
 
    <label htmlFor="Title" className="form-label"  >Project Name</label>
    <input type="text" className="form-control" id="Title" name="Title" onChange={handelOnChange} value={work2add.Title} minLength={5} required  />
   
  </div>
  <div className="mb-3">
    <label htmlFor="Description" className="form-label"  >Project Description</label>
    {/* <input type="text" className="form-control" id="Description" name="Description"  value={work2add.Description} onChange={handelOnChange} minLength={5}required/> */}
   <JoditEditor 
ref={editor}
value={content} 
onBlur={newContent => setcontent(newContent)}
onChange={(newContent) =>{}}

/>
{content}
  </div>

  {/* <div className="mb-3 ">
 
 <label htmlFor="Epost" className="form-label"  >Epost</label>
 <input type="text" className="form-control" id="Epost" name="Epost" onChange={handelOnChange} value={work2add.Title}  required  />

</div> */}


<div className="input-group mb-3">
  <label className="input-group-text"  htmlFor="inputGroupSelect01">Set Role:</label>
  <select className="form-select" id="inputGroupSelect01" onChange={handelOption}    value={post}   >
    { <option  value={post} disabled={true} placeholder="Choose..."  >{post===""?"Choose...":{post}}</option> }
     
     <option value="Analyst"  >Analyst</option>
    <option value="Senior Analyst"  >Senior Analyst</option>
    <option value="React Developer"  >React Developer</option>
    <option value="DevOps Engineer" >DevOps Engineer</option>
    <option value="SDE" >SDE</option>
   
  </select>
</div>





<div className="input-group mb-3">
  <label className="input-group-text "  htmlFor="inputGroupSelect07">Employee:</label>
  <select className="form-select" id="inputGroupSelect07" onChange={handelMail} name="Empmail"  value={work2add.Empmail}   >
    { <option   disabled={true} value={mail} placeholder="Choose..."  >{mail===""?"Choose...":{mail}}</option>  }
    {
    employee.map((employee) => {
     return <> <option className="form-select  container"  key={employee._id}    value={employee.Empmail} >
       
     Name: {employee.name} , Mail: {employee.email}
       </option> </>     
    })}
 </select>
</div>





  <div className="mb-3">
    <label htmlFor="Tag" className="form-label"  >TAG</label>
    <input type="text" className="form-control" id="Tag" name="Tag"   onChange={handelOnChange} value={work2add.Tag} minLength={5} required/>
  </div>


  <div className="input-group  mb-3 position-relative" style={{minWidth:"10%",maxWidth:"20%"}} >
  <span className="input-group-text " >Finish Time </span>
  <input type="number" aria-label="Hrs" name='Hrs'value={work2add.Hrs} placeholder="hh" onChange={handelOnChange}  max="24" min="0" className="form-control "/>
  <input type="number" aria-label="Min" name='Min'value={work2add.Min} placeholder="mm" onChange={handelOnChange}  max="60" min="0" className="form-control "/>
  <input type="number" aria-label="Sec" name='Sec'value={work2add.Sec} placeholder="ss" onChange={handelOnChange} max="60" min="0" className="form-control "/>
  </div>
  
  <small ><p className='mx-6 my-6'>Enter Time In hh:mm:ss Format </p></small>
  <button  disabled={work2add.Title.length<5 && content.length<5}  type="submit" className="btn btn-primary" onClick={handelClick}>ADD A PROJECT</button>
</form>





































<div className='row'>
{work.length===0  && `NO PENDING PROJECT ` }
        {work.map((work) => {
          return <NoteItem key={work._id} notes={work} updateNotes={updateModal} deleteNote={deleteWork} cloured="false"  />;
        })}
</div>







































<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT PROJECT</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">




            <form   onSubmit={e => e.preventDefault()} >
              <div className="mb-3">
                
                <label htmlFor="eTitle" className="form-label"  >PROJECT NAME </label>
               <input type="text" className="form-control" id="eTitle" name="eTitle" onChange={handelOnModalChange} value={modalWork.eTitle}  minLength={5} required />

                </div> 
              <div className="mb-3">
                <label htmlFor="eDescription" className="form-label"  >PROJECT DESCRIPTION</label>
                <input type="text" className="form-control" id="eDescription" name="eDescription" onChange={handelOnModalChange} value={modalWork.eDescription} minLength={5} required />
              </div>



              <div className="mb-3">
                <label htmlFor="eTag" className="form-label"  >TAG</label>
                <input type="text" className="form-control" id="eTag" name="eTag" onChange={handelOnModalChange} value={modalWork.eTag} minLength={5} required />
              </div>
              {/* <div className="mb-3">
                
                <label htmlFor="Title" className="form-label"  >Title</label>
               <input type="text" className="form-control"  onChange={handelOnChange} value={title.tit}  minLength={5} required />

                </div>  */}


              {/* <div className="input-group mb-3">
                <label className="input-group-text"  htmlFor="inputGroupSelect01">Employee:</label>
                <select className="form-select" id="inputGroupSelect01"   onChange={handelOnModalChange} name="Epost" value={modalWork.Upost} >
                  <option selected   onSelect={handelOnModalChange} name="Upost" value={modalWork.Upost}  >{modalWork.Upost}</option>
                  <option value="Analyst"  >Analyst</option>
                  <option value="Senior Analyst" >Senior Analyst</option>
                  <option value="React Developer" >React Developer</option>
                  <option value="DevOps Engineer" >DevOps Engineer</option>
                  <option value="SDE" >SDE</option>
                  
                </select>
              </div> */}



              {/* <div className="input-group mb-3">
  <label className="input-group-text"  htmlFor="inputGroupSelect01">Change Employee:</label>
 
    {employee.map((employee) => {
       <select className="form-select"    name="Employee" value={work2add.Empmail} >
       <option selected     value={employee}  >{work2add.Empmail}</option>
       <option      value={employee}  >{work2add.Empmail}</option>
       </select>     
    })}
 
</div> */}


             
            </form>





          </div>
          <div className="modal-footer">
            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" 
            
          
            onClick={ handelModal} disabled={modalWork.eTitle.length<5 || modalWork.eDescription.length<5}>UPDATE PROJECT </button>
          </div>
        </div>
      </div>
    </div>





</>
  )
}





















// const context = useContext(noteContext);
// const {addNote} = context ;

// const {getNotes} = context;
// const [work2add, setwork2add] = useState({Title: "", Description: "" , Tag:"default",Hrs:0,Min:0,Sec:0});
// let navigate = useNavigate();

// const handelClick= (e) =>{
//   e.preventDefault();
  
//   addNote(work2add.Title,work2add.Description,work2add.Tag);


// if(work2add.Hrs!==0 || work2add.Min!==0 || work2add.Sec!==0){
// var s1 = work2add.Title+"sec";
// var s2 = work2add.Title+"min";
// var s3 = work2add.Title+"hrs";
// localStorage.setItem(s1,work2add.Sec.toString());
// localStorage.setItem(s2,work2add.Min.toString());
// localStorage.setItem(s3,work2add.Hrs.toString());}
//   setwork2add({Title: "", Description: "" , Tag:"default",Hrs:0,Min:0,Sec:0});
//   getNotes();
// }
// const handelOnChange= (e) =>{
// setwork2add({...work2add, [e.target.name]:e.target.value})
// }

// return (
// <h1>
// <Notes></Notes>
// </h1>




// </div>
// )
// }

























// const refClose = useRef(null);
// const context = useContext(noteContext);//bhai curly brackets use krega to exact cheez  load hogi context api mai se nhi to phir koi xyz variabel bna kr usme se dot . ka use krke niklega  

// const notes = context.notes;//bhai function import hua hai yeh kuch extra nhi likhna padta function k liye mtlb parantheses vgra nhi hai idhar par 

// const {editNote} = context;
// // const setnotes = context.setnotes;
// const {getNotes} = context;
// const {deleteNote} = context;
// const [title, settitle] = useState({tit:""});
// useEffect(() => {
//   if(localStorage.getItem('token')){
//   getNotes();}
//   else{
//     navigate("/login");

//   }
//  },[]);











{/* //MERE BHAI ERROR YEH HAI KI YEH UPDATE MODAL TOH BHAI EK NOTE COMPONENT SE CHL RHA HAI IT IS NOT CONNECTED TO "NOTES"---> I.E. NOTES COMPONENT OF DATABASE  */}








