import React, {useState} from 'react'

const FunctionalInputField = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <div>
                <p>{value}</p>
            </div>
            <input type="text" onChange={event => setValue(event.target.value)}/>
        </div>
    )
}

export default FunctionalInputField