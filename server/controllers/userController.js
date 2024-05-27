const db = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = db;
const {Book} = db

exports.getTopics = async (req, res) => {
  try {
    const foundBooks = await Book.findAll();
    res.status(200).json(foundBooks);
  } catch (error) {
    res.status(400).send("Server error");
    console.log(error)
  }
};

exports.signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "User created successfully", userId: newUser.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });

    res.json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

