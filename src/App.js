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
            <li className="filter">
              <div>
                <input type="radio" id="all" name="filter" />
                <label for="all">Hepsi</label>
              </div>
              <div>
                <input type="radio" id="area" name="filter" />
                <label for="area">Alan</label>
              </div>
              <div>
                <input type="radio" id="type" name="filter" />
                <label for="all">Tip</label>
              </div>
              <div>
                <input type="radio" id="a-z" name="filter" />
                <label for="a-z">a-z</label>
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
