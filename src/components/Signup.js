import React from 'react'
import { useState,useEffect,useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import noteContext from "../context/notes/noteContext";
import signImage from './signup.jpg';
// import Text from './Text';
function Signup() {
  let navigate = useNavigate();
 const context = useContext(noteContext);
  const {setmail} = context ;
  
const [newUser, setnewUser] = useState({name:"",email:"",password:"",epost:""})

const [post, setpost] = useState("");

const handelOption=(e)=>{
  setpost(e.target.value);}


useEffect(() => {
  console.log(post);

 
}, [post])


  const createUser = async (name,email,password,epost )=>{

    console.log("PARAMETERS OF USER EMAIL"+name+" "+email+" "+password+" "+epost);


    const response = await fetch( `http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        
      },
      body: JSON.stringify({name:newUser.name,email:newUser.email,password:newUser.password,epost:post})
    });

    const json = await response.json();
    if(json.success===true){
     setmail(email);
     localStorage.setItem('mail', email);

    localStorage.setItem('token' , json.authToken);
    navigate("/");



    }
    else
    {
      console.log(json.error);
    alert(json.error+"    "+json.success);
    
    // navigate("/sign-up");
    }

}


const loginStyle = {
  backgroundImage: `url(${signImage})`,
  // backgroundImage:"url('https://cdn.discordapp.com/attachments/1063502449907859566/1124956502621433876/7fe4aa9c-d42f-4030-89ba-1a22c9b658b5.jpg')",
  // backgroundImage:"url('https://cdn.discordapp.com/attachments/1063502449907859566/1124958927851892756/559cb599-8c7d-45b5-988b-1d2a5aafdb5c.jpg')",
  // backgroundImage: "url('https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=2000')",
  // backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9Bax5ePiw2TCAvzsrLaQUb6fnpnatYBMhueMCB86hJG37ei4w1glgZLvahacAUVnsWs&usqp=CAU')",
  backgroundSize: "cover",
  // backgroundSize: "50%",

  // backgroundRepeat: "no-repeat",

  // backgroundPosition: "120% 90%",
  backgroundPosition: "center",

  minHeight: "100vh"
  // minHeight: "90vh"

};

const afterSubmit=(e)=>{
  e.preventDefault();
  
  setnewUser({name:newUser.name,email:newUser.email,password:newUser.password,epost:post});
  console.log("THE NEW USER IS "+newUser);
  createUser(newUser.name,newUser.email,newUser.password,post);


}

const handelOnChange=(e)=>{
  setnewUser({...newUser, [e.target.name]:e.target.value});
}
const headingStyle = {
  background: 'radial-gradient(circle, #0e0ef7, #fb0000)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'lavender',
  fontFamily:"serif" 
  
  // backgroundColor:"red"
};

  return (
    <div style={loginStyle}>
    <h1 className='mx-5' style={{}}>SIGN-UP TO OFFICE-BOY <i className="fa-solid fa-people-group"></i></h1>
    <hr/>
    <div className=''>
    <h6 style={{fontFamily:"monospace",fontSize:"80%"}} className='mx-5 '> Streamline projects, collaborate effortlessly, with our all-in-one professional app. Manage tasks, communicate with clients, and stay organized with ease. Join now and experience the future of project management! </h6><hr/></div>
    
    <div  className='mx-5'>
    <form onSubmit={afterSubmit} >
    <div className="mb-3">
    <label htmlFor="uname" className="form-label" style={{width:"25%",color:"black",fontFamily:"fantasy"}}>ENTER YOUR NAME <i className="fa-regular fa-user"></i></label>
    <input type="text" className="form-control" id="uname" name="name" style={{width:"25%"}} onChange={handelOnChange} value={newUser.name} aria-describedby="user-name" minLength={5} required/>
    
  </div>

  <div className="input-group mb-3" style={{width:"25%"}}>
  <label className="input-group-text"  htmlFor="inputGroupSelect01" style={{width:"",color:"black",fontFamily:"fantasy"}}>PROFILE&nbsp;<i className="fa-solid fa-laptop"></i></label>
  <select className="form-select" id="inputGroupSelect01" onChange={handelOption} style={{width:"25%"}}   value={post}   >
    { <option  value={post} disabled={true} placeholder="Choose..."  >{post}</option> }
     
     <option value="Analyst"  >Analyst</option>
    <option value="Senior Analyst"  >Senior Analyst</option>
    <option value="React Developer"  >React Developer</option>
    <option value="DevOps Engineer" >DevOps Engineer</option>
    <option value="SDE" >SDE</option>
   
  </select>
</div>
 
  <div className="mb-3">
    <label htmlFor="email" style={{color:"black",fontFamily:"fantasy"}} className="form-label" >EMAIL ADDRESS <i className="fa-regular fa-envelope"></i></label>
    <input type="email" className="form-control"  id="email" name="email" style={{width:"25%"}} onChange={handelOnChange} value={newUser.email} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label" style={{width:"25%",color:"black",fontFamily:"fantasy"}}>PASSWORD <i className="fa-solid fa-key"></i></label>
    <input type="password" className="form-control" id="password" style={{width:"25%"}} onChange={handelOnChange} value={newUser.password} name="password" minLength={5} required/>
  </div>
  {/* <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={handelOnChange}  value={newUser.password}  name="cpassword"/>
  </div> */}
  <button type="submit" className="btn btn-dark" disabled={ !newUser.email || !newUser.password || !newUser.name}>Submit <i class="fa-solid fa-power-off"></i></button>
</form>
    </div>
    </div>
  )
}

export default Signup