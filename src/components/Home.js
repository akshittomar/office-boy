import React from 'react'
import AddNotes from './AddNotes';
import noteContext from "../context/notes/noteContext";
import { useContext , useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import io from 'socket.io-client'



export default function Home(props) {
  console.log(props.type);
  const context = useContext(noteContext);
const {getNotes} = context;
const {user}= context ;
const {getUser} = context ;
let navigate = useNavigate();
useEffect(() => {
  if(localStorage.getItem('token')){
    getNotes();
    
    if(user === undefined)
    getUser();
  }
    else{
      navigate("/login");

    }
  

  },[]);

  const headingStyle = {
    background: 'radial-gradient(circle, #000000, rgb(88 199 228))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'lavender',
    fontFamily:"serif" 
    
    // backgroundColor:"red"
  };

  return (<div className='shadow-lg p-3 mb-5  rounded' style={{backgroundColor:"rgb(168 207 218 / 32%)",margin:"0px, 0px, 0px ,0px"}} >
 {  localStorage.getItem('token') &&   <h1 style={headingStyle} >
      { `${props.type==="MyTodo"?"Add Your Todo Here ":""}`}
      <i className="fa-solid fa-pen fa-2xs" ></i>
    </h1> }

{  localStorage.getItem('token') && <AddNotes  type={props.type}/>}

</div>
  )
}
