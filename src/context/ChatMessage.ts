/*import {useContext} from "react";
import {ChatMessagesContext, ChatMessagesContextType} from "./ChatMessageProvider.tsx";*/

export enum MESSAGE_TYPE {
    Join = 'join',
    Leave = 'leave',
    Message = 'message',
    Error = 'error',
    AddRoom = 'add-room',
    RemoveRoom = 'remove-room',
}

export type ChatMessage = {
    type: MESSAGE_TYPE.Message;
    content: string;
    from: string;
    roomId: string;
};

export type AddRoomMessage = {
    type: MESSAGE_TYPE.AddRoom;
    roomId: string;
    roomName: string;
};

/*
export const useChatMessagesContext = (): ChatMessagesContextType => {
    const context = useContext(ChatMessagesContext);

    if (context === undefined) {
        throw new Error("useChatMessagesContext must be used within a ChatMessagesProvider");
    }

    return context;
};*/
