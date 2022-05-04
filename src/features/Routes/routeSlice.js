import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Daten laden
const ROUTES_URL = 'http://192.168.0.233:4001/routes';
export const loadRoute = createAsyncThunk(
    'routes/loadRoute',
    async () => {
        try {
            const response = await axios.get(ROUTES_URL)
            return response.data;
        } catch (err) {
            return err.message;
        }
    })
//
//Daten senden
export const postRoute = createAsyncThunk(
    'routes/postRoute',
    async (body) => {
        try {
            axios.post(ROUTES_URL, {
                "start_point": "test",
                "end_point": "end",
                "mileage_start": 123,
                "mileage_stop": 321,
                "avg_fuel_consumption": 5.5,
                "user_id": 1,
                "car_id": 1
            });
        } catch (err) {
            return err.message;
        }
    }
)
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
                    route.value.start_point = action.payload.start_point;
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
    extraReducers(builder) {
        builder
            .addCase(loadRoute.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadRoute.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadRoute.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(postRoute.pending, (state, action) => { })
            .addCase(postRoute.fulfilled, (state, action) => { })
            .addCase(postRoute.rejected, (state, action) => { })
    }
};

export const routeSlice = createSlice(options);

export const selectAllRoutes = (state) => state.routes.value;
export const routesError = (state) => state.routes.hasError;

export const { addRoute, updateRoute, deleteRoute } = routeSlice.actions;
export default routeSlice.reducer;