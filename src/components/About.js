import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

export default function About() {
    const  {a} = useContext(noteContext);
  return (
    <div> I AM IN ABOUT COMPONENET OF {a.name} AND HE BELONGS TO {a.class}</div>
  )
}
