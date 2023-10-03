import React, { useState } from 'react'

function Increment_decrement() {
    let [num, updateNum] = useState(10)

    let increase = () => {
        updateNum(num + 1)
    }
    let decrease =()=>{
        updateNum(num - 1)
    }
    return (
        <div>
            <button onClick={increase}> + </button> &nbsp; &nbsp;
            <span> {num} </span> &nbsp; &nbsp;
            <button onClick={() => decrease()}> - </button>

        </div>
    )
}

export default Increment_decrement