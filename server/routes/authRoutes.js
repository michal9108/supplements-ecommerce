const express = require('express');
const router = express.Router();
const cors =require('cors')
const {test} = require('../controllers/authController')
//middleware

router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5173'
    })
)

// router.post('/signup', signup)
// router.post('/login', login)

module.exports = router;