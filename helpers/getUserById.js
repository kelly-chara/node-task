import { mockusersData } from "../data/mockUsers.js";

export const getUsersById = (id) => {
    const filterUser = mockusersData.find(user => user.id === +id);

    const {hobbies, ...user} = filterUser;
    return user;
}

export const getHobbiesByUserId = (id) => {
    const hobbies = mockusersData.find(user => user.id === +id).hobbies

    return hobbies;
}

export const deleteHobbieUserById = (id, _hobbie = "") => {


    const hobbies = getHobbiesByUserId(id);

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

export const createHobbieUserById = (id, _hobbie = "") => {

    const hobbies = getHobbiesByUserId(id);
    const newList = [...hobbies, _hobbie]
    
    return {
        succes: true,
        result: `Hobbie was added`,
        data: newList
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