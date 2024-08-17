import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from "./context/User.context.tsx";
import { WebSocketProvider } from "./context/Websocket.context.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <WebSocketProvider>
              <UserProvider>
                  <App />
              </UserProvider>
          </WebSocketProvider>
      </QueryClientProvider>
  </StrictMode>,
)
