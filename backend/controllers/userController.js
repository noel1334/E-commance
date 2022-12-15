import User from "../models/userModel.js";

export const getAllUsers = (req, res) => {
  res.json({ message: "all Users" });
};
// get single users

export const getUser = (req, res) => {
  let id = req.params.id;
  console.log(id);
  res.json({ message: "Single User" }).status(201);
};
export const searchUser = (req, res) => {
  const { lowerAge, upperAge } = req.query;
  console.log(lowerAge, upperAge);
  const user = User.find({ _id: params });
  res.status(200).json({ lower: lowerAge, upper: upperAge });
};
