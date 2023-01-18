import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/notesState';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
   
<>
<NoteState>
<Router>
   <div className='my-3'>
   <Navbar />
   </div>
   <Routes>

    <Route exact path='/' element={ <div className='my-4 mx-3'><Home/></div>}></Route>
   <Route exact path='/about' element={<div className='my-5 mx-4'><About/></div>} ></Route> 
   <Route exact path='/login' element={<Login/>} />
   <Route exact path='/sign-up' element={<Signup/>} />
   </Routes >
   </Router>
   </NoteState>
</>
  );
}

export default App;
