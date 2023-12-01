import { mockusersData } from "../data/mockUsers.js";


export const getUsersById = (id) => {
    const filterUser = mockusersData.find(user => user.id === +id);

    const { hobbies, ...user } = filterUser;
    return user;
}

export const createNewUser = (user) => {

   
    const userId = mockusersData.length + 1;
     user = {
        ...user,
        id: userId
    }
   
     mockusersData.push(user);

    return {
        success: true,
        result: `User was created with id: ${userId}`,
        data: mockusersData
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

export const partialUpdateUserById = (id, partialUpdate) => {
    const users = mockusersData;
    const index = users.findIndex(user => user.id === +id);
  
    if (index === -1) {
      return {
        success: false,
        result: 'User not found',
      };
    }
  
    // Update only the fields provided in the partial update
    const updatedUser = {
      ...users[index],
      ...partialUpdate,
    };
  
    // Update the user data with the partially updated user
    users[index] = updatedUser;
  
    return {
      success: true,
      result: 'User partially updated',
      data: updatedUser,
    };
  };