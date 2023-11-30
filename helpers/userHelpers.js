import { mockusersData } from "../data/mockUsers.js";

export const getUsersById = (id) => {
    const filterUser = mockusersData.find(user => user.id === +id);

    const {hobbies, ...user} = filterUser;
    return user;
}


export const deleteUserById = (id) => {
    const indexToDelete = mockusersData.findIndex(user => user.id === +id);

    if (indexToDelete === -1) {
        return {
            succes: false,
            result: `User with id ${id} does not exists`
        }
    }

    mockusersData.splice(indexToDelete, 1);

    return {
        succes: true,
        result: `User with id ${id} was deleted`
    }
}