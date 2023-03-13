import React, { useContext,useEffect,useState } from 'react'
// import { Beforeunload } from 'react-beforeunload';
import noteContext from "../context/notes/noteContext";

// import AOS from 'aos'
// import 'aos/dist/aos.css'


export default function NoteItem(props) {
    const note = props.notes;
    const context = useContext(noteContext);
   const {deleteNote}= context ;
   const updateNote = props.updateNotes;

const [hh, sethh] = useState(0);
const [mm, setmm] = useState(0);
const [ss, setss] = useState(0);
const [use,setuse] = useState(false);

const [time, settime] = useState({Hrs:0,Min:0,Sec:0});



    // const Delay=()=>{
    //     return <><Time  hrs={hh} min={mm} sec={ss} sethh={sethh} setss={setss} setmm={setmm} ></Time></>
    // }



useEffect(() => {
   
        var s1 = note.title+"sec";
    var s2 = note.title+"min";
    var s3 = note.title+"hrs";
      if( localStorage.getItem(s1)!== null || localStorage.getItem(s2)!== null|| localStorage.getItem(s3)!== null)
    {
var num1 = +localStorage.getItem(s3);
sethh(num1);
var num2 = +localStorage.getItem(s2);
setmm(num2);
var num3 = +localStorage.getItem(s1);
setss(num3);
setuse(true);
    }
  console.log("     s   ========>  "+s1 +s2+s3);
 console.log(use+"use is thhhis  "+localStorage.getItem(s1) + " "+localStorage.getItem(s2) +" "+localStorage.getItem(s3));
},[])





    // useEffect(() => {
    //     AOS.init({ 
    //     //   animatedClassName: 'aos-animate',
    //       duration: 1000,
    //       anchorPlacement: 'top-bottom',
          
    //     });
      
       
    //   }, [])
    
        // useEffect(() => {
      
    
        //     return () => {
        //       {
        //           <div className="d-flex justify-content-center">
        //            ( note.hrs!==0 || note.min!==0 || note.sec!==0 )&&  <h6><Time  hrs={note.hrs} min={note.min} sec={note.sec}  title={note.title}></Time></h6></div>  }
        //     }
        //   }, []) 
    

  
    



    
//    useEffect(() => {
     
   
//      return () => {
       
       
//         window.onbeforeunload =()=>
//         {
//             setTimeout(() => {
//                 window.alert("refreshing");        
//             }, 1000);
//         //  window.confirm("Confirm refresh");
//         window.alert("refreshing");
//         // console.log("refreshing page");
      
     
//         };
        
//      }
//    }, [])
   
const handelClick= (e) =>{
    e.preventDefault();
sethh(time.Hrs);
setmm(time.Min);
setss(time.Sec);
setuse(true);
settime({Hrs:0,Min:0,Sec:0});
}
   
   
const handelOnChange= (e) =>{
    settime({...time, [e.target.name]:e.target.value})
       }
  

useEffect(()=>{
    var s1 = note.title+"sec";
    var s2 = note.title+"min";
    var s3 = note.title+"hrs";
    
    let myInterval = setInterval(() => {
        if(use=== true){    if (ss > 0) {
                
                setss(ss-1);
                localStorage.setItem(s1,(ss-1).toString());
            }
            if (ss === 0) {
                if (mm === 0) {
                   if(hh === 0 && mm=== 0 && ss=== 0 )
                   {
  
                      clearInterval(myInterval);
                    localStorage.removeItem(s1);
                    localStorage.removeItem(s2);
                    localStorage.removeItem(s3);
                    window.alert("Hogya"+note.title);
                    
                    setuse(false);
                  //   alert("Hogya");
                    // setMinutes(0);
                //     if(note.hrs!==0 || note.min!==0 || note.sec!==0 )
                //     {
                //     setmm(0);
                //     // setSeconds(0);
                //     localStorage.setItem(s2,mm.toString());
                //     setss(0);
                //     localStorage.setItem(s1,ss.toString());
                //     sethh(0);
                //     localStorage.setItem(s3,hh.toString())
                //     // sethours(0);}
                //    }
                }
                   else{
                    // sethours(hh-1);
                    sethh(hh-1);
                    localStorage.setItem(s3,(hh-1).toString());
                    setmm(59);
                    // setMinutes(59);
                    localStorage.setItem(s2,mm.toString());
                    setss(59);
                    localStorage.setItem(s1,ss.toString());
                    // setSeconds(59);
                   }
                } else {
                    // setMinutes(mm - 1);
                    setmm(mm-1);
                    localStorage.setItem(s2,(mm-1).toString());
                    setss(59);
                    localStorage.setItem(s1,ss.toString());
                }
            } 
  }
else{
    clearInterval(myInterval);
}  }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    },[mm,ss,hh]);



   
   
   
   return (
        // <div className="col-md-3 my-4 mx-3 "    data-aos="zoom-in-up" >
            <div className="col-md-3 my-4 mx-3 "     >
            <div className="card my-4  " >

                <div className="card-body ">
                  
                    <div className='d-flex align-items-center '>
                    <h2 className="card-title container"><u><strong>Title:</strong></u><br/><i>{note.title}</i></h2>
                    
                    </div>
                    <hr/>
                    <h3 className="card-text container"><u><strong>Description:</strong></u><br/>{note.description}</h3>
                    <br/>


                    <div className=" card-footer d-flex justify-content-between " >
                        
                            <div className="d-flex justify-content-center">
                  <h6 style={{color:"black",cursor:"pointer"}} onClick={()=>{ var s1 = note.title+"sec";
    var s2 = note.title+"min";
    var s3 = note.title+"hrs";localStorage.removeItem(s1);
    localStorage.removeItem(s2);
    localStorage.removeItem(s3);deleteNote(note._id)}} >Delete <i className="fa-solid fa-trash    " ></i></h6>  
                  </div>
                  
                  {/* <div className=" card-footer d-flex justify-content-between " >
                  <Beforeunload onBeforeunload={
                
                
                () => alert('You will lose your data!') }>
                  <h6><Delay></Delay></h6>
                    </Beforeunload>
                
                  </div> */}
                  
                
                  
                  <div>
      { hh===0&&mm === 0 && ss === 0
          ? null
          : <h6><button>Time Left:{hh < 10 ? `0${hh}`:hh}:{mm < 10 ? `0${mm}`:mm}:{ss < 10 ?  `0${ss}    ` : ss+"   "}<i className="fa-solid fa-trash" onClick={()=>{ 
            var s1 = note.title+"sec";
            var s2 = note.title+"min";
            var s3 = note.title+"hrs";
            localStorage.removeItem(s1);
            localStorage.removeItem(s2);
            localStorage.removeItem(s3);
            sethh(0);
            setmm(0);
            setss(0);
          setuse(false);
            }}></i></button></h6> 
      }
      </div>

<div>
   <h6>edit here </h6> 
   <form>
   <input type="number" aria-label="Hrs" name='Hrs'value={time.Hrs} placeholder={hh} onChange={handelOnChange}  max="24" min="0" className="form-control "/>
  <input type="number" aria-label="Min" name='Min'value={time.Min} placeholder={mm} onChange={handelOnChange}  max="60" min="0" className="form-control "/>
  <input type="number" aria-label="Sec" name='Sec'value={time.Sec} placeholder={ss} onChange={handelOnChange} max="60" min="0" className="form-control "/>
 <small> <button  disabled={time.Hrs===0 && time.Min===0 && time.Sec===0}  type="submit" className="btn btn-primary" onClick={handelClick}><h6>EDIT TIMER</h6></button></small>
  </form>
</div>



                  
                  <div   className="d-flex justify-content-center">
                  <h6 style={{color:"black",cursor:"pointer"}} onClick={()=>{updateNote(note)}}  >Edit <i className="fa-solid fa-file-pen sm  " onClick={()=>{updateNote(note)}}></i></h6>
                   </div>
                  
                   </div>


                   


                </div>
            </div>

        </div>
    )
}

