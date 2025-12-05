const express = require('express');
const {Register, login ,getAllUsers , deleteUser, updateUser }=require("../controller/userController")

const router = express.Router();

router.post('/register', Register);
router.get('/login', login);
router.get('/all', getAllUsers);
router.delete('/delete/:id', deleteUser);
router.patch('/update/:id', updateUser);


module.exports = router;