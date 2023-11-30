import { getUsersById } from "../helpers/getUserById.js";

export const getUserController = (res, userId) => {
    const user = getUsersById(userId);
    
    if (user.length) {
        const response = JSON.stringify(user);
        res.writeHead(200, { 'Content-Type': "application/json" });
        res.end(response);
    }
    
    else {
        res.writeHead(404, { 'Content-Type': "application/json" });
        const errorObj = JSON.stringify({
            error : `USER NOT FOUND WITH ID: ${userId}`
        })
        res.end(errorObj);
    }
}