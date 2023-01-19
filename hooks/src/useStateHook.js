import {useState} from 'react'
import './App.css';

function UseStateHook() {
  const [text, setText] = useState("");
  let Message=(event)=>{
    const newText=event.target.value;
    setText(newText);
  }
  return (
    <div >
      <h1>What's on you Mind</h1>
      <br/>
      <br/>
      <input placeholder='Start Writing' onChange={Message}></input>
      <br/>
      <br/>
      <br/>
      <br/>
      {text}
    </div>
  );
}

export default UseStateHook;
