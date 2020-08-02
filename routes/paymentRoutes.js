const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in' });
    }
    const charge = await stripe.charges.create({
      amount: 100000,
      currency: 'inr',
      source: req.body.id,
      description: '5 emaily credits',
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
