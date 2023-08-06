import React, { useContext,  useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Spinner from '../Spinner.gif';

import image from './pending.jpg'

function Doing() {
  const [load, setload] = useState(true)
  
    const context = useContext(noteContext);
  
    const work = context.work;
    const { getAllWork } = context;
    useEffect(() => {
      
       
      const fetchData = async ()=>{
        setload(true);
        await getAllWork();
        setload(false);
      }
      fetchData();
     
    }, [])
    
  return (< >

{load===true && <img src={Spinner}></img>
  }
  
{load=== false && work.map((work,index) => {
          return <tr style={{width:"10%"}} > 
          

<td style={{color:"grey",wordBreak:"break-all"}}> {index++ +1 } {work.title} </td>



          </tr>;


        })}

{work.length === 0 && load === false  &&<div style={{ backgroundColor: "white",marginTop:"10%" }}  ><img className='' 
        style={{ borderColor: "white", width: "50%", marginLeft: "20%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
        className='mx-5 my-5' > NO PENDING COLLABORATIONS</h5><br/></div> }

    </>
  )
}

export default Doing;