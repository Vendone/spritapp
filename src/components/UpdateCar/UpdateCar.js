import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { selectAllCars, updateAsyncCar, loadCars } from "../../features/Cars/carsSlice";


export const UpdateCar = () => {
    const cars = useSelector(selectAllCars);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let { carId } = useParams();
    const indexOfCar = cars.findIndex((car) => car.id === parseInt(carId));
    const [id] = useState(cars[indexOfCar].id);
    const [license_plate, setLicense_plate] = useState(cars[indexOfCar].license_plate);
    const [brand, setBrand] = useState(cars[indexOfCar].brand);
    const [modell, setModell] = useState(cars[indexOfCar].modell);
    const [fuel, setFuel] = useState(cars[indexOfCar].fuel);
    const [mileage, setMileage] = useState(cars[indexOfCar].mileage);
    const [construction_year, setConstruction_year] = useState(cars[indexOfCar].construction_year);
    const [description, setDescription] = useState(cars[indexOfCar].description);


    const handleLicensePlate = (e) => {
        setLicense_plate(e.target.value);
    };
    const handleBrand = (e) => {
        setBrand(e.target.value);
    };
    const handleModell = (e) => {
        setModell(e.target.value);
    };
    const handleFuel = (e) => {
        setFuel(e.target.value);
    };
    const handleMileage = (e) => {
        setMileage(e.target.value);
    };
    const handleConstructionYear = (e) => {
        setConstruction_year(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        const data = {
            id: id,
            license_plate: license_plate,
            brand: brand,
            modell: modell,
            fuel: fuel,
            mileage: mileage,
            construction_year: construction_year,
            description: description,
        };

        dispatch(updateAsyncCar(data));
        dispatch(loadCars());
        navigate('/cars');
    };

    const handleHome = () => {
        navigate('/');
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="screen__content">
                        <h1>Fahrzeug ändern</h1>
                        <div className="content__field">
                            <input type="text" name="license_plate" id="license_plate" value={license_plate} placeholder="Kennzeichen" onChange={handleLicensePlate} required />
                        </div>
                        <div className="content__field">
                            <input type="text" name="brand" id="brand" value={brand} placeholder="Marke" onChange={handleBrand} required />
                        </div>
                        <div className="content__field">
                            <input type="text" name="modell" id="modell" value={modell} placeholder="Model" onChange={handleModell} required />
                        </div>
                        <div className="content__field">
                            <input type="text" name="fuel" id="fuel" value={fuel} placeholder="Treibstoff" onChange={handleFuel} required />
                        </div>
                        <div className="content__field">
                            <input type="number" name="mileage" id="mileage" value={mileage} placeholder="KM-Stand" onChange={handleMileage} required />
                        </div>
                        <div className="content__field">
                            <input type="number" name="construction_year" id="construction_year" value={construction_year} placeholder="Baujahr" onChange={handleConstructionYear} required />
                        </div>
                        <div className="content__field">
                            <input type="text" name="description" id="description" value={description} placeholder="Beschreibung" onChange={handleDescription} />
                        </div>
                        <input type="submit" name="submit" className="" onClick={handleSubmit} />
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
        </div>
    );
}