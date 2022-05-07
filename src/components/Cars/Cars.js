import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cars = () => {
    const store = useSelector((state) => state.cars);

    return (
        <div>
            <h1>Cars</h1>
            <div>
                {store.map((car) =>
                    <div className="store" key={car.id}>
                        <div>
                            <h5>Kennzeichen:</h5>
                            <p>{car.license_plate}</p>
                        </div>
                        <div>
                            <h5>Marke:</h5>
                            <p>{car.brand}</p>
                        </div>
                        <div>
                            <h5>Modell:</h5>
                            <p>{car.modell}</p>
                        </div>
                        <div>
                            <h5>Kraftstoff:</h5>
                            <p>{car.fuel}</p>
                        </div>
                        <div>
                            <h5>KM-Stand:</h5>
                            <p>{car.mileage}</p>
                        </div>
                        <div>
                            <h5>Baujahr:</h5>
                            <p>{car.construction_year}</p>
                        </div>
                        <div>
                            <h5>Beschreibung:</h5>
                            <p>{car.description}</p>
                        </div>
                    </div>
                )
                }
            </div>
            <Link to={`/`} className='dashbutton'>Home</Link>
        </div>
    );
};