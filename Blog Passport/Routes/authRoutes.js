const router = require("express").Router();
const passport = require("passport");
const auth = require("../controller/authController");

router.get("/register", auth.registerPage);
router.post("/register", auth.registerUser);

router.get("/login", auth.loginPage);
router.post("/login", passport.authenticate("local", {
  successRedirect: "/todo",
  failureRedirect: "/login"
}));

router.post("/logout", auth.logoutUser);

module.exports = router;
