const express = require('express');
const stripe = require('stripe')('sk_test_51PYMsLEgJF4P4uOPBhDVjPl7GseFC574MnECBEhRh25plGsoontpGRzU0JpsbcJTqoTSkycsaeLYFnbvjhNXWP6V00Tv7Ri6xI');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));
