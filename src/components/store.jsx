import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './ToggleSlice'

const store = configureStore({
    reducer : {
        color : colorReducer
    }
})

export default store