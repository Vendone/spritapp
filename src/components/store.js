import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/User/userSlice";
import routeSlice from "../features/AddRoute/addRouteSlice";
import carsSlice from "../features/Cars/carsSlice";
import tankStopsSlice from "../features/TankStops/tankStopsSlice";
import gasStationsSlice from "../features/GasStation/gasStationSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        routes: routeSlice,
        cars: carsSlice,
        tankstops: tankStopsSlice,
        gasstations: gasStationsSlice
    }
});

