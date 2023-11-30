import { getHobbiesByUserId } from "../helpers/hobbiesHelpers.js";

export const getHobbiesController = (res, userId) => {
   
    const hobbies = getHobbiesByUserId(userId)
 
   
    if (hobbies.length) {
        const response = JSON.stringify(hobbies);
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