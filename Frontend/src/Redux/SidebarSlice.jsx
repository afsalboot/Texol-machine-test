import {createSlice} from '@reduxjs/toolkit'

const sidebar = createSlice({
    name: "sidebar",
    initialState:{
        isOpen: true,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isOpen = !state.isOpen;
        },
    },
});

export const {toggleSidebar} = sidebar.actions;
export default sidebar.reducer;