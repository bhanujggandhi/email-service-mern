import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <li>
              <a href='/auth/google'>Login with google</a>
            </li>
            <li>
              <a href='/auth/github'>Login with github</a>
            </li>
          </div>
        );
      default:
        return (
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='left brand-logo'>
            Emaily
          </a>
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
