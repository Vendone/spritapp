import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { loadCars, selectAllCars } from "../../features/Cars/carsSlice";

export const Cars = () => {
    const carStore = useSelector(selectAllCars);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleAdd = () => {
        navigate('/addcar');
    }
    const handleHome = () => {
        navigate('/');
    }

    useEffect(() => {
        if (!carStore[0]) {
            dispatch(loadCars());
        }
    }, [dispatch, carStore])

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="screen__content">
                        <h1>Fahrzeuge</h1>
                        {carStore.map((car) =>
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
                                <Link to={`/cars/${car.id}`}><span className="fa-solid fas fa-pen dashbutton"></span></Link>
                                <i className="fa-solid fas fa-minus dashbutton" ></i>
                            </div>
                        )}
                        <button className="fa-solid fas fa-plus dashbutton" onClick={handleAdd}></button>
                        <button className="fa-solid fas fa-house-blank" onClick={handleHome}>Home</button>
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
        </div >
    );
};