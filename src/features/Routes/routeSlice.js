import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'routes',
    initialState: [],
    reducers: {
        addRoute: (state, action) => {
            state.push(action.payload);
        },
        updateRoute: (state, action) => {
            state.map((route) => {
                if (route.id === action.payload.id) {
                    route.date = action.payload.date;
                    route.start_point = action.payload.start_point;
                    route.end_point = action.payload.end_point;
                    route.mileage_start = action.payload.mileage_start;
                    route.mileage_stop = action.payload.mileage_stop;
                    route.avg_fuel_consumption = action.payload.avg_fuel_consumption;
                    route.car_id = action.payload.car_id;

                 }
            });
        },
        deleteRoute: (state, action) => {
            return state = state.filter((route) => action.payload.id !== route.id);
        },
    },
};

export const routeSlice = createSlice(options);

export const { addRoute, updateRoute, deleteRoute } = routeSlice.actions;
export default routeSlice.reducer;