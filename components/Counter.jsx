import React, { useState } from 'react'

const Counter = () => {

    const[count, setCount] = useState(0)

    function plusHandler(){
        setCount(count + 1);
        console.log(count)
    }

    function resetHandler(){
        setCount(0);
        console.log(count)
    }

    function minusHandler(){
        setCount(count - 1);
        console.log(count)
    }

  return (
    <div>
        <h1>Counter App</h1>
        <div>
            <h1>{count}</h1>
            <button onClick={plusHandler}>+</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={minusHandler}>-</button>
        </div>
    </div>
  )
}

export default Counter