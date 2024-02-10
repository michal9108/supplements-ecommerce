const express = require('express');
const { mongoose } = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = requier('jsonwebtoken')
const User = require('./models/userSchema')

const SECRET_KEY = 'super-secret-key'

const dotenv = require('dotenv').config({ path: "../.env" })
const stripe = require('stripe')(process.env.STRIPE_API);


// connect to express app
const app = express();

//db connection
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useunifiedYopology:true
})

    .then(() => {
        app.listen(3001, () => {
            console.log("Server connected to port 3001 and MongoDb ")
        })
      
    })
    .catch((error) => {
        console.log('Unable to connect to Server and/or MongoDB', error)
    })

//middleware
app.use(bodyParser.json())
app.use(cors());
app.use(express.static("public"));
app.use(express.json());



//Routes

//REGISTER
//POST REGISTER
app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, username, password: hashedPassword })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' })
    }
})

//GET Registered Users
app.get('/register', async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
        
    } catch (error) {
        res.status(500).json({ error: 'Unable to get users' })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({ error: 'Invalid Username'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid Password' })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' })
        res.json({ message: 'Login successful' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' })
    }
})


app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/productpage"
    });

    res.send(JSON.stringify({
        url: session.url
    }));







});
const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}!`));