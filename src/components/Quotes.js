import React,{useEffect,useState,useContext} from 'react'
import Axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import "../styles/quotes.css"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Quotes({bg,setTrack,track}) {

      
    function handleClick()
    {
        setTrack(preValue=>!preValue);
        
    }

    const [quotes,setQuotes]=useState([]);
    useEffect(()=>{
        const getData=()=>Axios.get("https://api.quotable.io/random").then((respond)=>setQuotes(respond.data));
        getData();
    },[track])
    
  return (
    <div className="main">
        <div className="container">
            
            <div className="quote">
        
                <h1 className={`content`}style={{color:bg}}>{quotes.content}<FormatQuoteIcon/></h1>
            
            </div>

            
            <div style={{color:bg}}className="author margin-style">
                <p><i className="fas fa-circle-notch fa-spin"></i> - {quotes.author}</p>
            </div>
            <div className="handles">
                <button style={{backgroundColor:bg}}className="btn" onClick={handleClick}>New quote</button>
            </div>

            
        </div>
    </div>
  )
}

export default Quotes