import url from "url";
import {
  getHobbiesController,
  deleteHobbieController,
  createHobbieController,
} from "../controllers/index.js";

export const handleHobbiesRoute = (req, res) => {
  const { path } = url.parse(req.url, true);
  const userId = path.split("/")[2];

  switch (req.method) {
    case "POST":
      createHobbieController(req, res, userId);
      break;
    case "DELETE":
      deleteHobbieController(req, res, userId);
      break;
    case "GET":
      getHobbiesController(res, userId);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found\n");
  }
};
