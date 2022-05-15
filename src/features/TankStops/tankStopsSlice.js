import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TANKSTOPS_URL = 'http://192.168.0.233:4001/tankstops/';

export const loadTankstop = createAsyncThunk(
    'tankstops/loadTankstops',
    async () => {
        try {
            const response = await fetch(TANKSTOPS_URL);
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            return err.message;
        }
    })

//Daten senden
export const postTankstop = createAsyncThunk(
    'tankstops/postTankstops',
    async (body) => {
        try {
            await axios.post(TANKSTOPS_URL, body);
        } catch (err) {
            return err.message;
        }
    }
)
// Daten ändern
export const updateAsyncTankstop = createAsyncThunk(
    'tankstops/updateAsyncTankstops',
    async (data) => {
        try {
            await axios.put(TANKSTOPS_URL + data.id, data);
        } catch (err) {
            return err.message;
        }
    }
)
//Daten löschen
export const deleteAsyncTankstop = createAsyncThunk(
    'tankstops/deleteAsyncTankstops',
    async (id) => {
        try {
            await axios.delete(TANKSTOPS_URL + '/' + id)
        } catch (err) {
            return err.message;
        }
    }
)

// Slice Object
const options = {
    name: 'tankstops',
    initialState:
    {
        value: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addTankstop: (state, action) => {
            state.value[0].unshift(action.payload);
        },
        updateTankstop: (state, action) => {
            state.value[0].map((tankstop) => {
                if (tankstop.id === action.payload.id) {
                    tankstop.gasstation_id = action.payload.gasstation_id;
                    tankstop.fuel = action.payload.fuel;
                    tankstop.amount = action.payload.amount;
                    tankstop.price = action.payload.price;
                    tankstop.milage = action.payload.milage;
                    tankstop.date = action.payload.date;
                    tankstop.user_id = action.payload.user_id;
                    tankstop.car_id = action.payload.car_id;
                }
                return tankstop;
            });
        },
        deleteTankstop: (state, action) => {
            state.value[0] = state.value[0].filter((tankstop) => action.payload.id !== tankstop.id);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loadTankstop.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadTankstop.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadTankstop.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(postTankstop.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(postTankstop.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(postTankstop.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(deleteAsyncTankstop.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(deleteAsyncTankstop.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(deleteAsyncTankstop.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(updateAsyncTankstop.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(updateAsyncTankstop.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(updateAsyncTankstop.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
}

export const tankstopsSlice = createSlice(options);
export const selectTankstops = (state) => state.tankstops;
export const { addTankstop, updateTankstop, deleteTankstop } = tankstopsSlice.actions;
export default tankstopsSlice.reducer;