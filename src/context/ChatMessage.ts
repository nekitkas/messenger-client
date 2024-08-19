export enum WebSocketEventType {
    JOIN_ROOM = 'join-room',
    LEAVE_ROOM = 'leave-room',
    NEW_MESSAGE = 'new-message',
}

export type JoinRoomMessage = {
    type: WebSocketEventType.JOIN_ROOM;
    roomId: string;
    userId: string;
};

export type LeaveRoomMessage = {
    type: WebSocketEventType.LEAVE_ROOM;
    roomId: string;
    userId: string;
};

export type NewChatMessage = {
    type: WebSocketEventType.NEW_MESSAGE;
    content: string;
    senderId: string;
    roomId: string;
};

export type WebSocketEvent =
    | JoinRoomMessage
    | LeaveRoomMessage
    | NewChatMessage;
