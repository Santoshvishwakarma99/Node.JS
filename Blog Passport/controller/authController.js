const User = require("../Model/userModel");

exports.registerPage = (req, res) => res.render("register", { message: null });
exports.loginPage = (req, res) => res.render("login", { message: null });

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.render("register", { message: "User already exists" });

  const user = new User({ username, password });
  await user.save();
  res.redirect("/login");
};

exports.logoutUser = (req, res) => {
  req.logout(() => res.redirect("/login"));
};
