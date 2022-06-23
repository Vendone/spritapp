import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    let navigate = useNavigate();

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

    const handleCar = () => {
        navigate('/cars');
    }

    const handleNewCar = () => {
        navigate('/addcar');
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="screen__content">
                        <h1>Dashboard</h1>
                        <div className="content__field">
                            <p><strong>Fahrzeug</strong></p>
                            <p>{carStore.value[0] ? carStore.value[0].results[0].license_plate : 'kein Fahrzeug vorhanden'}</p>
                            {carStore.value[0] ? <button className="fa-solid fas fa-car dashbutton" onClick={handleCar}></button> : <button className="fa-solid fas fa-plus dashbutton" onClick={handleNewCar}></button>}

                        </div>
                        <div className="content__field">
                            <p>gesamt gefahrene Kilometer</p>
                            <p>{routeStore.value[0] ? routeStore.value[0].results[routeStore.value[0].results.length - 1].mileage_stop - routeStore.value[0].results[0].mileage_start : 0}</p>
                        </div>
                        <div className="content__field">
                            <p>Anzahl eingetragener Routen</p>
                            <p>{routeStore.value[0] ? routeStore.value[0].results.length : 0}</p>
                            <button className="fa-solid fas fa-route dashbutton"></button>
                        </div>
                        <div className="content__field">
                            <p>Durchschnitts Verbrauch</p>
                            <p>{routeStore.avg[0] ? routeStore.avg[0].avg + ' L/100km' : 0}</p>
                        </div>
                        <div className="content__field">
                            <p>letzte Tankrechnung</p>
                            <p><strong>muss noch eingebaut werden</strong></p>
                            <button className="fa-solid fas fa-gas-pump dashbutton"></button>
                        </div>
                        <div className="content__field">
                            <p>Kosten diesen Monat</p>
                            <p><strong>muss noch eingebaut werden</strong></p>
                        </div>
                        <div className="content__field">
                            <p>Kosten gesamt</p>
                            <p><strong>muss noch eingebaut werden</strong></p>
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