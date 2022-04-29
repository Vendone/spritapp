import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRoute } from "../../features/Routes/routeSlice";
import { useParams } from "react-router-dom";

export const UpdateRoute = () => {
    const cars = useSelector(state => state.cars);
    const routes = useSelector(state => state.routes);
    const dispatch = useDispatch();
    const params = useParams();
    const index = 0;
    const [date, setDate] = useState(routes.value[index].date);
    const [start, setStart] = useState(routes.value[index].start_point);
    const [end, setEnd] = useState(routes.value[index].end_point);
    const [mileageStart, SetMileageStart] = useState(routes.value[index].mileage_start);
    const [mileageEnd, setMileageEnd] = useState(routes.value[index].mileage_stop);
    const [avgConsumption, setAvgConsumption] = useState(routes.value[index].avg_fuel_consumption);

    const handleDate = (e) => {
        setDate(e.target.value);
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
        dispatch(updateRoute({
            id: 0,
            date: date,
            start_point: start,
            end_point: end,
            mileage_start: mileageStart,
            mileage_stop: mileageEnd,
            avg_fuel_consumption: avgConsumption,
            car_id: 1
        }));
    };
    return (
        <div>
            <h1>update Routes </h1>
            <div>
                <input type="datetime-local" name="date" id="date" defaultValue={date} onChange={handleDate} />
                <input type="text" name="start" id="start" defaultValue={start} onChange={handleStart} />
                <input type="text" name="end" id="end" defaultValue={end} onChange={handleEnd} />
                <input type="number" name="mileageStart" id="mileageStart" step="1" defaultValue={mileageStart} onChange={handleMileageStart} />
                <input type="number" name="mileageEnd" id="mileageEnd" step="1" defaultValue={mileageEnd} onChange={handleMileageEnd} />
                <input type="number" name="avgConsumtion" id="avgConsumtion" step="0.1" defaultValue={avgConsumption} onChange={handleAvgConsumption} />
                <select name="cars" id="cars">
                    {cars.map((car) => (<option defaultValue={car.id} key={car.id}>{car.license_plate}</option>))}
                </select>
                <input className="dashbutton" type="submit" onClick={handleClick} />
            </div>
        </div>
    );
}