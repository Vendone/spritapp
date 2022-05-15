import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadUser, selectUsers } from "../../features/User/userSlice";

export const UserCard = () => {
    const store = useSelector(selectUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch])

    return (
        <div className="card">
            <h3>User Card</h3>
            {(store.isLoading) ? <div className="loader"></div> : (store.value[0] === 'Failed to fetch') ? <div className="fail">x</div> :
                (store.value.length <= 0) ? <p>Keine Einträge vorhanden. Bitte ersten Eintrag hinzufügen</p> : store.value[0].map((user) => (
                    <div className="entry" key={user.id}>
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