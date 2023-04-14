import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  getUsersController,
  getUsersByGenderController,
} from "./controllers/userController.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/users", getUsersController);
app.get("/users/:gender", getUsersByGenderController);

// Start the server
const PORT = 8008;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// I have tested the code with Postman and it work as expected
