import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import workContext from "../context/notes/ds"
import Alarm from '../components/Alarm';
import JoditEditor from 'jodit-react';
import NoteItem from '../components/NoteItem';
import Chat from '../chat/Chat';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import image from './imgg.jpg';
import nimage from "./business-social-media-manager-flat-illustration_540907-16.avif";
export default function Task() {
  const ENDPOINT = "http://localhost:5000";
  var socket = io(ENDPOINT);
  var selectedChatCompare;

  const ref = useRef(null);

  const [content, setcontent] = useState('');
  const [post, setpost] = useState("Choose...");
  const [mail, setmail] = useState("Choose...");
  const [msg, setmsg] = useState([])
  const [socketConnected, setsocketConnected] = useState(false);
  const refClose = useRef(null);

  const context = useContext(noteContext);
  let navigate = useNavigate();
  const msgRef = useRef(null);
  const work = context.work;
  const { user } = context;
  const notes = context.notes;
  const user1 = content.user;
  const { addWork } = context;
  const { getUser } = context;
  const { getAllWork } = context;
  const myMail = context.mail;
  const { getAllEmp } = context;
  const { employee } = context;
  const { editWork } = context;
  const { task } = context;
  const host = "http://localhost:5000";
  const { getTask } = context;
  const { deleteWork } = context;
  const editor = useRef(null);
  const [work2add, setwork2add] = useState({ Title: "", Description: "", Tag: "default", Epost: "", Empmail: "", Erank: 0, Hrs: 0, Min: 0, Sec: 0 });
  const prevMessageRef = useRef("");

  const [modalWork, setmodalWork] = useState({ id: "", eTitle: "your title here", eDescription: "your description here ", eTag: "default", Upost: "Choose...", Urank: 0, Umail: "", Hrs: 0, Min: 0, Sec: 0, chat: "", Name: "okkkk" });
  const [dummy, setdummy] = useState({ Title: "" });
  const [change, setchange] = useState(false);
  const [chat, setchat] = useState("");

  const refChat = useRef(null);
  const navREF = useRef(null);
  const refCloseChat = useRef(null);
  const updateChat = (currentNotes) => {
    console.log("this is it ");
    console.log(currentNotes);

    // setdummy({Title:currentNotes.title})
    // window.alert(currentNotes.empname); 
    localStorage.setItem("WNAME", currentNotes.empname);
    setdummy({ Title: currentNotes.title });
    setmodalWork({ id: currentNotes._id, eTitle: currentNotes.title, eDescription: currentNotes.description, eTag: currentNotes.tag, Upost: currentNotes.epost, Urank: currentNotes.erank, Umail: currentNotes.empemail, chat: '', Name: currentNotes.empname });
    setmodalDesc(currentNotes.description);

    // settitle({tit:currentNotes.title}); 
    // console.log("UPDATING TITLE "+title.tit)
    // setnote(currentNotes);99 
    var str = new String(currentNotes.chat);
    setmsg(str.split("\n\n"));
    console.log("AFTER SETCHAT");
    console.log(chat);
    refChat.current.click();
  }

  const handelChat = (e) => {
    setchat({ ...modalWork, [e.target.name]: e.target.value })
  }

  useEffect(() => {

    if (!localStorage.getItem('token')) {
      navigate("/login");

    }
    // socket = io(ENDPOINT);
    socket.on("messageReceived2", (newMessage) => {
      // setmodalWork(newMessage);
      // window.alert("namak haram"+newMessage.chat);
      if (newMessage.chat !== prevMessageRef.current) {


        const devi = document.createElement('div');
        const youLabel = document.createElement('span');
        console.log(modalWork.Name);
        youLabel.textContent = localStorage.getItem("WNAME");
        youLabel.style.fontSize = "50%";
        youLabel.style.marginRight = "99%";
        const newChat = document.createElement('p');
        newChat.textContent = newMessage.chat;
        // devi.textContent = modalWork.chat;
        const style = {
          color: 'black',
          textAlign: 'left',
          borderRadius: '10px',
          border: 'solid #ccc 1px',
          backgroundColor: 'white',
          fontFamily: 'monospace',
          wordBreak:"break-all",

          clear: 'both',
          float: 'left',
          maxWidth: '80%',
          // filter: drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15));
          // filter: "drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15))"


        };
        // Object.assign(newChat.style, style);
        Object.assign(devi.style, style);
        devi.classList.add('mx-0', 'my-1', 'py-1', 'px-1');
        // msgRef.current.appendChild(newChat);
        msgRef.current.appendChild(devi);
        devi.appendChild(youLabel);
        devi.appendChild(newChat);


        prevMessageRef.current = newMessage.chat;
      }

      return () => {
        socket.off('messageReceived2', console.log("disconnected socket"));
      };

    })

  })

  useEffect(() => {

    getAllWork();
    fetchWorker();
    getUser();


    // socket.on('getRequest', (data) => {
    //   window.alert("socket");
    // });

    // console.log("I AM IN USEFFECT " + user1);
    // return () => {
    //   socket.off('getRequest');
    // };


    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }


    // socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connection", () => { setsocketConnected(true); })

    return () => {
      socket.off("connection", () => { setsocketConnected(false); })
    };

  }, [change, post, mail])


  const handelClick = (e) => {
    e.preventDefault();
    var erank = 0;
    switch (post) {
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





    setchange(true);


    const joiningDateString = new String(localStorage.getItem("DOJ"));
    const joiningDate = new Date(joiningDateString);
    addWork(work2add.Title, content, work2add.Tag, post, work2add.Erank, mail, localStorage.getItem("NAME"), joiningDate,);



    if (work2add.Hrs !== 0 || work2add.Min !== 0 || work2add.Sec !== 0) {
      var s1 = work2add.Title + "sec";
      var s2 = work2add.Title + "min";
      var s3 = work2add.Title + "hrs";
      localStorage.setItem(s1, work2add.Sec.toString());
      localStorage.setItem(s2, work2add.Min.toString());
      localStorage.setItem(s3, work2add.Hrs.toString());
    }
    setcontent('');
    setwork2add({ Title: "", Description: "", Tag: "default", Epost: "", Erank: 0, Empmail: "", Hrs: 0, Min: 0, Sec: 0 });
    getAllWork();
    setchange(false);
  }







  function getRank(post) {

    var erank = 0;
    switch (post) {
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
    return erank;
  }


  // const myRank = getRank(user.epost);

  const [modalDesc, setmodalDesc] = useState('');


  const handelMail = (e) => {

    setmail(e.target.value.slice(e.target.value.lastIndexOf(" ") + 1));
    console.log('apun chala bhai' + e.target.value);
  }


  const handelOnChange = (e) => {

    setwork2add({ ...work2add, [e.target.name]: e.target.value })
    if (e.target.name === "Empmail")
      console.log(work2add.Empmail);
  }


  const handelModal = (e) => {
    e.preventDefault();
    // setnote(note._id,note.eTitle,note.eDescription,note.eTag);
    // setnote({...note, [e.target.name]:e.target.value})
    // setnote({...note, [note.name]:note.value})
    var erank = 0;
    switch (modalWork.Upost) {
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

    var s1 = dummy.Title + "sec";
    var s2 = dummy.Title + "min";
    var s3 = dummy.Title + "hrs";
    localStorage.removeItem(s1);
    localStorage.removeItem(s2);
    localStorage.removeItem(s3);
    editWork(modalWork.id, modalWork.eTitle, modalDesc, modalWork.eTag, modalWork.Upost, erank, modalWork.Umail, modalWork.chat + 'sender');
    localStorage.removeItem(s1);
    // setnote(note._id,note.eTitle,note.eDescription,note.eTag);
    // setnote({...note, [e.target.name]:e.target.value})
    // setnote({...note, [note.name]:note.value})

    getRank();


    // socket = io(ENDPOINT);
    socket.emit("newMessage", modalWork);



    getAllWork()
    localStorage.removeItem(s1);
    // refClose.current.click();
    // refCloseChat.current.click();
  }






  const updateModal = (currentNotes) => {// responsibel to update id & eTitle & eDescription iske parameters mai jo currentNotes mille hai voh context API se aa rhe hai Notesitem ne call kiya h is function ko aur "notes" as props bheje gye the Notes.js k dware 
    console.log(currentNotes);
    // setnote({id:currentNotes._id, eTitle:currentNotes.title,eDescription:currentNotes.description, etag:currentNotes.tag});

    // setnote({...note, [note.name]:note.value})
    setdummy({ Title: currentNotes.title });
    setmodalWork({ id: currentNotes._id, eTitle: currentNotes.title, eDescription: currentNotes.description, eTag: currentNotes.tag, Upost: currentNotes.Upost, Urank: currentNotes.Urank, Umail: currentNotes.Umail, chat: currentNotes.chat });
    setmodalDesc(currentNotes.description);
    // settitle({tit:currentNotes.title})   ;
    // console.log("UPDATING TITLE "+title.tit)
    // setnote(currentNotes);
    console.log("AFTER SETNOTE");
    console.log(modalWork);
    ref.current.click();
  }

  const fetchWorker = () => {


    const empPost = post;

    getAllEmp(empPost);



  }



  const handelOption = (e) => {
    setpost(e.target.value);
    fetchWorker();
  }



  const handelOnModalChange = (e) => {
    setmodalWork({ ...modalWork, [e.target.name]: e.target.value })


  }

  let joditChange = (key, newContent) => {
    setwork2add(
      {
        ...work2add,
        [key]: newContent
      }
    )
  }


  return (
    <div >

      <div style={{ backgroundColor: "white" }}  ><img className='my-0 mx-5 px-5 ' style={{ borderColor: "white", width: "79%" }} src={image} alt="" /></div>

      {notes.map((notes) => {

        return <Alarm key={notes._id} notes={notes} show="false" />;
      })}




      <div style={{ width: "64%", borderBottom: "inset", borderLeftStyle: "inset" }} className='mt-1 mb-3 mx-3'>
        <h1 style={{ fontFamily: "auto", paddingLeft: "1%" }} className='my-3 mx-2' >START COLABORATING <i className="fa-solid fa-rocket fa-fade"></i></h1>
      </div>

      <form className='mx-5 ' style={{
        width: "80%",

      }} >
        <div className="mb-3 ">

          <label htmlFor="Title" className="form-label"  >Project Name  <i className="fa-solid fa-plug fa-rotate-90" ></i></label>
          <input type="text" className="form-control" id="Title" name="Title" onChange={handelOnChange} value={work2add.Title} minLength={5} required />

        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label "  >Project Description <i className="fa-solid fa-bullhorn"></i></label>
          {/* <input type="text" className="form-control" id="Description" name="Description"  value={work2add.Description} onChange={handelOnChange} minLength={5}required/> */}
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={newContent => setcontent(newContent)}
            onChange={(newContent) => { }}

          />

        </div>

        {/* <div className="mb-3 ">
 
 <label htmlFor="Epost" className="form-label"  >Epost</label>
 <input type="text" className="form-control" id="Epost" name="Epost" onChange={handelOnChange} value={work2add.Title}  required  />

</div> */}


        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Set Role &nbsp; <i className="fa-solid fa-user-graduate"></i></label>
          <select className="form-select" id="inputGroupSelect01" onChange={handelOption} value={post}   >
            <option value={post} disabled={true} key={1} placeholder="Choose..."  >{post}</option>

            <option value="Analyst" key={2} >Analyst</option>
            <option value="Senior Analyst" key={3} >Senior Analyst</option>
            <option value="React Developer" key={4} >React Developer</option>
            <option value="DevOps Engineer" key={5} >DevOps Engineer</option>
            <option value="SDE" key={6} >SDE</option>

          </select>
        </div>





        {employee.length > 0 && <div className="input-group mb-3" style={{ display: 'flex', flexDirection: "column" }} >
          <label className="input-group-text " htmlFor="inputGroupSelect07"><i className="fa-solid fa-id-card"> </i>&nbsp; Employee</label>

          {
            employee.map((employ) => {
              return <button className=" btn btn-light mb-1" key={employ._id} value={employ.email} onClick={(e) => { e.preventDefault(); handelMail(e); localStorage.setItem("NAME", employ.name); localStorage.setItem("DOJ", employ.date) }} style={{ border: "groove grey 1px" }}  >

                <i className="fa-regular fa-user"></i> : {employ.name} , <i className="fa-regular fa-envelope"></i> : {employ.email}
              </button>


            })
          }
        </div>}

        {post !== "Choose..." && employee.length === 0 && <span className='mx-5 mt-2 mb-5 fa-fade'>NO EMPLOYEE FOUND&nbsp;<i className="fa-solid fa-user-large-slash fa-fade"></i><br></br></span>}




        {/* <div className="mb-3">
          <label htmlFor="Tag" className="form-label"  >TAG</label>
          <input type="text" className="form-control" id="Tag" name="Tag" onChange={handelOnChange} value={work2add.Tag} minLength={5} required />
        </div>


        <div className="input-group  mb-3 position-relative" style={{ minWidth: "10%", maxWidth: "20%" }} >
          <span className="input-group-text " >Finish Time </span>
          <input type="number" aria-label="Hrs" name='Hrs' value={work2add.Hrs} placeholder="hh" onChange={handelOnChange} max="24" min="0" className="form-control " />
          <input type="number" aria-label="Min" name='Min' value={work2add.Min} placeholder="mm" onChange={handelOnChange} max="60" min="0" className="form-control " />
          <input type="number" aria-label="Sec" name='Sec' value={work2add.Sec} placeholder="ss" onChange={handelOnChange} max="60" min="0" className="form-control " />
        </div>

        <small ><p className='mx-6 my-6'>Enter Time In hh:mm:ss Format </p></small> */}
        <button disabled={work2add.Title.length < 5 || content.length < 5 || post === "Choose..." || employee.length === 0} type="submit" className="btn btn-primary mt-3" onClick={handelClick}>ADD A PROJECT&nbsp;<i className="fa-solid fa-share-nodes fa-spin"></i></button>
      </form>






























      <div  >
        <button type="button" ref={refChat} className="btn btn-secondary d-none  " data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => {
          // socket = io(ENDPOINT );
          socket.emit("joinChat", localStorage.getItem("room"));
        }}  >
          Discuss
        </button>



        <div className="modal  fade " style={{ maxHeight: '80%', marginTop: '3%' }} data-bs-keyboard="false" data-bs-backdrop="static"
          id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div className="modal-dialog   modal-xl ">
            <div className="modal-content" style={{ backgroundColor: 'white' }}        >
              <div className="modal-header" >
                <h5 className="modal-title " id="exampleModalLabel2" >Chat Here <i className="fa fa-comments" aria-hidden="true"></i></h5>

                <button type="button" className="btn-secondary btn  mx-3" onClick={() => {
                  document.getElementById('myMSG').innerHTML = ''; getAllWork();
                  socket.emit("leaveChat", localStorage.getItem("room")); localStorage.removeItem("room"); socket.off('messageReceived2', console.log("disconnected socket"));
                }} data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i></button>
              </div>
              <div className="modal-body " style={{ overflowY: 'scroll' }}  >
                {/* <img className='my-0 mx-5 px-5   position-fixed' style={{borderColor:"white",width:"79%"}}  src={cimage} alt="" /> */}
                <form onSubmit={e => e.preventDefault()} >
                  {msg.length === 1 && <h3 style={{ color: 'grey' }}>Nothing To Show <i className="fa fa-deaf" aria-hidden="true"></i></h3>}
                  {msg.length !== 1 && msg.map((chat) => {
                    if (chat.length !== 0) {
                      var str = new String(chat);
                      // var compar = new String(localStorage.getItem('mail'));
                      var compar = new String(modalWork.Umail);
                      // str+=compar;
                      if (str.endsWith('sender')) {
                        return <div style={{ border: 'solid #ccc 1px', backgroundColor: '#00b2ff', fontSize: '100%', fontFamily: 'revert-layer', borderRadius: '10px', textAlign: 'right', float: 'right', clear: 'both', }}
                          className='mx-0 my-1 py-1 px-1 ' >
                          <span style={{ fontSize: '50%', marginRight: '99%', color: "white" }}>YOU</span>
                          <p className='px-1' style={{ color: 'white', width: '-webkit-fill-available' ,wordBreak:"break-all"}} >{str.substring(0, str.length - 6)}
                          </p>
                        </div>

                      }
                      else {
                        return <div style={{ border: 'solid #ccc 1px', backgroundColor: 'white', fontFamily: 'monospace', float: 'left', clear: 'both', borderRadius: '10px', maxWidth: '80%' }}
                          className='mx-0 my-1 py-1 px-1 ' >
                          <span style={{ fontSize: '50%', marginRight: '99%' }}>{localStorage.getItem("WNAME")}</span>
                          <p style={{ color: 'black',wordBreak:"break-all" }} >{str.substring(0, str.length - 8)}</p> </div>
                      }
                    }
                  })


                  }
                  {/* {notes.map((notes) => {

                        return <Alarm key={notes._id} notes={notes} show="false" />;
                    })} */}
                  <div className='mx-1 my-4' id='myMSG' ref={msgRef} > </div>
                  <label htmlFor="chat" className="form-label"  ></label>
                  <textarea type='text' name='chat' className="form-control" id='chat' onChange={handelOnModalChange} placeholder='Start Typing....' minLength={1} value={modalWork.chat} required ></textarea>
                  <button type="button" className="btn btn-primary my-2" onClick={(e) => {
                    handelModal(e);
                    const devi = document.createElement('div')
                    const youLabel = document.createElement('span');
                    youLabel.textContent = "YOU";
                    youLabel.style.fontSize = "50%";
                    youLabel.style.marginRight = "99%";

                    const newChat = document.createElement('p');
                    newChat.textContent = modalWork.chat;
                    // devi.textContent = modalWork.chat;
                    const style = {
                      color: 'white',
                      textAlign: 'right',
                      borderRadius: '10px',
                      border: 'solid #ccc 1px',
                      backgroundColor: '#00b2ff',
                      fontFamily: 'revert-layer',
                      marginTop: '2px',
                      paddingRight: '4px',
                      clear: 'both',
                      float: 'right',
                      maxWidth: '80%',
                      wordBreak:"break-all",
                      // filter: drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15));
                      // filter: "drop-shadow(0px 6.29142px 31.4571px rgba(0, 0, 0, 0.15))"


                    };
                    // Object.assign(newChat.style, style);
                    Object.assign(devi.style, style);
                    devi.classList.add('mx-0', 'my-1', 'py-1', 'px-1');
                    // msgRef.current.appendChild(newChat);
                    msgRef.current.appendChild(devi);
                    devi.appendChild(youLabel);
                    devi.appendChild(newChat);

                    setmodalWork(prevState => ({ ...prevState, chat: "" }));
                  }} disabled={modalWork.chat === ''}><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>

                </form>
                {/* {modalWork.chat} */}
              </div>
              {msg.length > 10 && <div className=' position-fixed my-5 ' style={{ border: 'solid grey 0px' }}  >
                <a href='#exampleModalLabel2' ><i style={{ color: 'grey', fontSize: '80%' }} className="fa fa-arrow-circle-up" aria-hidden="true"></i></a><br />

                <a href='#chat' ><i style={{ color: 'grey', fontSize: '80%' }} className="fa fa-arrow-circle-down" aria-hidden="true"></i></a> </div>}
              <div className="modal-footer " >

                <button type="button" ref={refCloseChat} className="btn btn-secondary " data-bs-dismiss="modal"
                  onClick={() => {
                    document.getElementById('myMSG').innerHTML = '';
                    getAllWork(); socket.emit("leaveChat", localStorage.getItem("room"));
                    localStorage.removeItem("room");
                    socket.off('messageReceived2', console.log("disconnected socket"));
                  }}
                >Close <i className="fa fa-times" aria-hidden="true"></i></button>


              </div>

            </div>
          </div>
        </div>

      </div>










































      <div className='row card-deck'>
        {work.length === 0 && 
        <div className='mx-5' ><h3 className='fa-fade my-6 mt-5 mx-6' style={{marginLeft:"27%",color:"cadetblue"}} > ADD A PROJECT TO GET STARTED  <i className="fa-solid fa-person-skiing fa-fade"></i></h3>

        <img className='my-0 mx-5 px-5 ' style={{ borderColor: "white", width: "70%" }} src={nimage} alt="" /> </div>
        }
        {
          work.length >0 && <h3 className='my-5 mx-4' style={{fontFamily:"serif"}}>YOUR COLLABORATIONS <i className="fa-regular fa-handshake"></i> </h3>
        }
        {work.map((work) => {
          return < > <NoteItem key={work._id} notes={work} updateNotes={updateModal} deleteNote={deleteWork} Chat={updateChat} cloured="false" option="true" />


          </>;


        })}
      </div>


      {/* <div className="row">
  {work.length === 0 && `NO PENDING PROJECT`}
  {work.map((work) => {
    return (
      <div className="col-4">
        <NoteItem
          key={work._id}
          notes={work}
          updateNotes={updateModal}
          deleteNote={deleteWork}
          cloured="false"
          option="true"
        />
      </div>
    );
  })}
</div> */}








































      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 fa-fade" id="exampleModalLabel">EDIT PROJECT <i className="fa-solid fa-file-pen fa-fade"></i></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { getAllWork(); }} ></button>
            </div>
            <div className="modal-body">




              <form onSubmit={e => e.preventDefault()} >
                <div className="mb-3">

                  <label htmlFor="eTitle" className="form-label" style={{ fontStyle: "oblique" }}  >PROJECT NAME <i className="fa-solid fa-plug fa-rotate-90" ></i></label>
                  <input type="text" className="form-control" id="eTitle" name="eTitle" onChange={handelOnModalChange} value={modalWork.eTitle} minLength={5} required />

                </div>
                <div className="mb-3">
                  <p><h6>Project Description<i class="fa-solid fa-bullhorn"></i></h6></p>
                  {/* {<div> <label htmlFor="eDescription" className="form-label"  >PROJECT DESCRIPTION</label>
                  <input type="text" className="form-control" id="eDescription" name="eDescription" onChange={handelOnModalChange} value={modalWork.eDescription} minLength={5} required /></> } */}
                  <JoditEditor
                    ref={editor}
                    value={modalDesc}
                    onBlur={newContent => setmodalDesc(newContent)}
                    onChange={(newContent) => { }}

                  />
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







              </form>





            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { getAllWork(); }}  >Close</button>
              <button type="button" className="btn btn-primary"


                onClick={handelModal} >UPDATE PROJECT </button>
            </div>
          </div>
        </div>
      </div>





    </div>
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











{/* //MERE BHAI ERROR YEH HAI KI YEH UPDATE MODAL TOH BHAI EK NOTE COMPONENT SE CHL RHA HAI IT IS NOT CONNECTED TO "NOTES"---> I.E. NOTES COMPONENT OF DATABASE  */ }








