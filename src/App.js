import Left from "./components/Left"
import Right from './components/Right'
import { GiSaveArrow, GiCancel } from "react-icons/gi";
import "./App.css" 
import ControlContextProvider from "./contexts/ControlContext";

function App() {
  return (
    <ControlContextProvider>
      <div className="container">
        <div className="left">
          <div className="header">
            <li className="title">
              <div className="scenario">
                <p>SENARYOYU GİRİNİZ</p>
              </div>

              <div className="cancel_save">
                <div>
                  <button className="cancel">
                    <GiCancel />
                  </button>
                  <p className="text">İPTAL</p>
                </div>
                <div>
                  <button className="save">
                    <GiSaveArrow />
                  </button>
                  <p className="text">KAYDET</p>
                </div>
              </div>
            </li>
            
          </div>
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </ControlContextProvider>
  );
}

export default App;
