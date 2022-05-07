import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const GasStationCard = () => {
    const store = useSelector((state) => state.gasstations);


    return (
        <div className="card">
            <h3>Tankstellen Card</h3>
            {store.map((gasStation) => (
                <div key={gasStation.id}>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Name:</span></div>
                        <div className="content">{gasStation.name}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Standort:</span></div>
                        <div className="content">{gasStation.location}</div>
                        <div className="right"></div>
                    </div>
                </div>
            ))}
            <Link to={`/gasstations`} className='dashbutton'>Bearbeiten</Link>
        </div>
    );
};