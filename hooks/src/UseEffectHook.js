import React, {useEffect,useState} from 'react'

function UseEffectHook() {
    const [data,setData]=useState("");
    const [counr , setCount]=useState(0);

    useEffect(()=>{
        setData("Janvi");

    });
  return (
    <div>
        <h1>Hello</h1>
        <h1>{data}</h1>
        <h1>{counr}</h1>
        <button
         onClick={()=>{
            setCount(counr+1);
         }}>Click</button>
    </div>
  )
}

export default UseEffectHook