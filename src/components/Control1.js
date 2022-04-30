import React, { useState, useSyncExternalStore } from "react";

const Control1 = ({ control, handleAdd }) => {
  const [buttonActive, setButtonActive] = useState("");

  const handleChoice = (e) => {
    setButtonActive(e.target.id);
    //  if ( e.target.className==="zero" ) {
    //    e.target.style.background = "rgb(83, 177, 177)";
    //   e.target.parentElement.firstChild.style.background="none"
    //   }
    //   else if (e.target.className === "one") {
    //     e.target.style.background = "rgb(83, 177, 177)";
    //     e.target.parentElement.lastChild.style.background = "none";
    //   }
  };

  return (
    <div>
      <li className="control_1">
        <div className="name">{control.name}</div>
        <div className="icon">{control.icon}</div>
        <div className="control">
          <button
            id="one"
            className={buttonActive === "one" ? "one active" : "one"}
            value="1"
            onClick={handleChoice}
          >
            I
          </button>
          <button
            id="zero"
            className={buttonActive === "zero" ? "zero active" : "zero"}
            value="0"
            onClick={handleChoice}
          >
            0
          </button>
        </div>

        <button
          className="add"
          onClick={() => handleAdd(control.id, buttonActive)}
        >
          EKLE
        </button>
      </li>
    </div>
  );
};

export default Control1;
