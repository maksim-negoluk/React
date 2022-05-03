import React, {useState} from "react"

const FunctionCounter = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return(
        <div>
            <div>{counter}</div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}

export default FunctionCounter