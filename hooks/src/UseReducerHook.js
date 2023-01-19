
import React, { useReducer } from "react";
const reducer=(state,action)=>{
    switch (action.type){
        case "INCREMENT":
            return{count: state.count+1, showText: state.showText};
        case "toggleShowtext":
            return{count: state.count, showText: !state.showText};
        default:
            return state;
    }
}
const UseReducerHook=()=> {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>Click and See!!</h1>
      <p>Count: {state.count}</p>
      <button
      onClick={()=>{
        dispatch({type:"INCREMENT"});
        dispatch({type:"toggleShowtext"});
      }}>
        Click Me!
      </button>
      {state.showText && <p>Welcome</p>}
    </div>
  );
}

export default UseReducerHook;
