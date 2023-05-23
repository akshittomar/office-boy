import React from 'react'
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Doing from './context/Doing';
function KanabanItem() {
  return (
    <>
    
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
      <li className="nav-item ">
      <Link className={`nav-link my-3 mx-3  `} aria-current="page" to={"/doing"}>Pending</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Pricing</a>
      </li>
     
    </ul>
  </div>
</nav>




    </>
  )
}

export default KanabanItem