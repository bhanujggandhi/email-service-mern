import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button } from 'react-bootstrap';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Emaily'
        description='Buy 5 email credits'
        amount={10000}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency='INR'
      >
        <Button variant='outline-light'>Add Credits</Button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
