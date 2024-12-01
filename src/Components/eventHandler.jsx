import React, { useState } from 'react'

const EventHandler = () => {

    const [value, setValue] = useState("");
    return (
        <div>
            <h3>Event Handler</h3>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  className='border-2 '/>
            <p>Typing value : {value}</p>
        </div>
    )
}

export default EventHandler
