const User = require('../models/userSchema');
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: req.body.email
    });
    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
  return res.status(401).json({
    message: "Incorrect Password"
  });
}
res.status(200).json({
  message: "User logged in successfully"
});
} catch (error) {
  console.error('error logging in user', error);
  res.status(500).json({
    message: "Server error"
  });
}
};

const signupUser = async (req,res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
} catch (err) {
    res.status(500).json({ error: err.message });
}
};


module.exports = { loginUser,signupUser };
