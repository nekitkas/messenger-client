import { UserList } from './UserList';
import React from 'react';
import { Chat } from './chat/Chat';
import Stack from '@mui/material/Stack';

export const AuthView: React.FC = () => {
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
};
