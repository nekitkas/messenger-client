import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface MessageInputProps {
    onSubmit: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (message.trim() !== '') {
            onSubmit(message);
            setMessage('');
        }
    };

    return (
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
                onClick={handleSubmit}
                variant="contained"
                endIcon={<SendIcon />}
            >
                Send
            </Button>
        </Stack>
    );
};

export default MessageInput;
