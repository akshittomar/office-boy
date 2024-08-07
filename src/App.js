import './App.css';
import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/notesState';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

import Mywork from './work2do/Mywork'
import Task from './workDistributor/Task';
import Profile from './profile/Profile';
import Work from './work2do/Work';
// import KanabanItem from './KanabanItem';
// import Doing from './context/Doing';
import Kanban from './kunbun/Kanban';
import Notfound from './components/Notfound';
function App() {
  return (
   
<div>

<NoteState>
<Router>
   <div className='my-3'>
   <Navbar />
   
   </div>
   <Routes>

    <Route exact path='/' element={ <div className='my-4 mx-3'><Task type="Task"/></div>}></Route>
   {/* <Route exact path='/about' element={<div className='my-5 mx-4'><About type="About"/></div>} ></Route>  */}
   <Route exact path='/login' element={<Login/>} />
   <Route exact path='/sign-up' element={<Signup/>} />
   <Route exact path='/task' element={<Home type="MyTodo"/>}></Route>
   <Route exact path='/mywork' element={<Work type="MyWork"  />}></Route>
   <Route exact path='/myprofile' element={<Profile type="Profile"  />}></Route>
   <Route exact path='/mykanban' element={<Kanban type="My-Kanban"  />}></Route>
   <Route exact path='*' element={<Notfound/>}></Route>
   {/* <Route exact path='/doing' element={<Doing type="Doing"  />}></Route> */}
   </Routes >
   </Router>
   </NoteState>
   
</div>
  );
}

export default App;
