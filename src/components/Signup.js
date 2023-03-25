import React from 'react'
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();

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

const afterSubmit=(e)=>{
  e.preventDefault();
  
  setnewUser({name:newUser.name,email:newUser.email,password:newUser.password,epost:post});
  console.log("THE NEW USER IS "+newUser);
  createUser(newUser.name,newUser.email,newUser.password,post);


}

const handelOnChange=(e)=>{
  setnewUser({...newUser, [e.target.name]:e.target.value});
}


  return (
    <>
    <h3 className='mx-3'>SIGN-UP HERE</h3>
    <div  className='mx-3'>
    <form onSubmit={afterSubmit} >
    <div className="mb-3">
    <label htmlFor="uname" className="form-label">ENTER YOUR NAME </label>
    <input type="text" className="form-control" id="uname" name="name" onChange={handelOnChange} value={newUser.name} aria-describedby="user-name" minLength={5} required/>
    
  </div>

  <div className="input-group mb-3">
  <label className="input-group-text"  htmlFor="inputGroupSelect01">Job Role:</label>
  <select className="form-select" id="inputGroupSelect01" onChange={handelOption}    value={post}   >
    { <option  value={post} disabled={true} placeholder="Choose..."  >{post}</option> }
     
     <option value="Analyst"  >Analyst</option>
    <option value="Senior Analyst"  >Senior Analyst</option>
    <option value="React Developer"  >React Developer</option>
    <option value="DevOps Engineer" >DevOps Engineer</option>
    <option value="SDE" >SDE</option>
   
  </select>
</div>
 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  id="email" name="email"onChange={handelOnChange} value={newUser.email} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={handelOnChange} value={newUser.password} name="password" minLength={5} required/>
  </div>
  {/* <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={handelOnChange}  value={newUser.password}  name="cpassword"/>
  </div> */}
  <button type="submit" className="btn btn-dark" disabled={ !newUser.email || !newUser.password || !newUser.name}>Submit</button>
</form>
    </div>
    </>
  )
}

export default Signup