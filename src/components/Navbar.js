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
        <div >
            <nav className="navbar navbar-expand-lg navbar-static bg-transparent">
                <div className="container-fluid">
                    <Link className={`navbar-brand my-1 mx-0 ${location.pathname==='/'?"active   ":""} `} to={`${localStorage.getItem('token')?"/":"/login"}`}><h5 style={{fontFamily:"serif"}} >OFFICE-BOY <i className="fa-solid fa-users fa-sm"></i></h5></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent"  >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs ">
                            <li className="nav-item">
                                <Link className={`nav-link my-1 mx-2  ${location.pathname==='/'?"active bg-transparent ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/":"/login"}`}  ><h6>To-Do<i className="fa-solid fa-person-running fa-sm"></i></h6></Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link className={`nav-link my-1  mx-3 ${location.pathname==='/about'?"active bg-info ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/about":"/login"}`} ><h4>About  <i className="fa fa-1x fa-id-badge my-2" aria-hidden="true"></i></h4></Link>
                            </li> */}
                            
                            <li className="nav-item">
                            <Link className={`nav-link my-1  mx-2 ${location.pathname==='/task'?"active bg-transparent ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/task":"/login"}`}><h6>CollabNet<i className="fa-solid fa-laptop-file fa-sm"></i></h6></Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link my-1  mx-2 ${location.pathname==='/mywork'?"active bg-transparent ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/mywork":"/login"}`}><h6>MyWork<i className="fa-solid fa-truck-fast fa-xs"></i></h6></Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link my-1  mx-2 ${location.pathname==='/mykanban'?"active bg-transparent ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/mykanban":"/login"}`}><h6>Kanban<i className="fa-solid fa-chart-line fa-sm "></i></h6></Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link my-1  mx-2 ${location.pathname==='/myprofile'?"active bg-transparent ":""} `} aria-current="page" to={`${localStorage.getItem('token')?"/myprofile":"/login"}`}><h6>Profile<i className="fa-regular fa-id-card fa-sm"></i></h6></Link>
                            </li>
                           
                        </ul>
                      
                        {!localStorage.getItem('token')? 
                        <form className="" >
                      <Link  className='btn btn-outline-dark mx-4 btn-lg' to="/login" role="button">LOGIN</Link>  
                            <Link className={`btn btn-outline-dark  mx-4 btn-lg`} to="/sign-up" role="button">SIGN-UP</Link>
                            
                           
                        </form>:<button className='btn btn-outline-dark btn-lg' onClick={handelLogOut}  >LOGOUT <i className="fa-solid fa-right-from-bracket fa-sm"></i></button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
