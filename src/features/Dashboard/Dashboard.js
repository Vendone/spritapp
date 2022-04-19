import { UserCard } from '../../components/UserCard/UserCard';
import { CarCard } from '../../components/CarCard/CarCard';

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className='dashboard'>
                <UserCard />
                <CarCard />
            </div>
        </div>
    );
};