import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRoute } from "./addRouteSlice";


export const AddRoutes = () => {
    const cars = useSelector(state => state.cars);
    const routes  = useSelector(state => state.routes);
    const dispatch = useDispatch();

    const lengthMileage = routes.length - 1;
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [mileageStart, SetMileageStart] = useState(routes[lengthMileage].mileage_stop);
    const [mileageEnd, setMileageEnd] = useState('');
    const [avgConsumption, setAvgConsumption] = useState('');

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleTime = (e) => {
        setTime(e.target.value);
    };

    const handleStart = (e) => {
        setStart(e.target.value);
    };

    const handleEnd = (e) => {
        setEnd(e.target.value);
    };

    const handleMileageStart = (e) => {
        SetMileageStart(e.target.value);
    };

    const handleMileageEnd = (e) => {
        setMileageEnd(e.target.value);
    };

    const handleAvgConsumption = (e) => {
        setAvgConsumption(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(addRoute(
            {
                id: 3,
                date: Date.now(),
                start_point: 'Bischofshofen',
                end_point: 'Saalfelden',
                mileage_start: 210035,
                mileage_stop: 210070,
                avg_fuel_consumption: 7.6,
                user_id: 1,
                car_id: 1
            }));
    };

    return (
        <div>
            <h1>add Routes</h1>
            <div>
                <form action="/rute" onSubmit={handleSubmit}>
                    <input type="date" name="date" id="date" value={date} onChange={handleDate} required />
                    <input type="time" name="time" id="time" value={time} onChange={handleTime} required />
                    <input type="text" name="start" id="start" value={start} placeholder="Start" onChange={handleStart} required />
                    <input type="text" name="end" id="end" value={end} placeholder="Ende" onChange={handleEnd} required />
                    <input type="number" name="mileageStart" id="mileageStart" step="1" value={mileageStart} onChange={handleMileageStart} required />
                    <input type="number" name="mileageEnd" id="mileageEnd" step="1" value={mileageEnd} placeholder="km-Stand Ende" onChange={handleMileageEnd} required />
                    <input type="number" name="avgConsumtion" id="avgConsumtion" step="0.1" value={avgConsumption} placeholder="durchschnitts Verbrauch" onChange={handleAvgConsumption} required />
                    <select name="cars" id="cars">
                        {cars.map((car) => (<option value={car.id} key={car.id}>{car.license_plate}</option>))}
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}

