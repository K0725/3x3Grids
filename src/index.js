import React, { useState } from "react";
import { render } from "react-dom";
import  './index.css';


function App() {

  const [counter, setCounter] = useState(0);
  
  const change = (e) => {
    setCounter(counter + 1);
    e.target.setAttribute( 'src', './images/plain-white-background.jpg');
    e.target.setAttribute('alt', 'dog');
  }

  

 


  function result(){
  render();{
    return(
      <div>
      <p>You clicked {this.state.counter} times</p>
    </div>

    )
    }
} 
  
  return (
    <div>
      <img className="singleImage" src = {"./images/C1.jpg"} alt="something" onClick={change}/>
      <img className="singleImage" src = {"./images/C2.jpg"} alt="something" onClick={change}/>
      <img className="singleImage" src = {"./images/C3.jpg"} alt="something"  onClick={change}/>
      <img className="singleImage" src = {"./images/C4.jpg"} alt="something" onClick={change}/>
      <img className="singleImage" src = {"./images/C5.jpg"} alt="something" onClick={change}/>
      <img className="singleImage" src = {"./images/C6.jpg"} alt="something"  onClick={change}/>
      <img className="singleImage" src = {"./images/C7.jpg"} alt="something"  onClick={change}/>
      <img className="singleImage" src = {"./images/C8.jpg"} alt="something" onClick={change}/>
      <img className="singleImage" src = {"./images/F10.jpg"} alt="something"  onClick={result}/>

    </div>
  );}


render(<App />, document.getElementById("app"));
