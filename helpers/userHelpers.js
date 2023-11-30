import { mockusersData } from "../data/mockUsers.js";

export const getUsersById = (id) => {
    const filterUser = mockusersData.find(user => user.id === +id);

    const { hobbies, ...user } = filterUser;
    return user;
}

export const createNewUser = (user) => {

    user = {
        ...user,
        id: userId
    }
    const userId = mockusersData.length + 1;
    const newUsersList = mockusersData.push(user);
    return {
        success: true,
        result: `User was created with id: ${userId}`,
        data: newUsersList
    }
}

export const deleteUserById = (id) => {
    const indexToDelete = mockusersData.findIndex(user => user.id === +id);

    if (indexToDelete === -1) {
        return {
            success: false,
            result: `User with id ${id} does not exists`
        }
    }

    mockusersData.splice(indexToDelete, 1);

    return {
        succes: true,
        result: `User with id ${id} was deleted`
    }
}