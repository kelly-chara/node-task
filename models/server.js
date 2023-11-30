// src/server.ts
import http from 'http';
import url from "url";

import { handleAllUsersRoute, handleUsersRoute } from '../routes/users.js';
import { handleHobbiesRoute } from '../routes/hobbies.js';



const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL
  const userId = parsedUrl.pathname.split('/')[2]; // Extract the dynamic part (user ID)
  
  if (req.url === `/users/${userId}`) {
    handleUsersRoute(req, res);
  } else if (req.url === `/users/${userId}/hobby`) {
    handleHobbiesRoute(req, res);
  } else if (req.url === '/users' && req.method === "GET") {
    handleAllUsersRoute(req, res)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }

});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});