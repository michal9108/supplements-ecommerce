const express = require('express');
const router = express.Router();
const cors =require('cors')
const {registerUser} = require('../controllers/authController')
//middleware

router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5173' 
    })
)

router.post('/signup', registerUser)
// router.post('/login', login)

module.exports = router;