import bcrypt from "bcryptjs";
import User from "../model-rules/user.model.js";

export const signUp = async (req, res) => {
  // console.log(req.body);

  //const { username, email, password } = req.body;

  // if (!email || !password || !username) {
  //   return res.json("Must include email and password");
  // }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(newUser.password, salt);
  newUser.password = hashedPassword;

  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
