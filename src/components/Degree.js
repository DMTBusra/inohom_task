import React from 'react'
import {useState} from "react"
const Degree = () => {
    const [degree, setDegree] = useState(25.0);

    const handleDegree=(e)=>{
        if(e.target.className==="plus"){
            setDegree(degree+0.5);
        }
        else{
            setDegree(degree-0.5)
        }
    }
  return (
    <div className="plus-minus">
      <button className="plus" onClick={handleDegree}>
        +
      </button>
      <p className="degree">{degree}</p>
      <button className="minus" onClick={handleDegree}>
        -
      </button>
    </div>
  );
}

export default Degree