const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
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
