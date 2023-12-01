import { getHobbiesByUserId } from "../helpers/hobbiesHelpers.js";

export const getHobbiesController = (res, userId) => {
   
    const hobbies = getHobbiesByUserId(userId)
 
   
    if (hobbies.length) {
        const response = JSON.stringify(hobbies);
        res.writeHead(200, { 
            'Content-Type': "application/json",
            'Cache-Control': 'max-age=3600', // Set the cache to expire after 1 hour
            'Expires': new Date(Date.now() + 3600000).toUTCString(), // Set the expiration time
         });
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