// import React from 'react'
// import Image from '../Capture.png'
// function Nowork() {
//   return (
//     <div className='mx-5' style={{}}>
//       <img src={Image}></img>
//     </div>
//   )
// }

// export default Nowork

import React from 'react';
import Image from './todo.png';

function Nowork() {
  const headingStyle = {
    background: 'radial-gradient(circle, #000000, rgb(88 199 228))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'lavender',
    fontFamily:"serif" 
    
    // backgroundColor:"red"
  };
  return (
    <div className='mx-5'>
      <h1 className='my-5 fa-fade' style={headingStyle}>ADD TODO LIST TO GET STARTED <i className="fa-solid fa-person-skiing"></i></h1>
      <img
        src={Image}
        alt='Description of the image'
        style={{
          width: '30%', // Set the width of the image
          height: 'auto', // Automatically adjust the height based on the width
          // borderRadius: '5px', // Apply a border radius to the image
          // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a box shadow to the image
          marginLeft:'25%',
          marginBottom:'2%',
        }}
      />
      
    </div>
  );
}

export default Nowork;

