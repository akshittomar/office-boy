import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {


    let navigate = useNavigate();
    const handelLogOut = () => {
        localStorage.removeItem('token');
        navigate('/sign-up')


    }

    let location = useLocation();
    useEffect(() => {

    }, [location]);



    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-static bg-transparent">
                <div className="container-fluid">
                    <Link className={`navbar-brand my-1 mx-0 ${location.pathname === '/' ? "active   " : ""} `} onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} to={`${localStorage.getItem('token') ? "/" : "/sign-up"}`}><h5 style={localStorage.getItem("token") ? { fontFamily: "serif" } : { cursor: "help" }} >OFFICE-BOY <i style={localStorage.getItem("token") ? {} : { cursor: "help" }} className="fa-solid fa-users fa-sm" onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }}></i></h5></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent"  >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs ">

                            {/* <li className="nav-item">
                            <Link className={`nav-link my-1  mx-3 ${location.pathname==='/about'?"active bg-info ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/about":"/sign-up"}`} ><h4>About  <i className="fa fa-1x fa-id-badge my-2" aria-hidden="true"></i></h4></Link>
                            </li> */}

                            <li className="nav-item">
                                <Link className={`nav-link my-1  mx-2 ${location.pathname === '/' ? "active bg-transparent " : ""} `} onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} aria-current="page" to={`${localStorage.getItem('token') ? "/" : "/sign-up"}`} style={localStorage.getItem("token") ? { fontFamily: "serif" } : { cursor: "help" }}><h6>CollabNet&nbsp;<i onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} style={localStorage.getItem("token") ? {} : { cursor: "help" }} className="fa-solid fa-laptop-file fa-sm"></i></h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link my-1 mx-2  ${location.pathname === '/task' ? "active bg-transparent " : ""} `} onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} aria-current="page" to={`${localStorage.getItem('token') ? "/task" : "/sign-up"}`} style={localStorage.getItem("token") ? { fontFamily: "serif" } : { cursor: "help" }} ><h6>To-Do <i onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} style={localStorage.getItem("token") ? {} : { cursor: "help" }} className="fa-solid fa-person-running fa-sm"></i></h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link my-1  mx-2 ${location.pathname === '/mywork' ? "active bg-transparent " : ""} `} onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} aria-current="page" to={`${localStorage.getItem('token') ? "/mywork" : "/sign-up"}`} style={localStorage.getItem("token") ? { fontFamily: "serif" } : { cursor: "help" }}><h6>MyWork <i style={localStorage.getItem("token") ? {} : { cursor: "help" }} className="fa-solid fa-truck-fast fa-xs" onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }}></i></h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link my-1  mx-2 ${location.pathname === '/mykanban' ? "active bg-transparent " : ""} `} onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} aria-current="page" to={`${localStorage.getItem('token') ? "/mykanban" : "/sign-up"}`} style={localStorage.getItem("token") ? { fontFamily: "serif" } : { cursor: "help" }}><h6>Kanban <i style={localStorage.getItem("token") ? {} : { cursor: "help" }} className="fa-solid fa-chart-line fa-sm " onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }}></i></h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link my-1  mx-2 ${location.pathname === '/myprofile' ? "active bg-transparent " : ""} `} onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} aria-current="page" to={`${localStorage.getItem('token') ? "/myprofile" : "/sign-up"}`} style={localStorage.getItem("token") ? { fontFamily: "serif" } : { cursor: "help" }}><h6>Profile <i onClick={() => { if (!localStorage.getItem('token')) alert('PLEASE LOGIN/SIGN-UP TO CONTINUE') }} style={localStorage.getItem("token") ? {} : { cursor: "help" }} className="fa-regular fa-id-card fa-sm"></i></h6></Link>
                            </li>


                        </ul>
                        <a style={{color:""}} className='btn btn-outline-dark btn-sm ' href='https://www.linkedin.com/in/akshit-tomar-7b6a77220/' role='button'>Contact Us <i className="fa-solid  fa-sm fa-arrow-up-right-from-square"></i></a>
                        
                        {/* <div className="btn-group" role="group" aria-label="Basic example" style={{fontSize:"small"}}>
                            <a type="button" className="btn btn-outline-dark btn-sm" href='https://www.linkedin.com/in/akshit-tomar-7b6a77220/'  role='button'><i className="fa-brands fa-linkedin-in "></i></a>
                            <a type="button" className="btn btn-outline-dark btn-sm" href='https://github.com/akshittomar'  role='button'><i className="fa-brands fa-github "></i></a>
                            <a type="button" className="btn btn-outline-dark btn-sm" href='mailto:akshitt125@gmail.com'  role='button'><i className="fa-brands fa-google "></i></a>
                        </div> */}

                        {!localStorage.getItem('token') ?
                            <form className="" >
                                <Link className='btn btn-outline-dark mx-1 btn-sm' to="/login" role="button">LOGIN <i className="fa-solid fa-arrow-right-to-bracket fa-rotate-180"></i></Link>
                                <Link className={`btn btn-outline-dark  mx-1 btn-sm`} to="/sign-up" role="button">SIGN-UP <i className="fa-solid fa-handshake-angle"></i></Link>


                            </form> : <button className='btn btn-outline-dark btn-sm mx-1' onClick={handelLogOut}  >LOGOUT <i className="fa-solid fa-right-from-bracket fa-sm"></i></button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
