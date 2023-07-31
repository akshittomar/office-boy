import React, { useContext, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import Alarm from '../components/Alarm';
import { useNavigate } from 'react-router-dom';
import image from './My project.png';
export default function Profile() {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const notes = context.notes;
  const { user } = context; const accomp = context.accomp;
  const { getUser } = context;
  const { getAccomp } = context;
  const headingStyle = {
    background: 'linear-gradient(45deg, #eeec98, #de7777)',
    // WebkitBackgroundClip: 'text',

    color: '#eeec98',
    paddingTop: '20%',


    // backgroundColor:"red"
  };

  useEffect(() => {

    if(localStorage.getItem('token')){
      getUser();
    getAccomp();
    }
      else{
        navigate("/sign-up");
  
      }

   


  }, [])

  return (
    <>
      {/* <div style={headingStyle}  >.</div> */}
      <div style={{ background: 'linear-gradient(45deg, #eeec98, #de7777)', marginTop: "0%", paddingTop: '14%' }}  >

      
        <img className=''
          style={{ width: "15%", marginLeft: "4%", paddingTop: "0%", marginBottom: "-10%", borderRadius: "69%", backgroundColor: "beige" }} src={image} alt="" /><br /><br /></div>

      {notes.map((notes) => {

        return <Alarm key={notes._id} notes={notes} show="false" />;
      })}



      {/* <table className="table d-none" style={{marginTop:"15%"}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/");}}>MY-TODO HERE <i  className="fa-solid fa-arrow-up-right-from-square"></i></th>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/task");}} >COLLABORATIONS <i className="fa-solid fa-arrow-up-right-from-square"></i></th>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/mywork");}}>MY-PROJECTS <i className="fa-solid fa-arrow-up-right-from-square"></i></th>
      <th scope="col" style={{color:'#890c0c',cursor:"pointer"}} onClick={()=>{navigate("/mykanban");}}>KANBAN HERE <i className="fa-solid fa-arrow-up-right-from-square"></i></th>
    </tr>
  </thead>
  </table> */}



      {/* <div style={{display:"flex"}}>
   <div style={{marginLeft:"22%",marginTop:"5%"}}><h3 > <span style={{fontSize:"larger",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" >&nbsp;&nbsp;{user.name}&nbsp;&nbsp;</span> </h3></div>
     <div style={{marginLeft:"22%",marginTop:"-4%"}}><h3 > <span style={{fontSize:"larger",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" >&nbsp;&nbsp;{user.epost}&nbsp;&nbsp;</span> </h3></div>
    <div style={{marginLeft:"22%",marginTop:"-4%"}}><h3 > <span style={{fontSize:"larger",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary my-5" >&nbsp;&nbsp;{user.email}&nbsp;&nbsp;</span> </h3></div>
      </div> */}





{/* 
       <div className="my-4" style={{marginLeft:'24%'}}>
  <div className="row"> 
    <div className="row" style={{animation:"fadeIn 1s ease-in-out forwards"}}>
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',marginLeft:"",animation:"reverse 2s infinite"}} 
   className="badge bg-secondary "  ><i className="fa-regular fa-lg fa-user" style={{color:'#890c0c'}}></i>&nbsp;{user.name}&nbsp;&nbsp;</span> </h3>
    </div>
    <div className="row">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary " ><i className="fa-solid fa-lg fa-briefcase" style={{color:'#890c0c'}}></i>&nbsp;{user.epost}&nbsp;&nbsp;</span> </h3>
    </div>
    <div className="row">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary " ><i className="fa-solid fa-lg fa-envelope" style={{color:'#890c0c'}} ></i>&nbsp;{user.email}&nbsp;&nbsp;</span> </h3>
    </div>
    <div className="row">
    <h3 > <span style={{fontSize:"medium",background:'linear-gradient(45deg, #eeec98, #b00d0dcf)'}} 
   className="badge bg-secondary " ><i className="fa-regular fa-lg fa-calendar-check" style={{color:'#890c0c'}} ></i> DOJ:&nbsp;{user.doj.substring(0,10)}&nbsp;&nbsp;</span> </h3>
    </div>
  </div>
</div>  */}


<div className="list-group " style={{marginLeft:'31%',width:"40%",marginTop:'4%',background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',fontSize:"71%",fontFamily:"fantasy"}}>
  <button type="button" className="list-group-item list-group-item-action " style={{background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',color:"black",wordBreak:"break-all"}} aria-current="true">
  <i className="fa-regular fa-lg fa-user" style={{color:'#890c0c'}}></i>&nbsp;{user.name}&nbsp;&nbsp;
  </button>
  <button type="button" className="list-group-item list-group-item-action" style={{background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',color:"black",wordBreak:"break-all"}}><i className="fa-solid fa-lg fa-briefcase" style={{color:'#890c0c'}}></i>&nbsp;{user.epost}&nbsp;&nbsp;</button>
  <button type="button" className="list-group-item list-group-item-action" style={{background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',color:'black',wordBreak:"break-all"}}><i className="fa-solid fa-lg fa-envelope" style={{color:'#890c0c'}}></i>&nbsp;{user.email}&nbsp;&nbsp;</button>
  <button type="button" className="list-group-item list-group-item-action" style={{background:'linear-gradient(45deg, #eeec98, #b00d0dcf)',color:'black',wordBreak:"break-all"}}><i className="fa-regular fa-lg fa-calendar-check" style={{color:'#890c0c'}}></i> DOJ:&nbsp;{user.doj.substring(0,10)}&nbsp;&nbsp;</button>
  
</div>









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
