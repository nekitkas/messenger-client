import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useReactQuerySubscription = (userId: string) => {
    const queryClient = useQueryClient();
    useEffect(() => {
        const websocket = new WebSocket(`ws://localhost:3000/${userId}`);
        websocket.onmessage = (event) => {
            console.log('event', event.data);
            //const data = JSON.parse(event.data);
            const queryKey = ['messages'];
            queryClient.invalidateQueries({ queryKey });
        };

        return () => {
            websocket.close();
        };
    }, [queryClient]);
};
