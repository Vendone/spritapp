import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loadCars, selectAllCars } from "../../features/Cars/carsSlice";
import { loadGasstation, selectGasstations } from "../../features/GasStations/gasStationSlice";
import { loadRoute, loadAvgFuel, selectAllRoutes, selectAvg } from '../../features/Routes/routeSlice';
import { loadTankstop, selectTankstops } from "../../features/TankStops/tankStopsSlice";

export const Dashboard = () => {
    const gasstationStore = useSelector(selectGasstations);
    const carStore = useSelector(selectAllCars);
    const routeStore = useSelector(selectAllRoutes);
    const avgStore = useSelector(selectAvg);
    const tankstopStore = useSelector(selectTankstops);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (!gasstationStore[0]) {
            dispatch(loadGasstation());
        }
        if (!carStore[0]) {
            dispatch(loadCars());
        }
        if (!routeStore[0]) {
            dispatch(loadRoute());
            dispatch(loadAvgFuel());
        }
        if (!tankstopStore[0]) {
            dispatch(loadTankstop());
        }
    }, [dispatch, gasstationStore, carStore, routeStore, tankstopStore])

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
                            <p><strong>Fahrzeuge</strong></p>
                            <p>{carStore.length}</p>
                            <button className="fa-solid fas fa-car dashbutton" onClick={handleCar}></button>
                            <button className="fa-solid fas fa-plus dashbutton" onClick={handleNewCar}></button>
                        </div>
                        <div className="content__field">
                            <p><strong>gesamt gefahrene Kilometer</strong></p>
                            <p>{!routeStore[0] ? '0' : routeStore[routeStore.length - 1].mileage_stop - routeStore[0].mileage_stop}</p>

                        </div>
                        <div className="content__field">
                            <p><strong>Anzahl eingetragener Routen</strong></p>
                            <p>{routeStore.length}</p>
                            <button className="fa-solid fas fa-route dashbutton"></button>
                        </div>
                        <div className="content__field">
                            <p><strong>Durchschnitts Verbrauch</strong></p>
                            <p>{avgStore} Liter/100km</p>
                        </div>
                        <div className="content__field">
                            <p><strong>letzte Tankrechnung</strong></p>
                            <p>Datum: {tankstopStore[0].date}</p>
                            <p>Tankstelle: {tankstopStore[0].gasstation_id} Name muss noch ausgelesen werden</p>
                            <p>Treibstoff: {tankstopStore[0].fuel}</p>
                            <p>Menge: {tankstopStore[0].amount} Liter</p>
                            <p>Preis: € {tankstopStore[0].price} </p>
                            <p>Km-Stand: {tankstopStore[0].milage} </p>
                            <p>Fahrzeug: {tankstopStore[0].car_id} Name muss noch ausgelesen werden</p>
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