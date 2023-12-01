import { partialUpdateUserById } from "../helpers/userHelpers.js";

export const updateUserByIdController = (req, res, userId) => {
  let data = '';

  // Collect data chunks as they come in
  req.on('data', (chunk) => {
    data += chunk;
  });

  // When all data has been received
  req.on('end', () => {
    try {
      // Parse the JSON string
      const partialUpdate = JSON.parse(data);

      const result = partialUpdateUserById(userId, partialUpdate);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (error) {
      // Handle JSON parsing error
      console.log(error)
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON data' }));
    }
  });
};
