import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { pageMain } from '../scene';

export default class main extends Component {
  componentDidMount() {
    pageMain(true)
  }

  componentWillUnmount() {
    pageMain(false)
  }

  render() {
    return (
      <div id="mainlayout">
        <header className="is-simple is-large glass_bg">
          <span>Matrix Tools</span>
        </header>
        <div id="main">
          <nav id="nav" className="is-simple glass_bg">
            <br />
            <span>Simple operations</span>
            <div><hr /></div>
            <Link to="/sum" className="glass_buttons is-medium">Sum</Link>
            <Link to="/multi" className="glass_buttons is-medium">Multiply</Link>
            <Link to="/transpose" className="glass_buttons is-medium">Transpose</Link>
            <br />
            <span>Complex operations</span>
            <div><hr /></div>
            <Link to="/minors" className="glass_buttons is-medium">Minors</Link>
            <Link to="/inverse" className="glass_buttons is-medium">Inverse</Link>
            <Link to="/det" className="glass_buttons is-medium">Determinant</Link>
            <div><hr /></div><br />
            <Link to="/" className="glass_buttons is-medium">Main Menu</Link>
          </nav>
          <div id="body" className='is-centered'>
            {this.props.children}
          </div>
        </div>
        <footer id="foot" className="is-simple glass_bg">
          <a href="https://github.com/Zynthasius39" target="_blank" rel="noopener noreferrer"><img className="social_icons" src="/github.png" alt="GitHub" /></a>
          <a href="https://www.reddit.com/user/BloP63" target="_blank" rel="noopener noreferrer"><img className="social_icons" src="/reddit.png" alt="Reddit" /></a>
        </footer>
      </div>
    )
  }
}