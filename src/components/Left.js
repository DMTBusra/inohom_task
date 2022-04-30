
import { useContext, useState } from "react";
import {data as initialdata} from "../components/data"
import Control1 from "./Control1"
import Control2 from "./Control2";
import {ControlContext} from "../contexts/ControlContext"
import Filter from "./Filter"

const Left = () => {
  const {rightScreen,setRightScreen}= useContext(ControlContext);
  console.log(rightScreen);
 const [data, setData] = useState(initialdata)
 
console.log(data);
const handleAdd = (addedControlId, buttonActive) => {
  const add = data.filter((control) => control.id === addedControlId)[0];
  setRightScreen([...rightScreen, { ...add, buttonActive }]);
};



  return (
    <div>
      <Filter  setData={setData}/>
      <div className="left_screen">
        {data.map((control) => {
          if (control.type === "control1") {
            return (
              <Control1
                key={control.id}
                control={control}
                handleAdd={handleAdd}
              />
            );
          } else {
            return (
              <Control2
                key={control.id}
                control={control}
                handleAdd={handleAdd}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Left