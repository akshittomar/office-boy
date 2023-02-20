// import React, { useState } from 'react'


// export default function Time(props) {

//   let h = props.hrs;
  
//   var min = props.min;

//   var sec = props.sec;
//   // console.log(h+" "+min)
// const [first, setfirst] = useState({hh:h,mm:min,ss:sec});
// // const [date, setdate] = useState(new Date().toLocaleTimeString);
// // const [current, setTime] = useState(() => new Date().toLocaleTimeString());
// // const [aim, setaim] = useState({hh:h,mm:min,ss:sec})
// // const [alarm, setalarm] = useState(false);
//   // const [type, settype] = useState(() => new Date().toLocaleTimeString());
//   // const [type2, settype2] = useState(() => new Date().toLocaleTimeString());
//   const [tar, settar] = useState(() => new Date().toLocaleTimeString())
//   const [alarm
//     , setalarm
//   ] = useState(0);

 
  

// // useEffect( () => {


// //   if(h===0 && min===0  && sec ===0)
// //   { }
// //   else{
// //     var d1= new Date(); 
// //     let target = new Date(new Date().getTime() + (first.hh*60*60*1000)+(first.mm*60*1000)+(first.ss*60*1000)).toLocaleTimeString();
// //     if(target===d1.toLocaleTimeString)
// //     alert("done");

// // //     d1.getSeconds();
// // // var d2 = new Date();
// // // d1.setHours(7);
// // // d1.setMinutes(10);
// // // d2.setHours(19);
// // // d2.setMinutes(10);
// // // console.log(d2.getUTCHours());
// // // console.log(d1.toTimeString());
// // // alert(d1.currentTime());
// // // alert(d2.currentTime());

// // //   for(let i = first.hh ; i>=0 ; i--)
// // // {
// // //   setTimeout(() => {
// // //     console.log("I am i"+i);
// // //   }, 10000);
  

// // // for(let j = 60;j>=0;j--)
// // // {
// // //   setTimeout(() => {
// // //     console.log("I am j"+j);   
// // //   }, 10000);
 
// // //   for(let k =60;k>0;k--)
// // //   {

// // //     console.log("I am k"+k);
// // //   setTimeout(() => {
// // //     console.log(" "+i+" "+j+" "+k+props.title)
// // //     setfirst({hh:i,mm:j,ss:k});
// // //   }, 10000);

 
// // // }
// // // }
// // // }

// //   }
// // }, []) 
// // const target = new Date(new Date().getTime() + (first.hh*60*60*1000)+(first.mm*60*1000)+(first.ss*60*1000)).toLocaleTimeString();

// // var target3 = new Date();
// // target3.setHours(first.hh);
// // target3.setMinutes(first.mm);
// // target3.setSeconds(first.ss)
// // console.log(target3.toLocaleTimeString());





// // const updateTime=()=>{
// //   var d1= new Date().toLocaleTimeString();  // type 1 
// //   var target2 = new Date( (first.hh*60*60*1000)+(first.mm*60*1000)+(first.ss*60*1000));// type 2 
 
// //   var target3 = new Date();// type 3 
// //   target3.setHours(first.hh);
// //   target3.setMinutes(first.mm);
// //   target3.setSeconds(first.ss)
// //   setfirst({hh:first.hh,mm:first.mm,ss:first.ss})// all getting decrement at same time 
// // //   if(target===d1)
// // //   {alert("done");
// // // setfirst({hh:-90,mm:-5,ss:-1});
// // // }
// //   // console.log(target3.toLocaleTimeString())
// //   if(target3.toLocaleTimeString === d1)  
// //   {alert("HOGYA ")
// // setfirst({hh:0,mm:0,ss:0});
// // }
// //   // console.log(target3.toLocaleTimeString()+"   "+d1);
// //   // setTime(d1);
// //   // setTime(target2)
// //   settype(target2.toTimeString());
// //   settype2(target3.toTimeString());


// // }
// // if(first.hh!==0 || first.mm!==0 || first.ss!==0)
// // setInterval(updateTime,1000);

   

  










// // const addTodo = useCallback(() => {
// //   setTodos((t) => [...t, "New Todo"]);
// // }, [todos]);

// /*const changeTime=()=>{

//   var tar2 = new Date();
// tar2.setHours(first.hh);
// tar2.setMinutes(first.mm);
// tar2.setSeconds(first.ss)
// // console.log(tar.toLocaleTimeString());



// let hours = first.hh;
// let minutes = first.mm;
// let seconds = first.ss;
// if(seconds=== 1 || seconds<0 )
// {
//   seconds=60;
//   minutes=minutes-1;
// }
//   if(minutes===0)
//   {
//     minutes=60;
//     hours=hours-1;
    
//   }
//   if(hours===0)
//     {
//       setfirst({hh:0,mm:0,ss:0});
//     }
// // --seconds;

// setfirst({hh:hours,mm:minutes,ss:--seconds});
// settar(tar2.toTimeString());
// console.log(tar2.toTimeString());
// }


// // const setalarm=()=>{
// // alert("TIMER DONE");
// // }


// if(first.hh!==0 && first.mm!==0 && first.ss!==0 )*/
//   //  setInterval(changeTime,1000);

//   //  if(first.hh!==0 && first.mm!==0 && first.ss!==0 )
//   //  setInterval(setalarm(),50000000000000)



//   const all=()=>{
//     alert("hhhhhh");
//   }

//   setInterval(all, (first.hh*60*60*1000)+(first.mm*60*1000)+(first.ss*60*1000));

//   return (
//     <div>
 
//  { (first.hh!==0 || first.mm!==0 || first.ss!==0 )&& <button  >Finish Time:   {tar}</button> }

//       </div>
//   )
// }
/*

import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props:any) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                
                
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;


*/







import React ,{useEffect,useState} from 'react'
export default function Time(props) {
  const [hours,sethours] = useState(props.hrs);
  const [ minutes, setMinutes ] = useState(props.min);
  const [seconds, setSeconds ] =  useState(props.sec);
//   const sethh=props.sethh;
//   const setmm=props.setmm;
//   const setss=props.setss;
  // 1 way is to set hrs , min and sec , before refresh of page in datbase by calling update api every time a refresh or closing operation is about to get performed 
  // 2nd way is to store data in local storage and rtreive data from localstorage before refresh of page or before performing close operations 
  // i will use 1st way only because local strage can only store till 5mb of data and in case of high-end application data may exceed 5mb . 
  useEffect(()=>{
  let myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
              props.setss(seconds-1);
          }
          if (seconds === 0) {
              if (minutes === 0) {
                 if(hours === 0 && minutes=== 0 && seconds=== 0 )
                 {

                  clearInterval(myInterval);
                //   alert("Hogya");
                  setMinutes(0);
                  props.setmm(0);
                  setSeconds(0);
                  props.setss(0);
                  props.sethh(0);
                  sethours(0);
                 }
                 else{
                  sethours(hours-1);
                  props.sethh(hours-1);
                  props.setmm(59);
                  setMinutes(59);
                  props.setss(59);
                  setSeconds(59);
                 }
              } else {
                  setMinutes(minutes - 1);
                  props.setmm(minutes-1);
                  props.setss(59);
                  setSeconds(59);
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
  });

  return (
      <div>
      { minutes === 0 && seconds === 0
          ? null
          : <h6><button>Time Left:{hours < 10 ? `0${hours}`:hours}:{minutes < 10 ? `0${minutes}`:minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</button></h6> 
      }
      </div>
  )
}

