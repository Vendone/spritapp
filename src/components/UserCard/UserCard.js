import { useSelector } from "react-redux";

export const UserCard = () => {
    const store = useSelector((state) => state.user);
    return (
        <div className="card">
            <p>User Card</p>
            {store.map((user) => (
                <div key={user.id}>
                    <div>
                        <h5>Username:</h5>
                        <p>{user.first_name} {user.last_name}</p>
                    </div>
                    <div>
                        <h5>email:</h5>
                        <p>{user.email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};