import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key='1'>
            <a href='/auth/google'>Login with google</a>
          </li>,
          <li key='2'>
            <a href='/auth/github'>Login with github</a>
          </li>,
        ];
      default:
        return [
          <li key='3'>
            <Payments />
          </li>,
          <li key='4'>
            <a href='/api/logout'>Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
          >
            Emaily
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
