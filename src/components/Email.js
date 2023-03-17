import React from 'react'
import Home from './Home'
export default function Email() {
  // const [work2add, setwork2add] = useState({Title: "", Description: "" , Tag:"default",Hrs:0,Min:0,Sec:0});
  // const handelOnChange= (e) =>{
  //   setwork2add({...work2add, [e.target.name]:e.target.value})
  //      }
  //      const handelSubmit= (e) =>{
  //       e.preventDefault();
        
  //       addNote(work2add.Title,work2add.Description,work2add.Tag,"1");
      
     
  //    if(work2add.Hrs!==0 || work2add.Min!==0 || work2add.Sec!==0){
  //     var s1 = work2add.Title+"sec";
  //     var s2 = work2add.Title+"min";
  //     var s3 = work2add.Title+"hrs";
  //    localStorage.setItem(s1,work2add.Sec.toString());
  //    localStorage.setItem(s2,work2add.Min.toString());
  //    localStorage.setItem(s3,work2add.Hrs.toString());}
  //       setwork2add({Title: "", Description: "" , Tag:"default",Hrs:0,Min:0,Sec:0});
  //       getNotes("1");
  //     }
      
  return (
    // <div className="card border-success  " style={{ width: "50%", height: "50rem", marginLeft: "15%", marginTop: "3%" }}>
    //   <div className="card-header bg-transparent border-success">Header</div>
    //   <div className="card-body text-success">
    //     <form>
    //     <div className="mb-3">
    //       <label htmlFor="Title" className="form-label"  >Project</label>
    //       <input type="text" className="form-control" id="Title" name="Title" onChange={handelOnChange} value={work2add.Title} minLength={5} required />

    //     </div>

        
    //     <div className="mb-3">
    //       <label htmlFor="Description" className="form-label"  >Description</label>
    //       <input type="text" className="form-control" id="Description" name="Description" value={work2add.Description} onChange={handelOnChange} minLength={5} required />
    //     </div>



    //     <div className="mb-3">
    //       <label htmlFor="Tag" className="form-label"  >TAG</label>
    //       <input type="text" className="form-control" id="Tag" name="Tag" onChange={handelOnChange} value={work2add.Tag} minLength={5} required />
    //     </div>
    //     <button className='btn btn-primary' onClick={handelSubmit}></button>
    //     </form>
    //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    //   <div className="card-footer bg-transparent border-success">Footer</div>
    // </div>
    <Home></Home>
  )
}
