import { mockusersData } from "../data/mockUsers.js";

export const getHobbiesByUserId = (id) => {
    const hobbies = mockusersData.find(user => user.id === +id).hobbies

    return hobbies;
}

export const createHobbieUserById = (id, hobbie = "") => {

    const hobbies = getHobbiesByUserId(id);
    hobbies.push(hobbie);
    
    return {
        succes: true,
        result: `Hobbie was added`,
        data: hobbies
    }
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