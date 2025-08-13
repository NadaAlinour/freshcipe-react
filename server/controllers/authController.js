import * as authService from "../services/authService.js";
import { validationResult } from "express-validator";

async function createUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, password, phone } = req.body;

    const user = await authService.createUser({
      email: email,
      password: password,
      phone: phone,
      username: username,
    });

    res.status(201).json(user);
  } catch (err) {
    // res.status(400).json({ error: err.message });
    console.log("nothing");
  }
}


// not for auth since we're using passport and authService i think
async function getUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await authService.getUser({
      email: email,
      password: password,
    });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}

export { createUser, getUser };
