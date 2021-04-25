import React, { useReducer } from 'react'
import CounterReducer,{Increment,Decrement, RESET} from './useReducer';

function Child2() {

    const [state,dispatch] = useReducer(CounterReducer,10);

    return (
        <div>
            <br/>
            <h1>This Component using UseReducer</h1>
            <h3>Child2 Component {state}</h3>
            <button onClick={()=>dispatch(Increment)}>Increment</button>
            <button onClick={()=>dispatch(Decrement)}>Decrement</button>
            <button onClick={()=>dispatch(RESET)}>RESET</button>
        </div>
    )
}

export default Child2
