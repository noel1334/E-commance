import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


// register user

export const registerUser = async (req, res) => {
  let userExist = await User.findOne({ email: req.body.email });
  if (userExist) {
    return res.status(400).json({ message: "Email already exist" });
  } else {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  }

  // let newUser = await User.create(req.body);
};

export const loginUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  // check the persons password

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    let { password, ...others } = user._doc;
    res.json(others);
  } else {
    res.json({ message: "Invalid credentials" });
  }
};
