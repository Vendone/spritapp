import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'user',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            state.filter(user => user.id !== action.payload.id)
        }
    }
}

export const userSlice = createSlice(options);

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;