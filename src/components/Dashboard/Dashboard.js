import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { CarCard } from '../../components/CarCard/CarCard';
import { loadCars, selectAllCars } from "../../features/Cars/carsSlice";
import { GasstationCard } from '../gasStationCard/GasStationCard';
import { loadGasstation, selectGasstations } from "../../features/GasStations/gasStationSlice";
import { RoutesCard } from '../RoutesCard/RoutesCard';
import { loadRoute, selectAllRoutes } from '../../features/Routes/routeSlice';
import { TankStopCard } from '../TankStopCard/TankStopCard';
import { loadTankstop, selectTankstops } from "../../features/TankStops/tankStopsSlice";
import { Logout } from '../Logout/Logout';

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
                            <CarCard />
                        </div>
                        <div className="content__field">
                            <GasstationCard />
                        </div>
                        <div className="content__field">
                            <RoutesCard />
                        </div>
                        <div className="content__field">
                            <TankStopCard />
                        </div>
                        <div className="content__field">
                            <Logout />
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