import React from 'react';
import { CarCard } from '../../components/CarCard/CarCard';
import { GasstationCard } from '../gasStationCard/GasStationCard';
import { RoutesCard } from '../RoutesCard/RoutesCard';
import { TankStopCard } from '../TankStopCard/TankStopCard';
import { Logout } from '../Logout/Logout';

export const Dashboard = () => {
    //const store = useSelector(selectUsers);
    //const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="screen__content">
                        <h1>Dashboard</h1>
                        <div className="content__field">
                            <CarCard />
                        </div>
                        <div className="content__field">
                            <GasstationCard />
                        </div>
                        <div className="content__field">
                            <RoutesCard />
                        </div>
                        <div className="content__field">
                            <TankStopCard />
                        </div>
                        <div className="content__field">
                            <Logout />
                        </div>
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