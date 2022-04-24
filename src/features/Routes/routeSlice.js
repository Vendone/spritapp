import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'routes',
    initialState: [],
    reducers: {
        addRoute: (state, action) => {
            state.push(action.payload);
        },
        removeRoute: (state, action) => {
            return state = state.filter((route) => action.payload.id !== route.id);
        },
    },
};

export const routeSlice = createSlice(options);

export const { addRoute, removeRoute } = routeSlice.actions;
export default routeSlice.reducer;