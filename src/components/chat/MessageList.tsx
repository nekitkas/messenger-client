import React from 'react';
import Message from './Message.tsx';

interface MessageProps {
    id: number;
    text: string;
    sender: string;
    avatarUrl: string;
    own: boolean;
}

interface MessageListProps {
    messages: MessageProps[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    const messagesEndRef = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div>
            {messages?.map((msg) => (
                <Message
                    key={msg.id}
                    message={msg.text}
                    sender={msg.sender}
                    avatarUrl={msg.avatarUrl}
                    isOwnMessage={msg.own}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;
