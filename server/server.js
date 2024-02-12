const express = require('express');
const { mongoose } = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./models/userSchema')



const dotenv = require('dotenv').config({ path: "../.env" })


// connect to express app
const app = express();

//db connection
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

    .then(() => {
        app.listen(3000, () => {
            console.log("Server connected to port 3000 and MongoDb ")
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
app.get('/register', async (res) => {
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
        const token = jwt.sign({ userId: user._id },process.env.SECRET_KEY, { expiresIn: '1hr' })
        res.json({ message: 'Login successful' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' })
    }
})



const stripe = require('stripe')(process.env.STRIPE_API);

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
    // console.log(req.body);

try {
    const items = req.body.items;
    // let lineItems = [];
    // items.forEach((item) => {
    //     lineItems.push(
    //         {
    //             price: item.id,
    //             quantity: item.quantity
    //         }
    //     )
    // });
    
    let lineItems = items.map(item => ({
        price: item.id,
        quantity: item.quantity
    }));




    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "https://supplements-ecommerce-git-struct-70aa6a-mikes-projects-b8b6e248.vercel.app/success",
        cancel_url: "https://supplements-ecommerce-git-struct-70aa6a-mikes-projects-b8b6e248.vercel.app/productpage"
    });

    res.send(JSON.stringify({
        url: session.url
    }));

} catch (error) {
    console.error("Error processing checkout:", error);
    res.status(500).json({ error:'Error processing checkout' });
}







});
// const port = 4000;
// app.listen(port, () => console.log(`Listening on port ${port}!`));
module.exports.app;