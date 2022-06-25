import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Daten laden
const ROUTES_URL = process.env.REACT_APP_SERVER_URL + '/routes';

export const loadRoute = createAsyncThunk(
    'routes/loadRoute',
    async () => {
        try {
            const response = await fetch(ROUTES_URL);
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            return err.message;
        }
    })

export const loadAvgFuel = createAsyncThunk(
    'routes/loadAvgFuel',
    async () => {
        try {
            const response = await fetch(ROUTES_URL + '/avgFuel/1');
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            return err.message;
        }
    })

//Daten senden
export const postRoute = createAsyncThunk(
    'routes/postRoute',
    async (body) => {
        try {
            await axios.post(ROUTES_URL, body);
        } catch (err) {
            return err.message;
        }
    }
)
// Daten ändern
export const updateAsyncRoute = createAsyncThunk(
    'routes/updateAsyncRoute',
    async (data) => {
        try {
            await axios.put(ROUTES_URL + data.id, data);
        } catch (err) {
            return err.message;
        }
    }
)
//Daten löschen
export const deleteAsyncRoute = createAsyncThunk(
    'routes/deleteRoutes',
    async (id) => {
        try {
            await axios.delete(ROUTES_URL + '/' + id)
        } catch (err) {
            return err.message;
        }
    }
)

const options = {
    name: 'routes',
    initialState: {
        value: [],
        avg: 0,
        isLoading: false,
        hasError: false
    },
    reducers: {
        addRoute: (state, action) => {
            state.value[0].unshift(action.payload);
        },
        updateRoute: (state, action) => {
            state.value[0].map((route) => {
                if (route.id === action.payload.id) {
                    route.date = action.payload.date;
                    route.start_point = action.payload.start_point;
                    route.end_point = action.payload.end_point;
                    route.mileage_start = action.payload.mileage_start;
                    route.mileage_stop = action.payload.mileage_stop;
                    route.avg_fuel_consumption = action.payload.avg_fuel_consumption;
                    route.car_id = action.payload.car_id;
                }
                return route;
            });
        },
        deleteRoute: (state, action) => {
            state.value[0] = state.value[0].filter((route) => action.payload.id !== route.id);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loadRoute.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadRoute.fulfilled, (state, action) => {
                state.value = action.payload.results;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadRoute.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(loadAvgFuel.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadAvgFuel.fulfilled, (state, action) => {
                state.avg = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadAvgFuel.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(postRoute.pending, (state, action) => { })
            .addCase(postRoute.fulfilled, (state, action) => { })
            .addCase(postRoute.rejected, (state, action) => { })
            .addCase(deleteAsyncRoute.pending, (state, action) => { })
            .addCase(deleteAsyncRoute.fulfilled, (state, action) => { })
            .addCase(deleteAsyncRoute.rejected, (state, action) => { })
            .addCase(updateAsyncRoute.pending, (state, action) => { })
            .addCase(updateAsyncRoute.fulfilled, (state, action) => { })
            .addCase(updateAsyncRoute.rejected, (state, action) => { })
    }
};

export const routeSlice = createSlice(options);

export const selectAllRoutes = (state) => state.routes;
export const routesError = (state) => state.routes.hasError;

export const { addRoute, updateRoute, deleteRoute } = routeSlice.actions;
export default routeSlice.reducer;