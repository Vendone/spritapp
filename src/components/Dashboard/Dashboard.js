import React from 'react';
import { UserCard } from '../../components/UserCard/UserCard';
import { CarCard } from '../../components/CarCard/CarCard';
import { GasStationCard } from '../gasStationCard/GasStationCard';
import { RoutesCard } from '../RoutesCard/RoutesCard';
import { TankStopCard } from '../TankStopCard/TankStopCard';


export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className='dashboard'>
                <UserCard />
                <CarCard />
                <GasStationCard />
                <RoutesCard />
                <TankStopCard />
            </div>
        </div>
    );
};