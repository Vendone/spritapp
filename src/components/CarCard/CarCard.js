import { useSelector } from "react-redux";

export const CarCard = () => {
    const store = useSelector((state) => state.cars);
    return (
        <div className="card">
            <p>Car Card</p>
            {store.map((car) => (
                <div key={car.id}>
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
                        <h5>Treibstoff:</h5>
                        <p>{car.fuel}</p>
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
            ))}
        </div>
    );
}