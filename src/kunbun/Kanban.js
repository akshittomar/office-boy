// import React from 'react'
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Doing from './context/Doing';
// import Doing from './Doing';
// import KanabanItem from './KanbanItem';

// function Kanban() {
//   return (
//     <>
//     <div  >
//     <div>
//    <table className="table table-hover">
//  <th scope="col">My-Kanban</th>
//    <tbody>
//   {<Doing/>} </tbody>
// </table></div>
// <div>
//    <table className="table table-hover">
//  <th scope="col">My-Kanban</th>
//    <tbody>
//   {<Doing/>} </tbody>
// </table></div>
// <div>
//    <table className="table table-hover">
//  <th scope="col">My-Kanban</th>
//    <tbody>
//   {<Doing/>} </tbody>
// </table></div></div>
//     </>
//   )
// }

// export default Kanban
import React, { useEffect, useContext } from 'react';


import Doing from './Doing';

import noteContext from "../context/notes/noteContext";
import {useNavigate} from 'react-router-dom';
import Todo from './Todo';
import Done from './Done';
import image from './membership.png';
import Alarm from '../components/Alarm';
import MyWork from './MyWork';
function Kanban() {
  const context = useContext(noteContext);
  let navigate = useNavigate();

  const { getAllWork } = context;
  const { getAccomp } = context;
  const notes = context.notes;
  useEffect(() => {


    if(localStorage.getItem('token')){
      getAllWork();
      getAccomp();
      
     
    }
      else{
        navigate("/sign-up");
  
      }
  

  }, [])
  return (
    <>
        {notes.map((notes) => {

return <Alarm key={notes._id} notes={notes} show="false" />;
})}

      <div style={{ marginLeft: "5%" }} ><h3 style={{ fontFamily: "cursive" }}>MY KANBAN ITEMS <i className="fa-solid fa-chart-column"></i></h3></div>
      <div style={{ backgroundColor: "white" }}  ><img className='' style={{ borderColor: "white", width: "45%", marginLeft: "25%" }} src={image} alt="" /></div>




      <div style={{ display: 'flex' ,overflow:"scroll",flexWrap:"wrap",justifyContent:"flex-start" }} className='mx-5'>

        <div style={{ flex: 4 ,border:"solid 1px grey"}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" style={{ color: '#bfca0c' }}>PENDING/COLLABORATIONS <i className="fa-solid fa-clock"></i></th>
              </tr>
            </thead>
            <tbody>


              <Doing />


            </tbody>
          </table>
        </div> <br /> <hr></hr>


        <div style={{ flex: 4,border:"solid 1px grey" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" style={{ color: '#e20404' }} >TO-DO <i className="fa-solid fa-bolt"></i></th>
              </tr>
            </thead>
            <tbody>


              <MyWork />


            </tbody>
          </table>
        </div><br /><hr></hr>


        <div style={{ flex: 4,border:"solid 1px grey" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" style={{ color: 'ThreeDShadow' }} >MY PROJECTS <i className="fa-solid fa-laptop"></i></th>
              </tr>
            </thead>
            <tbody>


              <Todo />


            </tbody>
          </table>
        </div><br /><hr></hr>



        <div style={{ flex: 4,border:"solid 1px grey",borderRight:"solid 1px grey" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" style={{ color: 'rgb(8 222 54)' }}>COMPELETED <i className="fa-sharp fa-solid fa-square-check"></i></th>
              </tr>
            </thead>
            <tbody>


              <Done />


            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Kanban;
