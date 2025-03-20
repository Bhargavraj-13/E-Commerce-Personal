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

module.exports = { loginUser };
