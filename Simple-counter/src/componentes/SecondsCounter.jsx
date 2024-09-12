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




  const dividir= String(SecondsCounter).padStart(6, '0'); // Aseguramos que el contador tenga 6 dígitos

  return (
    <h1>
      <i className="fa-solid fa-clock"></i>
      {dividir.split('').map((digit) => (
        <span className="counter-digit">{digit}</span>
      ))}
    </h1>
  );
};


export default SecondsCounter;