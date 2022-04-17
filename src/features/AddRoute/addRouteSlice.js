import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'routes',
    initialState: [],
    reducers: {
        addRoute: (state, action) => {
            state.push(action.payload);
        },
        removeRoute: (state, action) => {
            state.filter(route => route.id !== action.payload.id)
        }
    }
}

export const routeSlice = createSlice(options);

export const { addRoute, removeRoute } = routeSlice.actions;
export default routeSlice.reducer;