import { createHobbieUserById } from "../helpers/hobbiesHelpers.js";


export const createHobbieController = (req, res, userId) => {
    let data = '';
  
    // Collect data chunks as they come in
    req.on('data', (chunk) => {
      data += chunk;
    });
  
    // When all data has been received
    req.on('end', () => {
      try {
        // Parse the JSON string
        const hobbie = JSON.parse(data);
  
        const response = createHobbieUserById(userId, hobbie);
        const responseStr = JSON.stringify(response);
  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(responseStr);
      } catch (error) {
        console.log(error)
        // Handle JSON parsing error
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  };
  