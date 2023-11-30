export const handleHobbiesRoute = (req, res) => {
    switch (req.method) {
      case "POST":
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('CREATE Hobby\n');
        break;
      case "DELETE":
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('DELETE hobby info\n');
        break;
      case "GET":
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('GET ALL HOBBIES FROM USER\n');
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
  };
  
 