// import React, {createContext, ReactNode, useCallback, useContext, useEffect} from "react";
// import useWebSocket, { ReadyState } from "react-use-websocket";
// import {QueryClient, useQueryClient} from "@tanstack/react-query";
// import {MESSAGE_TYPE} from "./ChatMessage.ts";
//
// export type ChatMessagesContextType = {
//     canSendMessages: boolean;
//     sendMessage: (content: string) => void;
// }
//
// interface ChatMessagesProviderProps {
//     children: ReactNode;
// }
//
// export const ChatMessagesContext = createContext<ChatMessagesContextType | undefined>(undefined);
// const SOCKET_URL = "ws://localhost:3000/ws";
// // eslint-disable-next-line react-refresh/only-export-components
// export const messageQueryKey = ["messages"];
//
// export const ChatMessagesProvider: React.FC<ChatMessagesProviderProps> = ({ children }) => {
//     const {
//         sendMessage: sendMsg,
//         lastMessage,
//         readyState,
//     } = useWebSocket(SOCKET_URL, {
//         shouldReconnect: () => true,
//     });
//
//     const queryClient: QueryClient = useQueryClient();
//
//     const canSendMessages = readyState === ReadyState.OPEN;
//
//     useEffect(() => {
//         if (lastMessage && lastMessage.data) {
//             const message = JSON.parse(lastMessage.data);
//             switch (message.type) {
//                 case MESSAGE_TYPE.INITIAL_DATA:
//                     queryClient.setQueryData(messageQueryKey, () => {
//                         return payload;
//                     });
//                     break;
//                 case MESSAGE_TYPE.NEW_MESSAGE:
//                     queryClient.setQueryData(messageQueryKey, (oldData: never[]) => {
//                         return [...oldData, payload];
//                     });
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }, [lastMessage, queryClient]);
//
//     const sendMessage = useCallback(
//         (content: string) => {
//             if (canSendMessages)
//                 sendMsg(
//                     JSON.stringify({
//                         type: MESSAGE_TYPE.Message,
//                         content,
//                     }),
//                 );
//         },
//         [canSendMessages, sendMsg],
//     );
//
//     return (
//         <ChatMessagesContext.Provider value={{ canSendMessages, sendMessage }}>
//             {children}
//         </ChatMessagesContext.Provider>
//     );
// };
