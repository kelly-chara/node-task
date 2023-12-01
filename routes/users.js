import url from "url";

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserController,
  updateUserByIdController,
} from "../controllers/index.js";

export const handleUsersRoute = (req, res) => {
  const { path } = url.parse(req.url, true);
  const userId = path.split("/")[2];

  switch (req.method) {
    case "DELETE":
      deleteUserController(res, userId);
      break;
    case "PATCH":
      updateUserByIdController(req, res, userId);
      break;
    case "GET":
      getUserController(res, userId);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Method not handled \n");
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
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Method not handled\n");
  }
};
