import { UserList } from './UserList'
import React from "react";
import {useUser} from "../context/User.context";
import {Chat} from "./chat/Chat";
import Stack from '@mui/material/Stack';

export const AuthView: React.FC = () => {
    const user = useUser();
    if (!user) return <div>Loading...</div>
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <UserList />
            <Chat />
        </Stack>
    );
}