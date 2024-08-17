import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import useWebSocket from 'react-use-websocket';
import { useUser } from '../../context/User.context.tsx';
import { ChatMessage, MESSAGE_TYPE } from '../../context/ChatMessage.ts';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const url = 'ws://localhost:3000/ws';

interface Messages {
    id: number;
    text: string;
    sender: string;
    avatarUrl: string;
    own: boolean;
}

const isChatMessage = (message: any): message is ChatMessage => {
    return (
        typeof message === 'object' &&
        message !== null &&
        'type' in message &&
        'content' in message &&
        'from' in message &&
        'roomId' in message &&
        message.type === MESSAGE_TYPE.Message
    );
};

export const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Messages[]>([]);
    const user = useUser();
    if (!user) {
        return <div>user null </div>;
    }

    const userID = user.id.toString();
    const { sendJsonMessage, lastJsonMessage } = useWebSocket(
        url + `?userId=${userID}`
    );

    useEffect(() => {
        if (lastJsonMessage && isChatMessage(lastJsonMessage)) {
            setMessages((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    text: lastJsonMessage.content,
                    sender: lastJsonMessage.from,
                    avatarUrl: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${user.username}`,
                    own: lastJsonMessage.from === user.username,
                },
            ]);
        }
    }, [lastJsonMessage, user.username]);

    const handleSendMessage = (message: string) => {
        const formated: ChatMessage = {
            type: MESSAGE_TYPE.Message,
            content: message,
            from: user.username,
            roomId: 'lobby',
        };
        sendJsonMessage(formated);
    };

    return (
        <Container>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <MessageList messages={messages} />
                <MessageInput onSubmit={handleSendMessage} />
            </Stack>
        </Container>
    );
};
