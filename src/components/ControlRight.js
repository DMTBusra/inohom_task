import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { ControlContext } from "../contexts/ControlContext";
const ControlRight = ({control,handleArrowUp,handleArrowDown}) => {
  const { choice } = useContext(ControlContext);
const { rightScreen,setRightScreen } = useContext(ControlContext);
  const handleDelete = (id)=> {
     setRightScreen(rightScreen.filter((control)=>control.id !== id));
   };
  
  return (
    <div>
      <div>
        <li className="control_right">
          <div className="name">{control.name}</div>
          <div className="icon">{control.icon}</div>
          <div className="control">{choice}</div>

          <div className="icons">
            <div className="arrowup">
              <FaArrowUp onClick={() => handleArrowUp(control.id)} />
            </div>
            <div className="arrowdown">
              <FaArrowDown onClick={() => handleArrowDown(control.id)} />
            </div>
            <div className="garbage" onClick={() => handleDelete(control.id)}>
              <RiDeleteBin6Line />
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default ControlRight;
