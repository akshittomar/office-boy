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
  return (<>
 {  localStorage.getItem('token') &&  <h1 >
      { `${props.type==="MyTodo"?"Add Your Todo Here":""}`}
    </h1> }

{  localStorage.getItem('token') && <AddNotes type={props.type}/>}

</>
  )
}
