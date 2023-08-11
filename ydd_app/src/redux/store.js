import {configureStore} from '@reduxjs/toolkit'
import ContentReducer from "./content"

const store = configureStore({
    reducer:{
        blogcontent:ContentReducer
    },
})

export default store