import React,{useEffect} from 'react'
import image from './imgg1.jpg';
import image2 from './imgg2.jpg';
import image3 from './img4.jpg';
import img from '../work2do/img3.avif';
function NoWork() {
  const headingStyle = {
    background: 'radial-gradient(circle, #040044, rgb(163 202 212))',
    // WebkitBackgroundClip: 'text',
    
    // color: 'lavender',
    fontFamily:"serif" 
    
    // backgroundColor:"red"
  }; 


  useEffect(() => {
    // Initialize popovers when the component mounts
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map((popoverTriggerEl) => {
      return new window.bootstrap.Popover(popoverTriggerEl);
    });

    return () => {
      // Destroy popovers when the component unmounts
      popoverList.forEach((popover) => popover.dispose());
    };
  }, []);
  
  return (
    <>
     <div id="carouselExampleAutoplaying" style={{ marginRight: "3%", marginLeft: "25%" }} className="carousel slide" data-bs-ride="carousel">

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={image} className="d-block " style={{ width: "30%" }} alt="..." />
    <div className="">
      <p style={{ color: "black", fontSize: "164%", fontFamily: "fantasy" }} >Wait For Project To Be Shared <i className="fa-solid fa-business-time"></i></p>
      {/* <p style={{color:"black"}} >Some representative placeholder content for the first slide.</p> */}
    </div>
  </div>
  <div className="carousel-item">
    <img src={image2} className="d-block " style={{ width: "30%" }} alt="..." />
    <div className="">
      <p style={{ color: "black", fontSize: "164%", fontFamily: "fantasy" }}>Discuss with project sender <i className="fa-brands fa-rocketchat"></i></p>
      {/* <p style={{color:"black"}} >Some representative placeholder content for the first slide.</p> */}
    </div>
  </div>
  <div className="carousel-item">
    <img src={image3} className="d-block " style={{ width: "30%" }} alt="..." />
    <div className="" >
      <p style={{ color: "black", fontSize: "164%", fontFamily: "fantasy" }} >Keep Working With Active Discussion <i className="fa-solid fa-users-gear"></i></p>
      {/* <p style={{color:"black"}} >Some representative placeholder content for the first slide.</p> */}
    </div>
  </div>
</div>
<button className="carousel-control-prev btn-secondary" style={{ marginLeft: "-8%" }} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
  <span className="carousel-control" aria-hidden="true" style={{ backgroundColor: "", color: "grey" }}><i className="fa-sharp fa-solid fa-xl fa-angles-left"></i></span>
  {/* <span className="" style={{color:"black"}}>Previous</span> */}
</button>
<button className="carousel-control-next btn-secondary" style={{ marginRight: "48%" }} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
  <span className="carousel-control" style={{ backgroundColor: "", color: "grey" }} aria-hidden="true"><i className="fa-sharp fa-solid fa-xl fa-angles-right"></i></span>
  {/* <span className="" style={{color:"black"}}>Next</span> */}
</button>
</div> 

<h1 > <span className="badge bg-secondary my-5">SAMPLE WORKSPACE BELOW   <button type="button" className="btn btn-lg btn-secondary" data-bs-toggle="popover" data-bs-title="ZERO PROJECTS FOUND" data-bs-content="As soon as someone add a project matching your id you will see them here.You are currently watching a sample of project workspace. ThankYou!"><i className="fa-sharp fa-xl fa-solid fa-circle-info"></i></button>  </span> </h1>




<div className="col-md-3 my-2 mx-5 card" style={headingStyle}    >
                <div className="card my-4 shadow-lg  bg-body-tertiary rounded " style={{ width: "50vp" }}>
                    <div className="card-header " style={{fontFamily:"serif"}}>

                     <u>ASSIGNED BY: <i className="fa-solid fa-briefcase"></i></u> {"XYZ..."}&nbsp;Name:<i className="fa-solid fa-id-card-clip"></i> {"XYZ..."}

                    </div>
                    <img className="card-img-top" src={img} style={{backgroundSize:"50%"}} alt="Card image cap"></img>
                    <div className="card-body  ">

                        <div className='d-flex  '>
                            <h6 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><strong>Topic&nbsp;<i className="fa-solid fa-book-open fa-sm"></i></strong><br /><i>{"EXAMPLE TITLE 1"}</i></h6>

                        </div>
                      
                         <div><h6 style={{ height: "10vh" }} className="card-text container overflow-auto" ><strong>Work <i className="fa-sharp fa-solid fa-briefcase"></i></strong><div >EXAMPLE DESCRIPTION 1</div></h6>

                            </div>

                        
                        <br />


                        {

                            <div className=" card-footer d-flex  " style={{ maxWidth: "45vp" }} >

                              <div className='container'>
                                        <button style={{ color: "black", cursor: "pointer" }} className='btn btn-secondary' onClick={(e) => { e.preventDefault(); }}><small> <i className="fa fa-commenting" aria-hidden="true"> DISCUSS</i></small></button>
                                    </div>


                            </div>

                        }



                    </div>
                </div>

            </div>


            <div className="col-md-3 my-2 mx-5 card" style={headingStyle}    >
                <div className="card my-4 shadow-lg  bg-body-tertiary rounded " style={{ width: "50vp" }}>
                    <div className="card-header " style={{fontFamily:"serif"}}>

                     <u>ASSIGNED BY: <i className="fa-solid fa-briefcase"></i></u> {"XYZ..."}&nbsp;Name:<i className="fa-solid fa-id-card-clip"></i> {"XYZ..."}

                    </div>
                    <img className="card-img-top" src={img} style={{backgroundSize:"50%"}} alt="Card image cap"></img>
                    <div className="card-body  ">

                        <div className='d-flex  '>
                            <h6 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><strong>Topic&nbsp;<i className="fa-solid fa-book-open fa-sm"></i></strong><br /><i>{"EXAMPLE TITLE 2"}</i></h6>

                        </div>
                      
                         <div><h6 style={{ height: "10vh" }} className="card-text container overflow-auto" ><strong>Work <i className="fa-sharp fa-solid fa-briefcase"></i></strong><div >EXAMPLE DESCRIPTION 2</div></h6>

                            </div>

                        
                        <br />


                        {

                            <div className=" card-footer d-flex  " style={{ maxWidth: "45vp" }} >

                              <div className='container'>
                                        <button style={{ color: "black", cursor: "pointer" }} className='btn btn-secondary' onClick={(e) => { e.preventDefault(); }}><small> <i className="fa fa-commenting" aria-hidden="true"> DISCUSS</i></small></button>
                                    </div>


                            </div>

                        }



                    </div>
                </div>

            </div>


            <div className="col-md-3 my-2 mx-5 card" style={headingStyle}    >
                <div className="card my-4 shadow-lg  bg-body-tertiary rounded " style={{ width: "50vp" }}>
                    <div className="card-header " style={{fontFamily:"serif"}}>

                     <u>ASSIGNED BY: <i className="fa-solid fa-briefcase"></i></u> {"XYZ..."}&nbsp;Name:<i className="fa-solid fa-id-card-clip"></i> {"XYZ..."}

                    </div>
                    <img className="card-img-top" src={img} style={{backgroundSize:"50%"}} alt="Card image cap"></img>
                    <div className="card-body  ">

                        <div className='d-flex  '>
                            <h6 className="card-title container overflow-auto" style={{ height: "10vh" }}  ><strong>Topic&nbsp;<i className="fa-solid fa-book-open fa-sm"></i></strong><br /><i>{"EXAMPLE TITLE 3"}</i></h6>

                        </div>
                      
                         <div><h6 style={{ height: "10vh" }} className="card-text container overflow-auto" ><strong>Work <i className="fa-sharp fa-solid fa-briefcase"></i></strong><div >EXAMPLE DESCRIPTION 3</div></h6>

                            </div>

                        
                        <br />


                        {

                            <div className=" card-footer d-flex  " style={{ maxWidth: "45vp" }} >

                              <div className='container'>
                                        <button style={{ color: "black", cursor: "pointer" }} className='btn btn-secondary' onClick={(e) => { e.preventDefault(); }}><small> <i className="fa fa-commenting" aria-hidden="true"> DISCUSS</i></small></button>
                                    </div>


                            </div>

                        }



                    </div>
                </div>

            </div>
    </>
  )
}

export default NoWork