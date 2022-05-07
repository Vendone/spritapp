import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteRoute, selectAllRoutes, deleteAsyncRoute } from '../../features/Routes/routeSlice';
import { Link } from 'react-router-dom';

export const Rute = () => {
    const store = useSelector(selectAllRoutes);
    const dispatch = useDispatch();

    const handleClick = (obj) => {
        dispatch(deleteAsyncRoute(obj.id));
        dispatch(deleteRoute(obj));
    }

    return (
        <div>
            <h1>Routes</h1>
            {store.isLoading ? <p>Loading...</p> : <p></p>}
            {store.hasError ? <p>Error</p> : <p></p>}
            <div>

                {(store.length <= 0) ? <p>Keine Einträge vorhanden. Bitte ersten Eintrag hinzufügen</p> : store[0].map((obj) =>
                    <div className="store" key={obj.id}>
                        <div>
                            <h5>Datum:</h5>
                            <p>{obj.date}</p>
                        </div>
                        <div>
                            <h5>Start:</h5>
                            <p>{obj.start_point}</p>
                        </div>
                        <div>
                            <h5>Ende:</h5>
                            <p>{obj.end_point}</p>
                        </div>
                        <div>
                            <h5>KM-Stand Anfang:</h5>
                            <p>{obj.mileage_start}</p>
                        </div>
                        <div>
                            <h5>KM-Stand Ende:</h5>
                            <p>{obj.mileage_stop}</p>
                        </div>
                        <div>
                            <h5>gefahrene KM:</h5>
                            <p>{obj.mileage_stop - obj.mileage_start}</p>
                        </div>
                        <div>
                            <h5>durchschnittlicher Verbrauch:</h5>
                            <p>{obj.avg_fuel_consumption}</p>
                        </div>
                        <div>
                            <h5>Auto:</h5>
                            <p>{obj.car_id}</p>
                        </div>
                        <div>
                            <h5>Kosten:</h5>
                            <p>€ {(((obj.avg_fuel_consumption / 100) * (obj.mileage_stop - obj.mileage_start)) * 0.62).toFixed(2)}</p>
                        </div>
                        <div>
                            <button className="dashbutton" onClick={() => handleClick(obj)}>-</button>
                            <Link to={`/updateRoute/${obj.id}`} className='dashbutton'>Ändern</Link>
                        </div>
                    </div>
                )
                }
            </div>
            <div>
                <div>
                    <Link to="/addRoute" className="dashbutton">+</Link>
                </div>
            </div>
        </div >
    );
}