import { createContext ,useState,useEffect} from "react";

export const ControlContext = createContext();


const ControlContextProvider = (props)=>{
    const [rightScreen, setRightScreen] = useState([]);
    

  // useEffect(() => {
    
  //     setRightScreen(rightScreen);
    
  // }, [rightScreen]);
 
 

    return (
      <ControlContext.Provider
        value={{ rightScreen, setRightScreen }}
      >
        {props.children}
      </ControlContext.Provider>
    );
};
export default ControlContextProvider