import {useState,useEffect,useContext} from "react";
import './App.css';
import Quotes from "./components/Quotes"
import Axios from 'axios';
function App() {
  let randomColor = require('randomcolor'); // import the script
  const [track,setTrack]=useState(false)
  const [bg,setBg]=useState('');
  let color;
  useEffect(()=>{
    color=randomColor();
    setBg(color);
    
  },[track])

  return (
    <div style={{backgroundColor:bg}}className="App">
        <Quotes setTrack={setTrack} track={track} bg={bg}/>
    </div>
  );
}

export default App;
