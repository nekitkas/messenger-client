import { UserList } from './UserList'
import React from "react";
import {useUser} from "../context/User.context.tsx";

export const AuthView: React.FC = () => {
    const user = useUser();
    console.log("user here", user.username)
    if (!user) return <div>Loading...</div>
    return (
        <UserList />
    );
}