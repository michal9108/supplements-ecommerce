import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51HDZZtH9dKBRlDkrGypI7RjGytgwPUtI3mSHLWvdFtyo23eIpO3l3BSwjLbkIWNLZMonZluAfngDX5kKus8GpeLk00OVyIp7dR",
  {
    apiVersion: "2023-10-16",
  },
);
