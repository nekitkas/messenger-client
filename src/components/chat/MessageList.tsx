import React from 'react';
import Message from './Message.tsx';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface MessageProps {
    id: string;
    content: string;
    sender: string;
    avatarUrl: string;
    own: boolean;
}

interface MessageListProps {
    messages: MessageProps[];
}

const renderRow = (props: ListChildComponentProps<MessageProps[]>) => {
    const { style, index, data } = props;
    const message: MessageProps = data
        ? data[index]
        : { username: 'Loading...' };
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <Message
                key={message.id}
                message={message.content}
                sender={message.sender}
                avatarUrl={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${message.sender}`}
                isOwnMessage={true}
            />
        </ListItem>
    );
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    const messagesEndRef = React.createRef<HTMLDivElement>();
    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box
            sx={{
                width: '100%',
                height: 400,
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={46}
                itemCount={messages?.length || 0}
                overscanCount={5}
                itemData={messages}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
};

export default MessageList;
