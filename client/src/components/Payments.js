import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={10000}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency='INR'
      />
    );
  }
}

export default Payments;
