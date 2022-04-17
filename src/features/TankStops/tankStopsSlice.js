import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'tankstops',
    initialState: [],
    reducers: {
        addTankStop: (state, action) => {
            state.push(action.payload);
        },
        removeTankStop: (state, action) => {
            state.filter(tankStop => tankStop.id !== action.payload.id)
        }
    }
}

export const tankStopsSlice = createSlice(options);

export const { addTankStop, removeTankStop } = tankStopsSlice.actions;
export default tankStopsSlice.reducer;