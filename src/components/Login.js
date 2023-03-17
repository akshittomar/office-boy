import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
function Login() {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const {setmail} = context ;
  

  const [userInfo, setuserInfo] = useState({email: "", password: "" });
  
  // useEffect(() => {
    
  //   // setuserInfo(userInfo.email,userInfo.password);
   
  // }, [userInfo])
  
  
// var copyEmail = "";
// var copyPass = "";


  const addUser = async (email,password )=>{

    console.log("PARAMETERS OF USER EMAIL"+email+" "+password);


    const response = await fetch( `http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
     
      },
      body: JSON.stringify({email:userInfo.email,password:userInfo.password})
    });

    const json = await response.json();
    console.log("AFTER RESPONSE FETCHING "+json);
    console.log("AUTH TOKEN IS THIS "+json.authToken);
    // console.log("ADDED USER  IS THIS "+json.email);
    // setuserInfo(json.email,json.password);





  
    
   if(json.success === true ){
    console.log(json.authToken);
    localStorage.setItem('token' , json.authToken);
    setmail(email);
    navigate("/");
   }
   else 
   {

    
    console.log(json.error);
    alert(json.error+"    "+json.success);
    
    navigate("/login");
    
    
   }


//  const   note= json ;
// setnotes(notes.concat(note));
// getNotes();
  }







  const afterSubmit= (e) =>{
    e.preventDefault();
    
      console.log(" before submition  "+userInfo.email+"   "+userInfo.password)
    setuserInfo({email:userInfo.email,password:userInfo.password});
    console.log(" after submition  "+userInfo.email+"   "+userInfo.password)
   addUser(userInfo.email,userInfo.password);
   
    // setuserInfo({email: "", password: "" });
    
  }
  const handelOnChange= (e) =>{ 
    e.preventDefault();
    console.log("GUNGA BOLLA ")
    // setLightState(prevLightState => ({...prevLightState, ...newState}))
 
setuserInfo({...userInfo, [e.target.name]:e.target.value})
// setuserInfo({...userInfo,["password"]:userInfo.password})
  // setTodos((t) => [...t, "New Todo"]);
  
}
// const handelOnChange= useCallback(()=>{ console.log("GUNGA BOLLA "); setuserInfo((e)=>[...userInfo, [e.target.name]=e.target.value]) ;},[]);

// const  handelOnChange = useCallback((e)=>{
//   const newS ={ e.target.value}
//   setuserInfo(userInfo =>[...userInfo,)
// })

// }

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = useCallback((text) => {
//     const newTodo = { id: nextId++, text };
//     setTodos(todos => [...todos, newTodo]);
//   }, []); 

// }
  
// const addTodo = () => {
//   setTodos((t) => [...t, "New Todo"]);
// };
// const addTodo = useCallback(() => {
//   setTodos((t) => [...t, "New Todo"]);
// }, [todos]);

// https://www.fastrack.in/product/fastrack-gamify-watch-black-dial-analog-for-guys-3251km01




  return (
    <>
    <h3 className='mx-3'>LOGIN HERE</h3>
    <div  className='mx-3'>
    <form  onSubmit={afterSubmit}  >
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input type="email" className="form-control" onChange={handelOnChange} value={userInfo.email} name="email" id="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input type="password" className="form-control" value={userInfo.password}  onChange={handelOnChange} name="password" id="password" minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary" disabled={ !userInfo.email || !userInfo.password}>Submit</button>
</form>
    </div>
    </>
  )
}

export default Login











