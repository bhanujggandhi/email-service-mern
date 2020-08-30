import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import Payments from './Payments';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key='1'>
            <Nav.Link style={{ color: '#fff' }} active href='/auth/google'>
              Login with Google
            </Nav.Link>
          </li>,
          <li key='2'>
            <Nav.Link style={{ color: '#fff' }} active href='/auth/github'>
              Login with Github
            </Nav.Link>
          </li>,
          <li key='7'>
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to='/help'
              >
                Help?
              </Link>
            </Nav.Link>
          </li>,
        ];
      default:
        return [
          <li key='3'>
            <Payments />
          </li>,
          <li key='5' style={{ margin: '0 10px' }}>
            <Navbar.Text style={{ color: '#fff' }}>
              Credits: {this.props.auth.credits}
            </Navbar.Text>
          </li>,
          <li key='4'>
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to='/help'
              >
                Help?
              </Link>
            </Nav.Link>
          </li>,
          <li key='8'>
            <Nav.Link active style={{ color: '#fff' }} href='/api/logout'>
              Logout
            </Nav.Link>
          </li>,
        ];
    }
  }

  render() {
    return (
      <Navbar bg='danger' variant='light' expand='lg'>
        <Navbar.Brand>
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to={this.props.auth ? '/surveys' : '/'}
          >
            FeedBack Service
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>{this.renderContent()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
