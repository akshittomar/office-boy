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
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doing from './Doing';
import KanabanItem from './KanbanItem';
import noteContext from "../context/notes/noteContext";
import Todo from './Todo';
import Done from './Done';
import image from './membership.png';
import image2 from './images.jpg';
function Kanban() {
  const context = useContext(noteContext);


  const { getAllWork } = context;
  const { getAccomp } = context;

  useEffect(() => {

    getAllWork();
    getAccomp();

  }, [])
  return (
    <>
      <div style={{ marginLeft: "5%" }} ><h3 style={{ fontFamily: "cursive" }}>MY KANBAN ITEMS <i className="fa-solid fa-chart-column"></i></h3></div>
      <div style={{ backgroundColor: "white" }}  ><img className='' style={{ borderColor: "white", width: "45%", marginLeft: "25%" }} src={image} alt="" /></div>




      <div style={{ display: 'flex' }} className='mx-5'>

        <div style={{ flex: 3 ,width:"30%",border:"solid 1px grey"}}>
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


        <div style={{ flex: 3,width:"30%",border:"solid 1px grey" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" style={{ color: '#e20404' }} >TO-DO <i className="fa-solid fa-bolt"></i></th>
              </tr>
            </thead>
            <tbody>


              <Todo />


            </tbody>
          </table>
        </div><br /><hr></hr>



        <div style={{ flex: 3,width:"30%",border:"solid 1px grey",borderRight:"solid 1px grey" }}>
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
