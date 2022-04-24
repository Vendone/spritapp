import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRoute } from "../Routes/routeSlice";

export const AddRoutes = () => {
    const cars = useSelector(state => state.cars);
    const routes = useSelector(state => state.routes);
    const dispatch = useDispatch();

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [mileageStart, SetMileageStart] = useState('');
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
    const handleClick = () => {
        dispatch(addRoute({
            id: (routes.length <= 0) ? 0 : routes[routes.length - 1].id + 1,
            date: date,
            start_point: start,
            end_point: end,
            mileage_start: mileageStart,
            mileage_stop: mileageEnd,
            avg_fuel_consumption: avgConsumption,
            user_id: 1,
            car_id: 1
        }));
    };
    return (
        <div>
            <h1>add Routes</h1>
            <div>
                <input type="date" name="date" id="date" value={date} onChange={handleDate} />
                <input type="time" name="time" id="time" value={time} onChange={handleTime} />
                <input type="text" name="start" id="start" value={start} placeholder="Start" onChange={handleStart} />
                <input type="text" name="end" id="end" value={end} placeholder="Ende" onChange={handleEnd} />
                <input type="number" name="mileageStart" id="mileageStart" step="1" value={mileageStart} placeholder="km-Stand Anfang" onChange={handleMileageStart} />
                <input type="number" name="mileageEnd" id="mileageEnd" step="1" value={mileageEnd} placeholder="km-Stand Ende" onChange={handleMileageEnd} />
                <input type="number" name="avgConsumtion" id="avgConsumtion" step="0.1" value={avgConsumption} placeholder="durchschnitts Verbrauch" onChange={handleAvgConsumption} />
                <select name="cars" id="cars">
                    {cars.map((car) => (<option value={car.id} key={car.id}>{car.license_plate}</option>))}
                </select>
                <input className="dashbutton" type="submit" onClick={handleClick} />
            </div>
        </div>
    );
}



