import React, { useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import WorkItem from './WorkItem';
import image from './imgg1.jpg';
import image2 from './imgg2.jpg';
import image3 from './img4.jpg';
function Work() {
    const context = useContext(noteContext);
    const {getUser} = context;
    const {user}= context;
    const {getTask} = context;
    const {mail} = context;

useEffect(() => {
 getUser();
console.log(user.name);
  getTask();
}, [])


  return (
    <>
    <div id="carouselExampleAutoplaying" style={{marginRight:"3%",marginLeft:"25%"}} className="carousel slide"     data-bs-ride="carousel">
    
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block "  style={{width:"40%"}} alt="..."/>
      <div className="">
        <p style={{color:"black",fontSize:"164%",fontFamily:"fantasy"}} >Wait For Project To Be Shared <i className="fa-solid fa-business-time"></i></p>
        {/* <p style={{color:"black"}} >Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block " style={{width:"40%"}}  alt="..."/>
      <div className="">
        <p style={{color:"black",fontSize:"164%",fontFamily:"fantasy"}}>Discuss with project sender <i className="fa-brands fa-rocketchat"></i></p>
        {/* <p style={{color:"black"}} >Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block " style={{width:"40%"}} alt="..."/>
      <div className="" >
        <p style={{color:"black",fontSize:"164%",fontFamily:"fantasy"}} >Keep Working With Active Discussion <i className="fa-solid fa-users-gear"></i></p>
        {/* <p style={{color:"black"}} >Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev btn-secondary" style={{marginLeft:"-8%"}} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control" aria-hidden="true" style={{backgroundColor:"",color:"grey"}}><i className="fa-regular fa-circle-left"></i></span>
    {/* <span className="" style={{color:"black"}}>Previous</span> */}
  </button>
  <button className="carousel-control-next btn-secondary" style={{marginRight:"48%"}} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control" style={{backgroundColor:"",color:"grey"}} aria-hidden="true"><i className="fa-regular fa-circle-right"></i></span>
    {/* <span className="" style={{color:"black"}}>Next</span> */}
  </button>
</div>

<br></br><hr></hr>




    <div>
        
        <WorkItem user={user} />
    </div>
    </>
  )
}

export default Work