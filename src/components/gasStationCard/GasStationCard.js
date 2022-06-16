import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectGasstations } from "../../features/GasStations/gasStationSlice";

export const GasstationCard = () => {
    const store = useSelector(selectGasstations);

    return (
        <div className="card">
            <h3>Tankstellen Card</h3>
            {(store.isLoading) ? <div className="loader"></div> : (store.value[0] === 'Failed to fetch' || store.value[0] === 'Unexpected token < in JSON at position 0') ? <div className="fail">x</div> :
                (store.value.length <= 0) ? <p>Keine Einträge vorhanden. Bitte ersten Eintrag hinzufügen</p> : store.value[0].results.map((gasstation) => (
                    <div className="entry" key={gasstation.id}>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Name:</span></div>
                            <div className="content">{gasstation.name}</div>
                            <div className="right"></div>
                        </div>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Standort:</span></div>
                            <div className="content">{gasstation.location}</div>
                            <div className="right"></div>
                        </div>
                    </div>
                ))}
            <Link to={`/gasstations`} className='dashbutton'>Bearbeiten</Link>
        </div>
    );
};