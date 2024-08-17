import { Box, Avatar, Typography, Paper } from '@mui/material';
import React from 'react';

interface ChatMessageProps {
    message: string
    sender: string
    avatarUrl: string
    isOwnMessage: boolean
}

const Message: React.FC<ChatMessageProps> = ({ message, sender, avatarUrl, isOwnMessage }) => {
    return (
        <Box
            display="flex"
            justifyContent={isOwnMessage ? 'flex-end' : 'flex-start'}
            mb={2}
        >
            {!isOwnMessage && <Avatar src={avatarUrl} alt={sender} />}
            <Box
                ml={isOwnMessage ? 0 : 2}
                mr={isOwnMessage ? 2 : 0}
                maxWidth="60%"
            >
                <Paper
                    elevation={3}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: isOwnMessage ? '#E1FFC7' : '#FFFFFF',
                    }}
                >
                    <Typography variant="body1">{message}</Typography>
                    <Typography variant="caption" color="textSecondary" align={isOwnMessage ? 'right' : 'left'}>
                        {sender}
                    </Typography>
                </Paper>
            </Box>
            {isOwnMessage && <Avatar src={avatarUrl} alt={sender} />}
        </Box>
    );
};

export default Message;
