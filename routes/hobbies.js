import url from "url";
import { getHobbiesController } from "../controllers/getAllUserHobbiesById.js";
import { deleteHobbieController } from "../controllers/deleteHobbieController.js";

export const handleHobbiesRoute = (req, res) => {

    const { path } = url.parse(req.url, true);
    const userId = (path.split("/")[2]);

    switch (req.method) {
        case "POST":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('CREATE Hobby\n');
            break;
        case "DELETE":
            deleteHobbieController(req, res, userId)
            break;
        case "GET":
            getHobbiesController(res, userId);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found\n');
    }
};

