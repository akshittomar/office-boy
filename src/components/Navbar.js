import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation   } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    let navigate = useNavigate();  
    const handelLogOut=()=>{
        localStorage.removeItem('token');
        navigate('/login')
       

    }

    let location = useLocation();
    useEffect(() => {
       
       },[location]);

 
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-static bg-secondary">
                <div className="container-fluid">
                    <Link className={`navbar-brand my-3 ${location.pathname==='/'?"active   ":""} `} to={`${localStorage.getItem('token')?"/":"/login"}`}><h2>OFFICE-BOY </h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs ">
                            <li className="nav-item">
                                <Link className={`nav-link my-3 mx-3  ${location.pathname==='/'?"active bg-secondary ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/":"/login"}`}  ><h4>Home<i className="fa fa-home fa-1x my-2" aria-hidden="true"></i></h4></Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link className={`nav-link my-3  mx-3 ${location.pathname==='/about'?"active bg-secondary ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/about":"/login"}`} ><h4>About  <i className="fa fa-1x fa-id-badge my-2" aria-hidden="true"></i></h4></Link>
                            </li> */}
                            
                            <li className="nav-item">
                            <Link className={`nav-link my-3  mx-3 ${location.pathname==='/task'?"active bg-secondary ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/task":"/login"}`}><h4>Work-Distributer </h4></Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link my-3  mx-3 ${location.pathname==='/mywork'?"active bg-secondary ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/mywork":"/login"}`}><h4>My-Work</h4></Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link my-3  mx-3 ${location.pathname==='/mykanban'?"active bg-secondary ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/mykanban":"/login"}`}><h4>Kanban</h4></Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link my-3  mx-3 ${location.pathname==='/myprofile'?"active bg-secondary ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/myprofile":"/login"}`}><h4>Profile</h4></Link>
                            </li>
                           
                        </ul>
                      
                        {!localStorage.getItem('token')? 
                        <form className="d-flex" role="search">
                      <Link  className='btn btn-outline-dark mx-4 btn-lg' to="/login" role="button">LOGIN</Link>  
                            <Link className={`btn btn-outline-dark  mx-4 btn-lg`} to="/sign-up" role="button">SIGN-UP</Link>
                            
                           
                        </form>:<button className='btn btn-outline-dark btn-lg' onClick={handelLogOut}  >LOGOUT</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
