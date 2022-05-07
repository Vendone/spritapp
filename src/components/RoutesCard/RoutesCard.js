import React from "react";
import { useSelector } from "react-redux";

export const RoutesCard = () => {
    const store = useSelector((state) => state.routes.value[0]);

    const alarm = () => {
        alert('Hey wie gehts?');
    }

    return (
        <div className="card">
            <p>Ruten Card</p>
            {store.map((route) => (
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
            <button className="dashbutton" onClick={alarm}>Bearbeiten</button>
        </div>
    );
};