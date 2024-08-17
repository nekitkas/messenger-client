import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

interface MessageProps {
    message: string;
    sender: string;
    avatarUrl: string;
    isOwnMessage: boolean;
}

const Message: React.FC<MessageProps> = ({
    message,
    sender,
    avatarUrl,
    isOwnMessage,
}) => {
    return (
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={isOwnMessage ? 'flex-end' : 'flex-start'}
            sx={{
                mb: 2,
                textAlign: isOwnMessage ? 'right' : 'left',
            }}
        >
            {!isOwnMessage && <Avatar alt={sender} src={avatarUrl} />}
            <Paper
                elevation={3}
                sx={{
                    padding: '10px 20px',
                    backgroundColor: isOwnMessage ? '#DCF8C6' : '#FFFFFF',
                    maxWidth: '70%',
                }}
            >
                <Typography variant="body2" color="textSecondary">
                    {sender}
                </Typography>
                <Typography variant="body1">{message}</Typography>
            </Paper>
            {isOwnMessage && <Avatar alt={sender} src={avatarUrl} />}
        </Stack>
    );
};

export default Message;
