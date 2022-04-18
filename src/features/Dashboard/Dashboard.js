import { UserCard } from '../../components/UserCard/UserCard';
import { CarCard } from '../../components/CarCard/CarCard';

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <UserCard />
            <CarCard />
        </div>
    );
};