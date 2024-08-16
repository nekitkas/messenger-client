import { useQuery } from '@tanstack/react-query';
import {axiosInstance} from "../utils/client.ts";

const getUser = async () => {
    return axiosInstance.get('/auth/users')
}

export const useGetUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async ()  => {
            return await getUser().then((res) => res.data)
        },
        retry: 1
    })
}