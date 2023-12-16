// import dotenv from dotenv;

const express = require('express');
let cors = require('cors');
const stripe = require('stripe')("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");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

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
    items.forEach((item)=> {
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
        success_url: "http://localhost:4001/",
        cancel_url:  "http://localhost:4001/",
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4001, () => console.log("Listening on port 4001!"));