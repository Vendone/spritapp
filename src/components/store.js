import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice";
import routesReducer from "../features/Routes/routeSlice";
import carsReducer from "../features/Cars/carsSlice";
import tankStopsReducer from "../features/TankStops/tankStopsSlice";
import gasStationsReducer from "../features/GasStations/gasStationSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        routes: routesReducer,
        cars: carsReducer,
        tankstops: tankStopsReducer,
        gasstations: gasStationsReducer
    }
});

