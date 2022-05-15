import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GASSTATION_URL = 'http://192.168.0.233:4001/gasstations/';

export const loadGasstation = createAsyncThunk(
    'gasstations/loadGasstation',
    async () => {
        try {
            const response = await fetch(GASSTATION_URL);
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            return err.message;
        }
    })

//Daten senden
export const postGasstation = createAsyncThunk(
    'gasstations/postGasstation',
    async (body) => {
        try {
            await axios.post(GASSTATION_URL, body);
        } catch (err) {
            return err.message;
        }
    }
)
// Daten ändern
export const updateAsyncGasstation = createAsyncThunk(
    'gasstations/updateAsyncGasstation',
    async (data) => {
        try {
            await axios.put(GASSTATION_URL + data.id, data);
        } catch (err) {
            return err.message;
        }
    }
)
//Daten löschen
export const deleteAsyncGasstation = createAsyncThunk(
    'gasstations/deleteAsyncGasstation',
    async (id) => {
        try {
            await axios.delete(GASSTATION_URL + '/' + id)
        } catch (err) {
            return err.message;
        }
    }
)

// Slice Object
const options = {
    name: 'gasstations',
    initialState:
    {
        value: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addGasstation: (state, action) => {
            state.value[0].unshift(action.payload);
        },
        updateGasstation: (state, action) => {
            state.value[0].map((gasstation) => {
                if (gasstation.id === action.payload.id) {
                    gasstation.name = action.payload.name;
                    gasstation.location = action.payload.loacation;
                }
                return gasstation;
            });
        },
        deleteGasstation: (state, action) => {
            state.value[0] = state.value[0].filter((gasstation) => action.payload.id !== gasstation.id);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loadGasstation.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadGasstation.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadGasstation.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(postGasstation.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(postGasstation.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(postGasstation.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(deleteAsyncGasstation.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(deleteAsyncGasstation.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(deleteAsyncGasstation.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(updateAsyncGasstation.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(updateAsyncGasstation.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(updateAsyncGasstation.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
}

export const gasstationsSlice = createSlice(options);
export const selectGasstations = (state) => state.cars;
export const { addGasstation, updateGasstation, deleteGasstation } = gasstationsSlice.actions;
export default gasstationsSlice.reducer;