import React from "react";
import { useSelector } from "react-redux";

export const TankStopCard = () => {
    const store = useSelector((state) => state.tankstops);

    const alarm = () => {
        alert('Hey wie gehts?');
    }
    return (
        <div className="card">
            <p>Tankstop Card</p>
            {store.map((tankstop) => (
                <div key={tankstop.id}>
                    <div>
                        <h5>Tankstelle:</h5>
                        <p>{tankstop.gasstation_id}</p>
                    </div>
                    <div>
                        <h5>Kraftstoff:</h5>
                        <p>{tankstop.fuel}</p>
                    </div>
                    <div>
                        <h5>Menge:</h5>
                        <p>{tankstop.amount}</p>
                    </div>
                    <div>
                        <h5>Preis pro Liter:</h5>
                        <p>{tankstop.price}</p>
                    </div>
                    <div>
                        <h5>KM-Stand:</h5>
                        <p>{tankstop.milage}</p>
                    </div>
                    <div>
                        <h5>Datum:</h5>
                        <p>{tankstop.date}</p>
                    </div>
                    <div>
                        <h5>Auto:</h5>
                        <p>{tankstop.car_id}</p>
                    </div>
                </div>
            ))}
            <button className="dashbutton" onClick={alarm}>Bearbeiten</button>
        </div>
    );
};