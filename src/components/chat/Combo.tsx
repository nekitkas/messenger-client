import Container from '@mui/material/Container';
import SignIn from '../SignIn.tsx';
import SignUp from '../SignUp.tsx';
import React from 'react';

export const Combo: React.FC = () => {
    return (
        <Container>
            <SignIn />
            <SignUp />
        </Container>
    );
};
