import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'tankstops',
    initialState: [
        {
            id: 1,
            gasstation_id: 1,
            fuel: 'Benzin',
            amount: 45.65,
            price: 1.596,
            milage: 210035,
            date: Date.now(),
            user_id: 1,
            car_id:1
        }
    ],
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