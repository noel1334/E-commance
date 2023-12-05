import User from "../models/userModel.js";
// register user

export const registerUser = async (req, res) => {
  // const {firstName,lastName, email, password} = req.body
  let userExist = await User.find({ email: req.body.email });
  if (userExist) {
    res.status(400).json({ message: "Email already exist" });
    throw new Error("User already exist");
  }

  let newUser = new User(req.body);
  await newUser.save();
  //   let newUser = await User.create(req.body);
  res.status(201).json(newUser);
};
