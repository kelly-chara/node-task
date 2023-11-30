import {  deleteUserById } from "../helpers/getUserById.js";

export const deleteUserController = (res, userId) => {
    const response = deleteUserById(userId);
    const responseStr = JSON.stringify(response);

    if (response.succes) {
        res.writeHead(200, { 'Content-Type': "application/json" });
    }
    
    else {
        res.writeHead(404, { 'Content-Type': "application/json" });
    }

    res.end(responseStr);

}