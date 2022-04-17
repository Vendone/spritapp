import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'cars',
    initialState: [],
    reducers: {
        addCar: (state, action) => {
            state.push(action.payload);
        },
        removeCar: (state, action) => {
            state.filter(user => user.id !== action.payload.id)
        }
    }
}

export const carsSlice = createSlice(options);

export const { addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;