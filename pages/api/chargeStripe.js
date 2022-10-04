const stripe = require("stripe")(process.env.STRIPE_KEY);

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const charge = await stripe.charges.create({
        amount: Math.floor(req.body.data.amount * 100),
        currency: "usd",
        source: "tok_amex",
        description: `Order ${new Date()} by ${req.body.data.user}`,
      });

      return res.status(200).json({
        message: "Success",
        charge,
      });
    } catch (err) {
      return res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
