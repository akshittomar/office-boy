import React, { useContext,  useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";

import image from './img.png';
import Spinner from '../Spinner.gif';

function Done() {
  const [load, setload] = useState(true);

    const context = useContext(noteContext);
    const { getAccomp } = context;
    const accomp= context.accomp;

    useEffect(() => {
      
    const fetchData = async ()=>{
      setload(true);
      await getAccomp();
      setload(false);
    }
    fetchData();
     
    }, [])
    
  return (<>

{
    
    load === true && <img src={Spinner}></img>
  }
  
{load === false && accomp.map((acc,index) => {
          return <tr > 
          

<td style={{color:"grey",wordBreak:"break-all"}}>{index++ +1 } {acc.title}</td>



          </tr>;


        })}
        {accomp.length === 0 && load=== false && <div style={{ backgroundColor: "white",marginTop:"0%" }}  ><img className='' 
        style={{ borderColor: "white", width: "45%", marginLeft: "30%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
        className='mx-5 my-5' > NO COMPELETED WORK</h5><br/></div> }

    </>
  )
}

export default Done;