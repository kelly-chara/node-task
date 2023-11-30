import { createUserController } from "../controllers/createUserController.js";
import { deleteUserController } from "../controllers/deleteUserController.js";
import { getAllUsersController } from "../controllers/getAllUsersController.js";
import { getUserController, } from "../controllers/getUserController.js";
import { mockusersData } from "../data/mockUsers.js";
import url from "url";

export const handleUsersRoute = (req, res) => {

    const { path } = url.parse(req.url, true);
    const userId = (path.split("/")[2]);

    switch (req.method) {
        case "DELETE":
            deleteUserController(res, userId)
            break;
        case "PATCH":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('UPDATE User info\n');
            break;
        case "GET":
            getUserController(res, userId)
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found from uuserid\n');
    }
};


export const handleAllUsersRoute = (req, res) => {

    switch (req.method) {
        case "GET":
            getAllUsersController(res);
            break;
        case "POST":
            createUserController(req, res);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found from all\n');
    }


}


