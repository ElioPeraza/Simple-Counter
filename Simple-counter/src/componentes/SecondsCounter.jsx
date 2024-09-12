import React, { useEffect } from 'react'
import { useState } from 'react'



const SecondsCounter = () => {
  const [SecondsCounter, setSecondsCounter] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsCounter ( reset =>
        reset >= 3434 ? 0 : reset + 1 
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [SecondsCounter])




  return (

    <div>
      <h1>{SecondsCounter}</h1>
    </div>
  );
};


export default SecondsCounter;