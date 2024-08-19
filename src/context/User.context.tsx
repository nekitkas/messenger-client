import React, { createContext, useContext, ReactNode } from 'react';
import { useGetUser } from '../hooks/useGetUser';

type UserProviderProps = {
    children: ReactNode;
};

export type UserData = {
    id: string;
    username: string;
    email: string;
    avatarUrl: string;
};

const UserContext = createContext<UserData | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const { data: user, ...userQuery } = useGetUser();

    if (userQuery.isLoading) {
        return <div>Loading...</div>;
    }

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const useUser = (): UserData | undefined => {
    const context = useContext(UserContext);
    if (context === undefined) {
        console.log('useUser must be used within a UserProvider');
        return undefined;
    }

    return context;
};

export { UserProvider, useUser };
