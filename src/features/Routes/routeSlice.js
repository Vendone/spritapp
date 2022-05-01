import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Daten laden
export const loadRoute = createAsyncThunk(
    'routes/loadRoute',
    async () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            response.json()
        }).catch(err => { console.log(err) })
    }
);

//
const options = {
    name: 'routes',
    initialState: {
        value: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addRoute: (state, action) => {
            state.value.push(action.payload);
        },
        updateRoute: (state, action) => {
            state.value.map((route) => {
                if (route.value.id === action.payload.id) {
                    route.value.date = action.payload.date;
                    route.value.value.start_point = action.payload.start_point;
                    route.value.end_point = action.payload.end_point;
                    route.value.mileage_start = action.payload.mileage_start;
                    route.value.mileage_stop = action.payload.mileage_stop;
                    route.value.avg_fuel_consumption = action.payload.avg_fuel_consumption;
                    route.value.car_id = action.payload.car_id;
                }
                return route;
            });
        },
        deleteRoute: (state, action) => {
            state.value = state.value.filter((route) => action.payload.id !== route.id);
        },
    },
    extraReducers: {
        [loadRoute.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadRoute.fulfilled]: (state, action) => {
            state.value.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadRoute.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
};

export const routeSlice = createSlice(options);

export const { addRoute, updateRoute, deleteRoute } = routeSlice.actions;
export default routeSlice.reducer;