import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'cars',
    initialState: [
        {
            id: 1,
            license_plate: 'ZE-440IY',
            brand: 'Seat',
            modell: 'Ibiza',
            fuel: 'Benzin',
            mileage: 210000,
            construction_year: 2015,
            description: '',
            user_id: 1
        }
    ],
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