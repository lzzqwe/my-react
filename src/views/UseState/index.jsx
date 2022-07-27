import React, { useState } from 'react';

const UseState = () => {
    const [count,setCount] = useState(0)
    const handleSet = () => {
        setCount((state) => {
         return [1,2,3,3]
        })
    }
    return (
        <div className="App">
        <p>{count}</p>
            <button onClick={handleSet}>增加</button>
        </div>
    )
}
export default UseState