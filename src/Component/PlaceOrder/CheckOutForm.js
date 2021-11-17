import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
const CheckOutForm = ({ order }) => {

    const { price, _id } = order;
    const stripe = useStripe();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);

    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('https://obscure-refuge-13960.herokuapp.com/paymentIntent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));

    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe | !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }
        // paymentIntent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.name,
                        email: order.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully')
            console.log(paymentIntent);
            setProcessing(false);

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice(' secret')[0]
            }
            const url = `https://obscure-refuge-13960.herokuapp.com/orders/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress /> : <Button sx={{ mt: 2 }} variant='contained' type="submit" disabled={!stripe || success}>
                    Pay
                </Button>}
            </form>
            {
                error && <p style={{ color: 'red' }}>{error} !</p>
            }
            {
                success && <p style={{ color: 'blue' }}>{success} </p>
            }
        </div>
    );
};

export default CheckOutForm;