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
    const socket = io("http://localhost:3000");
    socket.emit('connection',{message:"hello is a socket"});
    socket.on('getRequest', (data) => {
      window.alert(data);
    });

  },[]);
  return (<>
    <h1 >
      { `${props.type==="MyTodo"?"Add Your Todo Here":""}`}
    </h1>

<AddNotes type={props.type}/>

</>
  )
}
