import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom';
function Login() {
  let navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({email: "", password: "" });
  
  



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
    localStorage.setItem('token' , json.authtoken);
    navigate("/");
   }
   else 
   {
    alert("YOU ENTERED WRONG CREDENTIALS ");
  
   }


//  const   note= json ;
// setnotes(notes.concat(note));
// getNotes();
  }







  const afterSubmit= (e) =>{
    e.preventDefault();
    
    setuserInfo(userInfo.email,userInfo.password);
   addUser(userInfo.email,userInfo.password);
    // setuserInfo({email: "", password: "" });
    
  }
  const handelOnChange= (e) =>{
    // e.preventDefault();
    console.log("GUNGA BOLLA ")
setuserInfo({...userInfo, [e.target.name]:e.target.value})
  }


  







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
    <input type="password" className="form-control" value={userInfo.password}  onChange={handelOnChange} name="password" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
    </>
  )
}

export default Login