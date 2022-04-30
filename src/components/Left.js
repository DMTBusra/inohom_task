
import { useContext } from "react";
import {data} from "../components/data"
import Control1 from "./Control1"
import Control2 from "./Control2";
import {ControlContext} from "../contexts/ControlContext"
const Left = () => {
  const {rightScreen,setRightScreen}= useContext(ControlContext);
  console.log(rightScreen);
 

const handleAdd = (addedControlId) => {
    const add=(data.filter((control)=>control.id === addedControlId))[0]
    
    setRightScreen([...rightScreen,add]);
  };



  return (
    <div className="left_screen">
      {data.map((control)=>{
         if(control.type==="control1" ) {
           return <Control1 key={control.id} control={control} handleAdd={handleAdd}/>;
              
         }
         else{
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
  )
}

export default Left