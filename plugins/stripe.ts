import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your Publishable Key
let StripeKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx';
const stripePromise = loadStripe(StripeKey);

export default ({ app }, inject) => {
  inject('stripe', stripePromise);
};
