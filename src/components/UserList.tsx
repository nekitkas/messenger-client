import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from "@mui/material/Avatar";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import Box from "@mui/material/Box";
import { useQuery } from '@tanstack/react-query';

interface User {
    id: number;
    username: string;
}

const url = 'http://localhost:3000/users'

const renderRow = (props: ListChildComponentProps<User[]>) => {
    const { style, index, data } = props;
    const user: User = data ? data[index] : { username: "Loading..." };
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={user.username} />
                <ListItemAvatar>
                    <Avatar
                        alt={user.username}
                        src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${user.username}`}
                    />
                </ListItemAvatar>
            </ListItemButton>
        </ListItem>
    );
};

export const UserList: React.FC = () => {
    const { data, error, isLoading } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: async () => await fetch(url, {credentials: 'include'}).then((res) => res.json()),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Box
            sx={{ width: "100%", height: 400, maxWidth: 360, bgcolor: "background.paper" }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={46}
                itemCount={data?.length || 0}
                overscanCount={5}
                itemData={data}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
};
