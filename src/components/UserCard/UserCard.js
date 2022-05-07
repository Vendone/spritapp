import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserCard = () => {
    const store = useSelector((state) => state.user);

    return (
        <div className="card">
            <h3>User Card</h3>
            {store.map((user) => (
                <div key={user.id}>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Username:</span></div>
                        <div className="content">{user.first_name} {user.last_name}</div>
                        <div className="right"></div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="content title"><span>Email:</span></div>
                        <div className="content">{user.email}</div>
                        <div className="right"></div>
                    </div>
                </div>
            ))}
            <Link to={`/user`} className='dashbutton'>Bearbeiten</Link>
        </div>
    );
};