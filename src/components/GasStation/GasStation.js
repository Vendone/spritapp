import React from "react";
import { Link } from "react-router-dom";
export const GasStations = () => {
    return (
        <div>
            <h1>Gas Stations</h1>
            <Link to={`/`} className='dashbutton'>Home</Link>
        </div>
    );
};