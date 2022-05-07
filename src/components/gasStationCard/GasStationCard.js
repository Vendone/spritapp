import React from "react";
import { useSelector } from "react-redux";

export const GasStationCard = () => {
    const store = useSelector((state) => state.gasstations);

    const alarm = () => {
        alert('Hey wie gehts?');
    }
    return (
        <div className="card">
            <p>Tankstellen Card</p>
            {store.map((gasStation) => (
                <div key={gasStation.id}>
                    <div>
                        <h5>Name:</h5>
                        <p>{gasStation.name}</p>
                    </div>
                    <div>
                        <h5>Standort:</h5>
                        <p>{gasStation.location}</p>
                    </div>
                </div>
            ))}
            <button className="dashbutton" onClick={alarm}>Bearbeiten</button>
        </div>
    );
};