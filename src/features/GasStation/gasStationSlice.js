import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'gasstations',
    initialState: [
        {
            id: 1,
            name: 'Jet',
            location: 'Bischofshofen'
        }
    ],
    reducers: {
        addGasStation: (state, action) => {
            state.push(action.payload);
        },
        removeGasStation: (state, action) => {
            state.filter(GasStation => GasStation.id !== action.payload.id)
        }
    }
}

export const gasStationsSlice = createSlice(options);

export const { addGasStation, removeGasStation } = gasStationsSlice.actions;
export default gasStationsSlice.reducer;