import React from 'react'
import Degree from './Degree';
const Control2 = ({control,handleAdd}) => {


  return (
    <div>
      <li className="control_2">
        <div className="name">{control.name}</div>
        <div className="icon">{control.icon}</div>
        <Degree/>
        
          <button className="add" onClick={() => handleAdd(control.id)}>
            EKLE
          </button>
        
      </li>
      
    </div>
  );
}

export default Control2