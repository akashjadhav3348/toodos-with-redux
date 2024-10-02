import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ['Read a News', 'Watch a Movie', 'Read a Book', 'Play Games', 'Listen Music', 'Sleep', 'Code']
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
        delete: (state, action) => {
            const index = action.payload
            state.value.splice(index, 1)
        },
        edit: (state, action) => {
            const updateText = action.payload.text
            const index = action.payload.index
            
            state.value[index] = updateText
        },
    },
}) 

export const { add, delete: deleteTodo, edit } = todoSlice.actions
export default todoSlice.reducer