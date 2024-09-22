import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

export default function getStripe() {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("Stripe publishable key is not defined");
  }

  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      .catch(error => {
        console.error("Error loading Stripe.js:", error);
        return null;
      });
  }

  return stripePromise;
}
