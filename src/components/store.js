import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/User/userSlice";
import routeSlice from "../features/AddRoute/addRouteSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        routes: routeSlice
    }
});

