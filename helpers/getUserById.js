import { mockusersData } from "../data/mockUsers.js";

export const getUsersById = (id) => {
    const filterUser = mockusersData.filter(user => user.id === +id)?.map(({ hobbies, ...user }) => user);
    
    return filterUser
}