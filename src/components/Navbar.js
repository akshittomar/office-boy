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
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <Link className={`navbar-brand my-3 ${location.pathname==='/'?"active   ":""} `} to={"/"}><h3>OFFICE-BOY <i class="fa fa-envelope" aria-hidden="true"></i></h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs ">
                            <li className="nav-item">
                                <Link className={`nav-link my-3 mx-3  ${location.pathname==='/'?"active bg-secondary ":""} `} aria-current="page" to={"/"}>Home<i class="fa fa-home fa-1x my-2" aria-hidden="true"></i></Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link my-3  mx-3 ${location.pathname==='/about'?"active bg-secondary ":""} `} aria-current="page" to={"/about"}>About  <i class="fa fa-1x fa-id-badge my-2" aria-hidden="true"></i></Link>
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
