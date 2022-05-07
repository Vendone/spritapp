import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRoute, selectAllRoutes } from "../../features/Routes/routeSlice";

export const RoutesCard = () => {
    const store = useSelector(selectAllRoutes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRoute());
    }, [dispatch])

    const alarm = () => {
        alert('Hey wie gehts?');
    }

    return (
        <div className="card">
            <p>Ruten Card</p>
            <div>
                {(store.length <= 0) ? <p>Keine Einträge vorhanden. Bitte ersten Eintrag hinzufügen</p> : store[0].map((route) => (
                    <div key={route.id}>
                        <div>
                            <h5>Start:</h5>
                            <p>{route.start_point}</p>
                        </div>
                        <div>
                            <h5>Stop:</h5>
                            <p>{route.end_point}</p>
                        </div>
                        <div>
                            <h5>KM-Start:</h5>
                            <p>{route.mileage_start}</p>
                        </div>
                        <div>
                            <h5>KM-Ende:</h5>
                            <p>{route.mileage_stop}</p>
                        </div>
                        <div>
                            <h5>durchschnittlicher Verbrauch:</h5>
                            <p>{route.avg_fuel_consumption}</p>
                        </div>
                        <div>
                            <h5>Auto:</h5>
                            <p>{route.car_id}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="dashbutton" onClick={alarm}>Bearbeiten</button>
        </div>
    );
};