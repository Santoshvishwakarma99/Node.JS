const express = require("express")
const { showRegister,showLogin,Register,login,dashboard,logout } = require("../controller/adminController");
const isLoggedIn = require('../middleware/Auth');
const router = express.Router()

router.get("/", (req, res) => {
  res.redirect("/admin/login");
});
// Register routes
router.get("/register", showRegister);
router.post("/register", Register);

// Login routes
router.get("/login", showLogin);
router.post("/login", login);

router.get("/dashboard", isLoggedIn, dashboard);

// Logout
router.get("/logout", logout);

module.exports = router;