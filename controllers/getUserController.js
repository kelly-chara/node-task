import { addHateoasLinks, getUsersById } from "../helpers/index.js";

export const getUserController = (res, userId) => {
  const user = getUsersById(userId);

  if (user) {
    const responseWithLinks = addHateoasLinks(user, userId);
    const responseStr = JSON.stringify(responseWithLinks);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(responseStr);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    const errorObj = JSON.stringify({
      error: `USER NOT FOUND WITH ID: ${userId}`,
    });
    res.end(errorObj);
  }
};
