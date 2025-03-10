import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { setColor } from './ToggleSlice'

const Color1 = () => {

    const [color, setColorInput] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const newColor = e.target.value
        setColorInput(newColor)
        dispatch(setColor(newColor))
    }

    return (
        <div>
            <input type="text" value={color} onChange={handleChange} />
        </div>
    )
}

export default Color1