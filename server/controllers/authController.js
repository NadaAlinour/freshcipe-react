const authService = require("../services/authService");

async function createUser(req, res) {
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
    res.status(400).json({ error: err.message });
  }
}


module.exports = { createUser };
