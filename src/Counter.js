
import React, { useState } from "react";
import "../src/Counter.css"

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
        
    };

    return (
        <div className="firstdiv" >
        
            <h1>Counter App</h1>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', 
            color: count === 0 ? 'blue' : count > 0 ? 'green' : 'red' }}>{count}</p>

            <div className="seconddiv">
                <button onClick={handleIncrement} className="incre" >Increment</button>
                <button onClick={handleDecrement} className="decre" >Decrement</button>
                <button onClick={handleReset} className="reset" >Reset</button>
            </div>
        </div>
    );
}

export default Counter;
