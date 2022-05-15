import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadTankstop, selectTankstops } from "../../features/TankStops/tankStopsSlice";

export const TankStopCard = () => {
    const store = useSelector(selectTankstops);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTankstop());
    }, [dispatch])

    return (
        <div className="card">
            <h3>Tankstop Card</h3>
            {(store.isLoading) ? <div className="loader"></div> : (store.value[0] === 'Failed to fetch' || store.value[0] === 'Unexpected token < in JSON at position 0') ? <div className="fail">x</div> :
                (store.value.length <= 0) ? <p>Keine Einträge vorhanden. Bitte ersten Eintrag hinzufügen</p> : store.value[0].map((tankstop) => (
                    <div className="entry" key={tankstop.id}>
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