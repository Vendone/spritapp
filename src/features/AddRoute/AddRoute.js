import { useSelector, useDispatch } from "react-redux";

export const AddRoute = () => {
    const store = useSelector((state) => state.routes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Routes</h1>
            <div>
            {store.map((obj) => 
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
                    <h5>durchschnittlicher Verbrauch:</h5>
                    <p>{obj.avg_fuel_consumption}</p>
                </div>
                <div>
                    <h5>Auto:</h5>
                    <p>{obj.car_id}</p>
                </div>
            </div>
            )
            }
            </div>
        </div>
    );
}

