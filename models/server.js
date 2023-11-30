// src/server.ts
import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/users/id' && req.method === "POST") {
   
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('CREATE User info\n');
  } 
  else if (req.url === '/users/id' && req.method === "DELETE") {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('DELETE User info\n');
  }
else if (req.url === '/users/id' && req.method === "PATCH")
  {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('UPDATE User info\n');
  }
  else if (req.url === '/users/id' && req.method === "GET")
  {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('GET User info\n');
  }
  if (req.url === '/users/id/hobby' && req.method === "POST") {
   
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('CREATE Hobby\n');
  } 
  else if (req.url === '/users/id/hobby' && req.method === "DELETE") {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('DELETE hobby info\n');
  }
  else if (req.url === '/users/id/hobby' && req.method === "GET")
  {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('GET ALL HOBBIES FROM USER\n');
  }
  else if (req.url === '/users' && req.method === "GET")
  {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('GET ALL USERS\n');
  }
  else
  {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});