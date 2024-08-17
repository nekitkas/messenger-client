import { UserList } from './UserList'
import React from "react";
import {useUser} from "../context/User.context";
import {Chat} from "./chat/Chat";
import Stack from '@mui/material/Stack';

export const AuthView: React.FC = () => {
    const user = useUser();
    console.log('user', user)

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