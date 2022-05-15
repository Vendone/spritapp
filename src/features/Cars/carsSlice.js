import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Daten laden
const CARS_URL = 'http://192.168.0.233:4001/cars/';

export const loadCars = createAsyncThunk(
    'cars/loadCars',
    async () => {
        try {
            const response = await fetch(CARS_URL);
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            return err.message;
        }
    })

//Daten senden
export const postCar = createAsyncThunk(
    'cars/postCar',
    async (body) => {
        try {
            await axios.post(CARS_URL, body);
        } catch (err) {
            return err.message;
        }
    }
)
// Daten ändern
export const updateAsyncCar = createAsyncThunk(
    'cars/updateAsyncCar',
    async (data) => {
        try {
            await axios.put(CARS_URL + data.id, data);
        } catch (err) {
            return err.message;
        }
    }
)
//Daten löschen
export const deleteAsyncCar = createAsyncThunk(
    'cars/deleteCars',
    async (id) => {
        try {
            await axios.delete(CARS_URL + '/' + id)
        } catch (err) {
            return err.message;
        }
    }
)

// Slice Object
const options = {
    name: 'cars',
    initialState:
    {
        value: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addCar: (state, action) => {
            state.value[0].unshift(action.payload);
        },
        updateCar: (state, action) => {
            state.value[0].map((car) => {
                if (car.id === action.payload.id) {
                    car.date = action.payload.date;
                    car.start_point = action.payload.start_point;
                    car.end_point = action.payload.end_point;
                    car.mileage_start = action.payload.mileage_start;
                    car.mileage_stop = action.payload.mileage_stop;
                    car.avg_fuel_consumption = action.payload.avg_fuel_consumption;
                    car.car_id = action.payload.car_id;
                }
                return car;
            });
        },
        deleteCar: (state, action) => {
            state.value[0] = state.value[0].filter((car) => action.payload.id !== car.id);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loadCars.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadCars.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadCars.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(postCar.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(postCar.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(postCar.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(deleteAsyncCar.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(deleteAsyncCar.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(deleteAsyncCar.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(updateAsyncCar.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(updateAsyncCar.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(updateAsyncCar.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
}

export const carsSlice = createSlice(options);

export const selectAllCars = (state) => state.cars;
export const carsError = (state) => state.cars.hasError;

export const { addCar, updateCar, deleteCar } = carsSlice.actions;
export default carsSlice.reducer;