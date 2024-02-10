const User = require('../models/user')

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({
                error: 'name is required'
            })
        };
        if (!password || password.length < 6) {
            return res.json({
                error: 'password is required and it should be atleast 6 characters long'
            })
        };
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: "Email is already registered"
            })
        }
        const user = await User.create({
            name, email, password
        })
        return res.json(user)
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = {registerUser} 
