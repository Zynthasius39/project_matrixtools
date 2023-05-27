import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class start extends Component {
  render() {
    return (
      <div id="startmenu">
        <header className="is-simple is-bold is-xxlarge glass_bg">
          <span>Matrix Tools</span>
        </header>
        <div id="navstart" className="is-simple glass_bg">
          <Link to="/sum" className="glass_buttons">Simple Operations</Link>
          <Link to="/minors" className="glass_buttons">Complex Operations</Link>
          <Link to="/about" className="glass_buttons">About</Link>
        </div>
        <div id="content"></div>
      </div>
    );
  }
}