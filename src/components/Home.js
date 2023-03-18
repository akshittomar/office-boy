import React from 'react'
import AddNotes from './AddNotes';
import noteContext from "../context/notes/noteContext";
import { useContext , useEffect } from 'react';
import {useNavigate} from 'react-router-dom';



export default function Home(props) {
  console.log(props.type);
  const context = useContext(noteContext);
const {getNotes} = context;
let navigate = useNavigate();
useEffect(() => {
  if(localStorage.getItem('token')){
    getNotes();}
    else{
      navigate("/login");

    }
  },[]);
  return (<>
    <h1 >
      { `${props.type==="MyTodo"?"Add Your Todo Here":""}`}
    </h1>

<AddNotes type={props.type}/>

</>
  )
}
