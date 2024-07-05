import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css'; // Import your CSS file

const stripePromise = loadStripe('pk_test_51PYMsLEgJF4P4uOPfQd8823YNq1yqlIkfS1uLuB1wJ1ldL7WdfeS6H6JSxC3ysv7AkT2N5dqzYW9NYTNKEDEnrW800bgQjjmjL');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3001/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 1000 }) // amount in cents
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const { clientSecret } = await response.json();
            
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'Customer Name',
                    },
                },
            });

            if (error) {
                setError(error.message);
                setSuccess(false);
            } else if (paymentIntent.status === 'succeeded') {
                setError(null);
                setSuccess(true);
            }
        } catch (error) {
            setError(error.message);
            setSuccess(false);
        }
    };

    return (
        <div className="payment-form">
            <form onSubmit={handleSubmit}>
                <label>Card details</label>
                <CardElement className="StripeElement" />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">Payment successful!</div>}
            </form>
        </div>
    );
};

const PaymentForm = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default PaymentForm;
