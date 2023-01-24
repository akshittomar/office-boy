import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();

const [newUser, setnewUser] = useState({name:"",email:"",password:""})




  const createUser = async (name,email,password )=>{

    console.log("PARAMETERS OF USER EMAIL"+name+" "+email+" "+password);


    const response = await fetch( `http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
     
      },
      body: JSON.stringify({name:newUser.name,email:newUser.email,password:newUser.password})
    });

    const json = await response.json();
    console.log(json);
    navigate("/");

}

const afterSubmit=(e)=>{
  e.preventDefault();
  setnewUser(newUser.name,newUser.email,newUser.password);
  createUser(newUser.name,newUser.email,newUser.password);


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
    <input type="text" className="form-control" id="uname" name='name'onChange={handelOnChange} value={newUser.name} aria-describedby="user-name"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  id="email" name="email"onChange={handelOnChange} value={newUser.email} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={handelOnChange} value={newUser.password} name="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={handelOnChange}  value={newUser.password}  name="cpassword"/>
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
    </div>
    </>
  )
}

export default Signup