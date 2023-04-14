import fetch from "node-fetch";

const BASE_URL = "https://randomuser.me/api/";

//Connect to Api
const userService = {
  // Get all users from Api
  getAllUsers: async () => {
    const response = await fetch(`${BASE_URL}?results=50`);
    const data = await response.json();
    return data.results;
  },
  // Get users by gender
  getUsersByGender: async (gender) => {
    const response = await fetch(`${BASE_URL}/?gender=${gender}&results=5`);
    const data = await response.json();
    return data;
  },
};

export default userService;
