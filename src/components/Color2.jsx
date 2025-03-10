import React from 'react'
import { useSelector } from 'react-redux'

const Color2 = () => {

    const color = useSelector(state => state.color.color)

    return (
        <div style={{width : '200px', height : '200px', backgroundColor : color}}>
            <p style={{color : color === 'black' ? 'white' : 'black'}}>{color || "No color"}</p>
        </div>
    )
}

export default Color2