import React, { useContext,useEffect,useState} from 'react'
import noteContext from '../context/notes/noteContext';
import image from "./nocollab.png";
import Spinner from '../Spinner.gif';
function Todo() {
  const [load, setload] = useState(true);
    const context = useContext(noteContext);
    const {getTask} = context;
    const {task} = context;

    useEffect(() => {
    const fetchData = async () =>{
        setload(true);
      try{
        await  getTask();
        setload(false);
      }
      catch(error){
          setload(false);
      }
    } 
    fetchData();

    }, [])
    
  return (
    <>

{
    // Step 2: Render a loading state while the data is being fetched
    load === true && <img src={Spinner} alt='LOADING....'></img>
  }
  
{load===false&&task.map((work,index) => {
          return <tr > 
          

<td style={{color:"grey",wordBreak:"break-all"}}>{index++ +1 } {work.title}</td>



          </tr>;


        })}
        {task.length === 0 && load===false &&<div style={{ backgroundColor: "white" }}  ><img className='' 
        style={{ borderColor: "white", width: "78%", marginLeft: "10%" }} src={image} alt="" /><br/><h5 style={{fontFamily:"cursive",color:"#7289c4"}} 
        className='mx-5 my-5' > NO PROJECTS YET</h5><br/></div> }

    </>
  )
}

export default Todo;