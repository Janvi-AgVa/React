import React ,{useState,useMemo} from 'react'

function UseMemoHook() {
 const [count, setcount] = useState(0);   
 const [state, setstate] = useState(10);
 const multiCountMemo=useMemo(function multiCount(){
    console.warn("muliCount");
    return count*9;
 },[count])
  return (
    <div>
        <h1>Count:{count}</h1>
        <h1>State:{state}</h1>
        <h1>{multiCountMemo}</h1>
        <button onClick={()=>setcount(count+1)}>Update count</button>
        <button onClick={()=>setstate(state*9)}>Upate state</button>
    </div>
  )
}

export default UseMemoHook