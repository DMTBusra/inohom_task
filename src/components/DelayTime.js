import React from 'react'
import {useState} from "react"
const DelayTime = () => {
 const [time, setTime] = useState(0);

 const handleTime = (e) => {
   if (e.target.className === "reduce_ten") {
     setTime(time - 10);
   } else if (e.target.className === "reduce_one") {
     setTime(time - 1);
   } else if (e.target.className === "raise_ten") {
     setTime(time + 10);
   } else if (e.target.className === "raise_one") {
     setTime(time + 1);
   }
 };

  return (
    <div>
      <li className="delay_time_screen">
        <div className="name">Gecikme Süresi</div>
        <div className="negative">
          <button className="reduce_ten" onClick={handleTime}>
            -10
          </button>
          <button className="reduce_one" onClick={handleTime}>
            -1
          </button>
        </div>
        <div className="delay_time">{time} sn</div>
        <div className="positive">
          <button className="raise_one" onClick={handleTime}>
            +1
          </button>
          <button className="raise_ten" onClick={handleTime}>
            +10
          </button>
        </div>
      </li>
    </div>
  );
}

export default DelayTime