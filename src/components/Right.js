
import { useContext, useEffect,useState} from "react";
import { ControlContext } from "../contexts/ControlContext";
import ControlRight from "./ControlRight";
import DelayTime from "./DelayTime";


const Right = () => {
  const { rightScreen ,setRightScreen} = useContext(ControlContext);
  console.log(rightScreen);
 
  
  const handleArrowUp = (id) => {
    
    const a = rightScreen.filter((control) => control.id === id)[0];
    // console.log(a);
    
    const index = rightScreen.indexOf(a);
    if(index===0){}
    else{const b = rightScreen[index - 1];

    // console.log(b);
    rightScreen[index - 1] = a;
    rightScreen[index] = b;
    console.log(rightScreen);
    setRightScreen([...rightScreen]);
    console.log(rightScreen);}
    
  };
  const handleArrowDown=(id)=>{
     const a = rightScreen.filter((control) => control.id === id)[0];
     // console.log(a);
     const index = rightScreen.indexOf(a);
     if(index===(rightScreen.length)-1){}
     else{const b = rightScreen[index + 1];

     // console.log(b);
     rightScreen[index + 1] = a;
     rightScreen[index] = b;
     console.log(rightScreen);
     setRightScreen([...rightScreen]);}
     
  };
  useEffect(() => {
    
    
  }, [rightScreen,setRightScreen])
  
 
  return (
    <div className="right_screen">
      {rightScreen?.map((control) => {
        return (
          <div>
            <DelayTime/>
            <ControlRight key={control.id} control={control} handleArrowUp={handleArrowUp} handleArrowDown={handleArrowDown} />
          </div>
        );
      })}
    </div>
  );
  
}

export default Right



  

 