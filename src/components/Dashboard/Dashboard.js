import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadCars, selectAllCars } from "../../features/Cars/carsSlice";
import { loadGasstation, selectGasstations } from "../../features/GasStations/gasStationSlice";
import { loadRoute, loadAvgFuel, selectAllRoutes } from '../../features/Routes/routeSlice';
import { loadTankstop, selectTankstops } from "../../features/TankStops/tankStopsSlice";

export const Dashboard = () => {
    const gasstationStore = useSelector(selectGasstations);
    const carStore = useSelector(selectAllCars);
    const routeStore = useSelector(selectAllRoutes);
    const tankstopStore = useSelector(selectTankstops);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!gasstationStore.value[0]) {
            dispatch(loadGasstation());
        }
        if (!carStore.value[0]) {
            dispatch(loadCars());
        }
        if (!routeStore.value[0]) {
            dispatch(loadRoute());
            dispatch(loadAvgFuel());
        }
        if (!tankstopStore.value[0]) {
            dispatch(loadTankstop());
        }

    }, [dispatch, gasstationStore.value, carStore.value, routeStore.value, tankstopStore.value])

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="screen__content">
                        <h1>Dashboard</h1>
                        <div className="content__field">
                            <p>gesamt gefahrene Kilometer</p>
                            <p>{routeStore.value[0] ? routeStore.value[0].results[routeStore.value[0].results.length - 1].mileage_stop - routeStore.value[0].results[0].mileage_start : 0}</p>
                        </div>
                        <div className="content__field">
                            <p>Anzahl eingetragener Routen</p>
                            <p>{routeStore.value[0] ? routeStore.value[0].results.length : 0}</p>
                        </div>
                        <div className="content__field">
                            <p>Durchschnitts Verbrauch</p>
                            <p>{routeStore.avg[0] ? routeStore.avg[0].avg + ' L/100km' : 0}</p>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape1"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape5"></span>
                </div>
            </div>
        </div>
    );
};