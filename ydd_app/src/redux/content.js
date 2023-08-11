import { createSlice } from "@reduxjs/toolkit";
import idocument from "../component/document";


const ContentSlice = createSlice({
    name:"content",
    initialState:{
        contentvalue:idocument
    },

    reducers:{
        updatecontentlist:(state,action)=>{
            const tom = action.payload
            console.log(tom);
            state.contentvalue = [...state.contentvalue,action.payload]
        }
    },
})
export const {updatecontentlist} = ContentSlice.actions;

export default ContentSlice.reducer