import { deleteHobbieUserById } from "../helpers/userHelpers.js";


export const deleteHobbieController = (req, res, userId) => {
    const { hobbie } = req.headers;
    const response = deleteHobbieUserById(userId,hobbie);
    const responseStr = JSON.stringify(response);

    if (response.succes) {
        res.writeHead(200, { 'Content-Type': "application/json" });
    }
    
    else {
        res.writeHead(404, { 'Content-Type': "application/json" });
    }

    res.end(responseStr);

}