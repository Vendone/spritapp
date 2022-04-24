import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
    const store = useSelector((state) => state.user);

    return (
        <div>
            <h1>User</h1>
            {store.map((user) =>
                <div className="store" key={user.id}>
                    <div>
                        <h5>User id:</h5>
                        <p>{user.id}</p>
                    </div>
                    <div>
                        <h5>First Name:</h5>
                        <p>{user.first_name}</p>
                    </div>
                    <div>
                        <h5>Last Name:</h5>
                        <p>{user.last_name}</p>
                    </div>
                    <div>
                        <h5>Email:</h5>
                        <p>{user.email}</p>
                    </div>
                </div>
            )}
        </div>
    );
}