import React, { createContext, useContext, ReactNode } from 'react';
import { useGetUser } from "../hooks/useGetUser";

type UserProviderProps = {
    children: ReactNode;
};

type UserData = {
    id: number;
    username: string;
    email: string;
}

const UserContext = createContext<UserData | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const { data: user, ...userQuery } = useGetUser();

    if (userQuery.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        return undefined;
    }

    return context;
};

export { UserProvider, useUser };
