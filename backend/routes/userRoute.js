import express from "express";
import {
  getAllUsers,
  getUser,
  searchUser,
} from "../controllers/userController.js";

const route = express.Router();

route.get("/allusers", getAllUsers);

route.get("/user/:id", getUser);
route.get("/search", searchUser);

export default route;
