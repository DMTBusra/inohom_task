import React from 'react'

const Control1 = ({control,handleAdd}) => {
  
 const handleChoice = (e) => {
   
   
   if ( e.target.className==="zero" ) {
     e.target.style.background = "rgb(83, 177, 177)";
    e.target.parentElement.firstChild.style.background="none"
    }
    else if (e.target.className === "one") {
      e.target.style.background = "rgb(83, 177, 177)";
      e.target.parentElement.lastChild.style.background = "none";
    }
   
 
 };

  return (
    <div>
      <li className="control_1">
        <div className="name">{control.name}</div>
        <div className="icon">{control.icon}</div>
        <div className="control">
          <button className="one" value="1"onClick={handleChoice}>
            I
          </button>
          <button className="zero" value="0" onClick={handleChoice}>
            0
          </button>
        </div>
        
          <button className="add" onClick={() => handleAdd(control.id)}>
            EKLE
          </button>
        
      </li>
      
    </div>
  );
}

export default Control1