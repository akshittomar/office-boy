import React,{useEffect,useState} from 'react'






export default function Alarm(props) {
 const note = props.notes;
const [hh, sethh] = useState(0);
const [mm, setmm] = useState(0);
const [ss, setss] = useState(0);


useEffect(() => {
    if(note.hrs!==0 || note.min!==0 || note.sec!==0 )
    {
        var s1 = note.title+"sec";
    var s2 = note.title+"min";
    var s3 = note.title+"hrs";
var num1 = +localStorage.getItem(s3);
sethh(num1);
var num2 = +localStorage.getItem(s2);
setmm(num2);
var num3 = +localStorage.getItem(s1);
setss(num3);
    }
 
},[])



if(hh!==0 || mm!==0 || ss!==0){
    var s1 = note.title+"sec";
    var s2 = note.title+"min";
    var s3 = note.title+"hrs";
    
  }

useEffect(()=>{
    let myInterval = setInterval(() => {
            if (ss > 0) {
                
                setss(ss-1);
                localStorage.setItem(s1,(ss-1).toString());
            }
            if (ss === 0) {
                if (mm === 0) {
                   if(hh === 0 && mm=== 0 && ss=== 0 )
                   {
  
                    clearInterval(myInterval);
                  //   alert("Hogya");
                    // setMinutes(0);
                    if(note.hrs!==0 || note.min!==0 || note.sec!==0 )
                    {
                    setmm(0);
                    // setSeconds(0);
                    localStorage.setItem(s2,mm.toString());
                    setss(0);
                    localStorage.setItem(s1,ss.toString());
                    sethh(0);
                    localStorage.setItem(s3,hh.toString())
                    // sethours(0);}
                   }
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
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });






    return (
    <>
    
    
    </>
  )
}
