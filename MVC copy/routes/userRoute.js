const express = require('express');
const isAuth=require("../middleware/Auth")
const {Register, login ,getAllUsers , deleteUser, updateUser,Showlogin,Showregister,local }=require("../controller/userController");
const passport = require('passport');

const router = express.Router();

router.get('/r_register', Showregister);
router.get('/l_user',Showlogin);
router.post('/register', Register);
router.post('/login', login);
router.get('/all', getAllUsers);
router.delete('/delete/:id', deleteUser);
router.patch('/update/:id', updateUser);
router.get('/', isAuth,getAllUsers)
router.post('/local',passport.authenticate('local'),local)


module.exports = router;