import React, { useContext } from 'react'
import CounterContext from "./ContextApi"
function Child() {
    let Counter = useContext(CounterContext)
    console.log(Counter);
    return (
        <div>
            <h1>This Component using Context Api</h1>
            <h3>Child Component {Counter}</h3>
            <button onClick={()=>Counter[1](++Counter[0])}>Increment</button>
        </div>
    )
}




export default Child
