import userService from "../services/userService.js";

// Get all users
const getUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting users");
  }
};
// Get users by gender using params
const getUsersByGenderController = async (req, res) => {
  const gender = req.params.gender;
  try {
    const users = await userService.getUsersByGender(gender);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error getting users");
  }
};

export { getUsersController, getUsersByGenderController };
