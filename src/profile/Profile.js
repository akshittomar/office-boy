import React, { useContext ,useState,useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import Alarm from '../components/Alarm';
import {useNavigate} from 'react-router-dom';
import image from './My project.png';
export default function Profile() {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const notes = context.notes;
  const {user}= context; const accomp= context.accomp;
  const {getUser} = context;
  const {getAccomp} = context;
  const headingStyle = {
    background: 'linear-gradient(45deg, #eeec98, #de7777)',
    // WebkitBackgroundClip: 'text',
    
    color: '#eeec98',
    paddingTop:'20%',
    
    
    // backgroundColor:"red"
  }; 
 
  useEffect(() => { 
    
    
   getUser();
   getAccomp();
  
   
  }, [])
  
  return (
    <>
    {/* <div style={headingStyle}  >.</div> */}
    <div style={{ background: 'linear-gradient(45deg, #eeec98, #de7777)',marginTop:"0%",paddingTop:'5%' }}  >
      
    <div class=" text-center">
  <div class="row">
    <div class="col">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',marginLeft:""}} 
   className="badge bg-secondary my-5" ><i className="fa-regular fa-lg fa-user" style={{color:'#890c0c'}}></i>&nbsp;{user.name}&nbsp;&nbsp;</span> </h3>
    </div>
    <div class="col">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" ><i className="fa-solid fa-lg fa-briefcase" style={{color:'#890c0c'}}></i>&nbsp;{user.epost}&nbsp;&nbsp;</span> </h3>
    </div>
    <div class="col">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" ><i className="fa-solid fa-lg fa-envelope" style={{color:'#890c0c'}} ></i>&nbsp;{user.email}&nbsp;&nbsp;</span> </h3>
    </div>
    <div class="col">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" ><i class="fa-regular fa-calendar-check" style={{color:'#890c0c'}}></i> Date of join:&nbsp;{user.doj.substring(0,10)}&nbsp;&nbsp;</span> </h3>
    </div>
  </div>
</div>
      <img className='' 
        style={{  width: "15%", marginLeft: "4%",paddingTop:"0%",marginBottom:"-12%",borderRadius:"69%",backgroundColor:"beige" }} src={image} alt="" /><br/><br/></div>
    
    {notes.map((notes) => {
      
      return <Alarm  key={notes._id} notes={notes}  show="false" />;
    })}



<table className="table " style={{marginTop:"15%"}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/");}}>MY-TODO HERE <i  class="fa-solid fa-arrow-up-right-from-square"></i></th>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/task");}} >COLLABORATIONS <i class="fa-solid fa-arrow-up-right-from-square"></i></th>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/mywork");}}>MY-PROJECTS <i class="fa-solid fa-arrow-up-right-from-square"></i></th>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/mykanban");}}>KANBAN HERE <i class="fa-solid fa-arrow-up-right-from-square"></i></th>
    </tr>
  </thead>
  </table>
    {/* <div style={{display:"flex"}}>
   <div style={{marginLeft:"22%",marginTop:"5%"}}><h3 > <span style={{fontSize:"larger",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" >&nbsp;&nbsp;{user.name}&nbsp;&nbsp;</span> </h3></div>
     <div style={{marginLeft:"22%",marginTop:"-4%"}}><h3 > <span style={{fontSize:"larger",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" >&nbsp;&nbsp;{user.epost}&nbsp;&nbsp;</span> </h3></div>
    <div style={{marginLeft:"22%",marginTop:"-4%"}}><h3 > <span style={{fontSize:"larger",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" >&nbsp;&nbsp;{user.email}&nbsp;&nbsp;</span> </h3></div>
      </div> */}






      {/* <div class="container text-center">
  <div class="row">
    <div class="col">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',marginLeft:"68%"}} 
   className="badge bg-secondary my-5" ><i className="fa-regular fa-lg fa-user" style={{color:'#890c0c'}}></i>&nbsp;{user.name}&nbsp;&nbsp;</span> </h3>
    </div>
    <div class="col">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" ><i className="fa-solid fa-lg fa-briefcase" style={{color:'#890c0c'}}></i>&nbsp;{user.epost}&nbsp;&nbsp;</span> </h3>
    </div>
    <div class="col">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" ><i className="fa-solid fa-lg fa-envelope" style={{color:'#890c0c'}} ></i>&nbsp;{user.email}&nbsp;&nbsp;</span> </h3>
    </div>
  </div>
</div> */}










    {/* <div>{user.name}<br/>
    {user.email}<br/>
    Post:{user.epost}<br/>
    DOJ:{user.doj}<br/>
    {}<br/></div>
     */}





{/* <div style={{marginLeft:'30%'}}>
  <h3>COMPLETED PROJECTS</h3>
    {accomp.map((acc,index) => {
        if(index<5){  return (
      
<ul className='mt-3 '>
<li style={{color:"heighlight"}}>{index++ +1 } {acc.title.toUpperCase()}</li>
</ul>) }


        })}
      </div> */}





     </>
  )
}
