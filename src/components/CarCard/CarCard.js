import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCars, selectAllCars } from "../../features/Cars/carsSlice";
import { Link } from "react-router-dom";

export const CarCard = () => {
    const store = useSelector(selectAllCars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCars());
    }, [dispatch])

    return (
        <div className="card">
            <h3>Car Card</h3>
            {(store.isLoading) ? <div className="loader"></div> : (store.value[0] === 'Failed to fetch' || store.value[0] === 'Unexpected token < in JSON at position 0') ? <div className="fail">x</div> :
                (store.value[0].error === "something broke") ? <p>Keine Einträge vorhanden. Bitte ersten Eintrag hinzufügen</p> : store.value[0].map((car) => (
                    <div className="entry" key={car.id}>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Kennzeichen:</span></div>
                            <div className="content">{car.license_plate}</div>
                            <div className="right"></div>
                        </div>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Marke:</span></div>
                            <div className="content">{car.brand}</div>
                            <div className="right"></div>
                        </div>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Modell:</span></div>
                            <div className="content">{car.modell}</div>
                            <div className="right"></div>
                        </div>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Treibstoff:</span></div>
                            <div className="content">{car.fuel}</div>
                            <div className="right"></div>
                        </div>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Baujahr:</span></div>
                            <div className="content">{car.construction_year}</div>
                            <div className="right"></div>
                        </div>
                        <div className="row">
                            <div className="left"></div>
                            <div className="content title"><span>Beschreibung:</span></div>
                            <div className="content">{car.description}</div>
                            <div className="right"></div>
                        </div>
                    </div>
                ))}
            <Link to={`/cars`} className='dashbutton'>Bearbeiten</Link>
        </div>
    );
}
