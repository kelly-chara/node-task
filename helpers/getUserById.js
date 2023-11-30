import { mockusersData } from "../data/mockUsers.js";

export const getUsersById = (id) => {
    const filterUser = mockusersData.filter(user => user.id === +id)?.map(({ hobbies, ...user }) => user);

    return filterUser;
}

export const getHobbiesByUserId = (id) => {
    const hobbies = mockusersData.find(user => user.id === +id).hobbies

    return hobbies;
}

export const deleteHobbieUserById = (id, _hobbie = "") => {

    console.log("HEADER RECEIVED", typeof _hobbie)

    const hobbies = getHobbiesByUserId(id);

    console.log(hobbies)
    const indexToDelete = hobbies.findIndex((hobbie ) => hobbie === _hobbie);

    if (indexToDelete === -1) {
        return {
            succes: false,
            result: `Hobbie does not exists`
        }
    }

   hobbies.splice(indexToDelete, 1);

    return {
        succes: true,
        result: `Hobbie was deleted`,
        data: hobbies
    }
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