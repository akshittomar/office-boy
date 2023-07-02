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
import Image from '../Capture.png';

function Nowork() {
  return (
    <div className='mx-5'>
      <img
        src={Image}
        alt='Description of the image'
        style={{
          width: '30%', // Set the width of the image
          height: 'auto', // Automatically adjust the height based on the width
          borderRadius: '5px', // Apply a border radius to the image
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a box shadow to the image
          marginLeft:'25%',
        }}
      />
    </div>
  );
}

export default Nowork;

