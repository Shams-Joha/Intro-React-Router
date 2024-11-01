import { useLoaderData } from "react-router-dom";
import './Users.css'
import User from "../User/User";
const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <div className="user">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;