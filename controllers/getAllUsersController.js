import { mockusersData } from "../data/mockUsers.js";

export const getAllUsersController = (res) => {
  res.setHeader("Content-Type", "application/json");
  // Send the mockUsersData as JSON

  const response = {
    count: mockusersData.length,
    data: mockusersData,
  };

  res.end(JSON.stringify(response));
};
