import { createSlice } from "@reduxjs/toolkit";

// Slice Object
const options = {
    name: 'routes',
    initialState: [
        {
            id: 1,
            date: Date.now(),
            start_point: 'Saalfelden',
            end_ponit: 'Bischofshofen',
            mileage_start: 210000,
            mileage_stop: 210035,
            avg_fuel_consumption: 3.8,
            user_id: 1,
            car_id: 1
        }
    ],
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