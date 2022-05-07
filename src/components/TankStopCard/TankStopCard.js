import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const TankStopCard = () => {
    const store = useSelector((state) => state.tankstops);

    return (
        <div className="card">
            <h3>Tankstop Card</h3>
            {store.map((tankstop) => (
                <div key={tankstop.id}>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Tankstelle:</span></div>
                        <div className="content">{tankstop.gasstation_id}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Kraftstoff:</span></div>
                        <div className="content">{tankstop.fuel}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Menge:</span></div>
                        <div className="content">{tankstop.amount}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Preis pro Liter:</span></div>
                        <div className="content">{tankstop.price}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>KM-Stand:</span></div>
                        <div className="content">{tankstop.milage}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Datum:</span></div>
                        <div className="content">{tankstop.date}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Auto:</span></div>
                        <div className="content">{tankstop.car_id}</div>
                        <div className="right"></div>
                    </div>
                </div>
            ))}
            <Link to={`/tankstops`} className='dashbutton'>Bearbeiten</Link>
        </div>
    );
};