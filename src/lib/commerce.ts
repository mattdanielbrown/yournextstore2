// This file configures the Commerce SDK globally
// Import this file in your app to ensure the SDK is configured before use

import { configure } from "commerce-kit";
import { env } from "@/env.mjs";

// Configure Commerce SDK with Stripe provider
configure({
	provider: "stripe",
	stripeSecretKey: env.STRIPE_SECRET_KEY || "",
	currency: env.STRIPE_CURRENCY,
	enableStripeTax: env.ENABLE_STRIPE_TAX,
});
