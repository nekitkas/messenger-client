import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message.tsx';
import { ChatMessage, MESSAGE_TYPE } from '../../context/ChatMessage.ts';
import Container from '@mui/material/Container';
import { WebsocketContext } from '../../context/Websocket.context.tsx';
import useWebSocket from 'react-use-websocket';
import { useUser } from '../../context/User.context.tsx';
// import {useMutation, useQuery} from "@tanstack/react-query";
// import { messageQueryKey, useChatMessagesContext } from "../../context/ChatMessageProvider";

const wsUrl = 'ws://localhost:3000/ws';

export const Chat: React.FC = () => {
    const messages = [
        {
            id: 1,
            text: 'Hello!',
            sender: 'Alice',
            avatarUrl: 'https://example.com/alice.jpg',
            own: false,
        },
        {
            id: 2,
            text: 'Hi Alice, how are you?',
            sender: 'Bob',
            avatarUrl: 'https://example.com/bob.jpg',
            own: true,
        },
        {
            id: 3,
            text: 'I’m doing well, thanks!',
            sender: 'Alice',
            avatarUrl: 'https://example.com/alice.jpg',
            own: false,
        },
    ];

    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState('');
    const user = useUser();
    console.log('user', user?.id);
    const { conn, setConn } = useContext(WebsocketContext);
    console.log('conn', conn);
    const userID = user.id.toString();
    const { sendJsonMessage, getWebSocket } = useWebSocket(
        wsUrl + `?userId=${userID}`
    );
    setConn(getWebSocket() as WebSocket);
    console.log('websocket set to ', conn);

    const onSubmit = () => {
        sendJsonMessage({
            type: MESSAGE_TYPE.Message,
            content: message,
            from: userID,
            roomId: 'lobby',
        });
        messages.push({
            id: messages.length + 1,
            text: message,
            sender: user.username,
            avatarUrl: 'https://example.com/you.jpg',
            own: true,
        });
        setMessage('');
    };

    return (
        <Container>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Container>
                    {messages?.map((msg) => (
                        <Message
                            key={msg.id}
                            message={msg.text}
                            sender={msg.sender}
                            avatarUrl={msg.avatarUrl}
                            isOwnMessage={msg.own}
                        />
                    ))}
                </Container>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <TextField
                        fullWidth
                        label="Text"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <Button
                        onClick={onSubmit}
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};
