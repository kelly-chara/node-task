import { deleteUserController } from "../controllers/deleteUserController.js";
import { getUserController,  } from "../controllers/getUserController.js";
import { mockusersData } from "../data/mockUsers.js";
import url from "url";
deleteUserController

export const handleUsersRoute = (req, res) => {

    const { path } = url.parse(req.url, true);
    const userId = (path.split("/")[2]);

    switch (req.method) {
        case "POST":
            res.writeHead(204, { 'Content-Type': 'text/html' });
            res.end('CREATE User info\n');
            break;
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
            res.end('Not Found\n');
    }
};

export const handleAllUsersRoute = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    // Send the mockUsersData as JSON

    const response = {
        count : mockusersData.length,
        data: mockusersData

    }
    res.end(JSON.stringify(response));
}


