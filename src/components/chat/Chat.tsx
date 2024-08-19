import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// import useWebSocket from 'react-use-websocket';
import { useUser } from '../../context/User.context.tsx';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useMutation, useQuery } from '@tanstack/react-query';

export const Chat: React.FC = () => {
    const user = useUser();

    const { data } = useQuery({
        queryKey: ['messages'],
        queryFn: () =>
            fetch(
                'http://localhost:3000/messages/323640d4-a1bb-4ff9-9792-2413fdc0d54b'
            ).then((res) => res.json()),
    });

    const { mutate } = useMutation({
        mutationFn: (message) =>
            fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: message,
                    userId: user!.id,
                    chatId: '323640d4-a1bb-4ff9-9792-2413fdc0d54b',
                }),
            }).then((res) => res.json()),
    });

    const handleSendMessage = (message: string) => {
        mutate(message);
    };

    return (
        <Container>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <MessageList messages={data} />
                <MessageInput onSubmit={handleSendMessage} />
            </Stack>
        </Container>
    );
};
