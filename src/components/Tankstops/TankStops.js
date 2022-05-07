import React from "react";
import { Link } from "react-router-dom";
export const TankStops = () => {
    return (
        <div>
            <h1>Tank Stops</h1>
            <Link to={`/`} className='dashbutton'>Home</Link>
        </div>
    );
};