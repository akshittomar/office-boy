import './App.css';
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
function App() {
  return (
   
<>

<NoteState>
<Router>
   <div className='my-3'>
   <Navbar />
   
   </div>
   <Routes>

    <Route exact path='/' element={ <div className='my-4 mx-3'><Home type="MyTodo"/></div>}></Route>
   <Route exact path='/about' element={<div className='my-5 mx-4'><About type="About"/></div>} ></Route> 
   <Route exact path='/login' element={<Login/>} />
   <Route exact path='/sign-up' element={<Signup/>} />
   <Route exact path='/task' element={<Task type="Task" />}></Route>
   <Route exact path='/mywork' element={<Work type="MyWork"  />}></Route>
   <Route exact path='/myprofile' element={<Profile type="Profile"  />}></Route>
   
   </Routes >
   </Router>
   </NoteState>
   
</>
  );
}

export default App;
