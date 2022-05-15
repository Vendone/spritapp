import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRoute, selectAllRoutes } from "../../features/Routes/routeSlice";
import { Link } from "react-router-dom";

export const RoutesCard = () => {
    const store = useSelector(selectAllRoutes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRoute());
    }, [dispatch])

    return (
        <div className="card">
            <h3>Ruten Card</h3>
            <div>
                {(store.value[0] === 'Failed to fetch') ? <p>Server fehler. Bitte später noch einmal probieren.</p> :
                    (store.value.length <= 0) ? <p>Keine Einträge vorhanden. Bitte ersten Eintrag hinzufügen</p> : store.value[0].map((route) => (
                        <div className="entry" key={route.id}>
                            <div className="row">
                                <div className="left"></div>
                                <div className="content title"><span>Start:</span></div>
                                <div className="content">{route.start_point}</div>
                                <div className="right"></div>
                            </div>
                            <div className="row">
                                <div className="left"></div>
                                <div className="content title"><span>Stop:</span></div>
                                <div className="content">{route.end_point}</div>
                                <div className="right"></div>
                            </div>
                            <div className="row">
                                <div className="left"></div>
                                <div className="content title"><span>KM-Start:</span></div>
                                <div className="content">{route.mileage_start}</div>
                                <div className="right"></div>
                            </div>
                            <div className="row">
                                <div className="left"></div>
                                <div className="content title"><span>KM-Ende:</span></div>
                                <div className="content">{route.mileage_stop}</div>
                                <div className="right"></div>
                            </div>
                            <div className="row">
                                <div className="left"></div>
                                <div className="content title"><span>&oslash; Verbrauch:</span></div>
                                <div className="content">{route.avg_fuel_consumption}</div>
                                <div className="right"></div>
                            </div>
                            <div className="row">
                                <div className="left"></div>
                                <div className="content title"><span>Auto:</span></div>
                                <div className="content">{route.car_id}</div>
                                <div className="right"></div>
                            </div>
                        </div>
                    ))}
            </div>
            <Link to={`/routes`} className='dashbutton'>Bearbeiten</Link>
        </div>
    );
};