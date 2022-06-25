import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = process.env.REACT_APP_SERVER_URL + '/users';

export const loadUser = createAsyncThunk(
    'users/loadUser',
    async () => {
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL + '/auth/user');
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            return err.message;
        }
    })

//Daten senden
export const postUser = createAsyncThunk(
    'users/postUser',
    async (body) => {
        try {
            await axios.post(USER_URL + 'register', body);
        } catch (err) {
            return err.response;
        }
    }
)


// Daten ändern
export const updateAsyncUser = createAsyncThunk(
    'users/updateAsyncUser',
    async (data) => {
        try {
            await axios.put(USER_URL + data.id, data);
        } catch (err) {
            return err.message;
        }
    }
)
//Daten löschen
export const deleteAsyncUser = createAsyncThunk(
    'users/deleteAsyncUser',
    async (id) => {
        try {
            await axios.delete(USER_URL + '/' + id)
        } catch (err) {
            return err.message;
        }
    }
)

//Login
export const login = createAsyncThunk(
    'users/login',
    async (body) => {
        try {
            const user = await axios.post(USER_URL + 'login', body);
            sessionStorage.setItem('user', user.data.passport.user);
            console.log(user.data.passport.user);
        } catch (err) {
            return err.response;
        }
    }
)

//Logout
export const logout = createAsyncThunk(
    'users/logout',
    async () => {
        await fetch(process.env.REACT_APP_SERVER_URL + '/auth/logout', { method: 'POST' });
    })


// Slice Object
const options = {
    name: 'user',
    initialState:
    {
        value: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addUser: (state, action) => {
            state.value[0].unshift(action.payload);
        },
        updateUser: (state, action) => {
            state.value[0].map((user) => {
                if (user.id === action.payload.id) {
                    user.first_name = action.payload.first_name;
                    user.last_name = action.payload.last_name;
                    user.email = action.payload.email;
                }
                return user;
            });
        },
        deleteUser: (state, action) => {
            state.value[0] = state.value[0].filter((user) => action.payload.id !== user.id);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loadUser.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.value = action.payload.results;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(postUser.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(postUser.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(postUser.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(deleteAsyncUser.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(deleteAsyncUser.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(deleteAsyncUser.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(updateAsyncUser.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(updateAsyncUser.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(updateAsyncUser.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
}

export const usersSlice = createSlice(options);
export const selectUsers = (state) => state.user;
export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;