const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://supplements-ecommerce-git-struct-70aa6a-mikes-projects-b8b6e248.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.post('/create-checkout-session', async (req, res) => {
  const { priceId, quantity } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: process.env.SUCCESS_URL || 'https://supplements-ecommerce-43iaondvz-mikes-projects-b8b6e248.vercel.app/success',
      cancel_url: process.env.CANCEL_URL || 'https://supplements-ecommerce-43iaondvz-mikes-projects-b8b6e248.vercel.app/success',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
