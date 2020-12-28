import * as React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <button>
          <Link to="/main1">Main 1</Link>
        </button>
        <button>
          <Link to="/main2">Main 2</Link>
        </button>
        <img src={logo} alt="logo"></img>
      </header>
    );
  }
}