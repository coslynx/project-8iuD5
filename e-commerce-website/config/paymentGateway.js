const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const processPayment = async (amount, currency, source, description) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      source,
      description,
    });
    return paymentIntent;
  } catch (error) {
    console.error(error);
    throw new Error('Payment failed');
  }
};

module.exports = {
  processPayment,
};