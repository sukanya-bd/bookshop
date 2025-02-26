import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Row from './Shelf/Row';
import Book from './Shelf/Book';
import PasswordValidator from './password-validator/PasswordValidator';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red'
    };
  }
  render() {
    return (
      <>
        <h1>Welcome User</h1>
        <PasswordValidator />
        <h2>I am a {this.state.color} car</h2>
        <Row color={this.state.color} />
        <Book color={this.state.color} />
        <nav>
          <ul>
            <li>
              <Link to="/Row">Row</Link>
            </li>
            <li>
              <Link to="/Book">Book</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Home;
