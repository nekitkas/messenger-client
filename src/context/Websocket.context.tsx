import React, {useState, createContext, ReactNode} from 'react'

type Conn = WebSocket | null

type WebSocketProviderProps = {
    children: ReactNode;
};

export const WebsocketContext = createContext<{
    conn: Conn
    setConn: (c: Conn) => void
}>({
    conn: null,
    setConn: () => {},
})

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
    const [conn, setConn] = useState<Conn>(null)

    return (
        <WebsocketContext.Provider
            value={{
                conn: conn,
                setConn: setConn,
            }}
        >
            {children}
        </WebsocketContext.Provider>
    )
}

