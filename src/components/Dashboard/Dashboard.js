import React from 'react';
import { CarCard } from '../../components/CarCard/CarCard';
import { GasstationCard } from '../gasStationCard/GasStationCard';
import { RoutesCard } from '../RoutesCard/RoutesCard';
import { TankStopCard } from '../TankStopCard/TankStopCard';


export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='dashboard'>
                <CarCard />
                <GasstationCard />
                <RoutesCard />
                <TankStopCard />
            </div>
        </div>
    );
};