import TextField from '@mui/material/TextField';
import React from "react";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from './Message.tsx';
import Container from "@mui/material/Container";

export const Chat: React.FC = () => {
    const messages = [
        { id: 1, text: 'Hello!', sender: 'Alice', avatarUrl: 'https://example.com/alice.jpg', own: false },
        { id: 2, text: 'Hi Alice, how are you?', sender: 'Bob', avatarUrl: 'https://example.com/bob.jpg', own: true },
        { id: 3, text: 'I’m doing well, thanks!', sender: 'Alice', avatarUrl: 'https://example.com/alice.jpg', own: false },
    ];

    return (
        <Container
            fixed
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Container>
                    {messages.map((msg =>
                            <ChatMessage
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
                        fullWidth label="Text"
                    />
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}