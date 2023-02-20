import React from 'react'
import AddNotes from './AddNotes';
import noteContext from "../context/notes/noteContext";
import { useContext , useEffect } from 'react';
import {useNavigate} from 'react-router-dom';



export default function Home() {
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
       Add Notes Here  
    </h1>

<AddNotes/>

</>
  )
}
