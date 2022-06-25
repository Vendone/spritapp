import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectAllCars } from "../../features/Cars/carsSlice";

export const Cars = () => {
    const carStore = useSelector(selectAllCars);
    let navigate = useNavigate();

    const handleAdd = () => {
        navigate('/addcar');
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="screen__content">
                        <h1>Fahrzeuge</h1>
                        {carStore.value[0].results.map((car) =>
                            <div className="content__field" key={car.id}>
                                <p><strong>Kennzeichen:</strong></p>
                                <p>{car.license_plate}</p>
                                <p><strong>Marke:</strong></p>
                                <p>{car.brand}</p>
                                <p><strong>Modell:</strong></p>
                                <p>{car.modell}</p>
                                <p><strong>Treibstoff:</strong></p>
                                <p>{car.fuel}</p>
                                <p><strong>KM-Stand:</strong></p>
                                <p>{car.mileage}</p>
                                <p><strong>Baujahr:</strong></p>
                                <p>{car.construction_year}</p>
                                {car.description ? <div><p><strong>Beschreibung:</strong></p>
                                    <p>{car.description}</p></div> : ''}
                                <button className="fa-solid fas fa-pen dashbutton"></button>
                            </div>
                        )}
                        <button className="fa-solid fas fa-plus dashbutton" onClick={handleAdd}></button>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape1"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape5"></span>
                </div>
            </div>
        </div>
    );
};