import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  constructor(props) {
    super(props);
    console.log('landing props', this.props);
  }

  render() {
    return (
      <Fragment>
        <h1 className="landing-h1">Sock it to me!</h1>
        <button type="button" className="landing-button">Log in as host</button>

        <Link to={{
          pathname: '/joinroom',
          socket: this.props.socket,
        }}>
          <button type="button" className="landing-button">Join room as player (will log you out as a host)</button>
        </Link>

        <h2>Signin</h2>
        <form id="signin-form" className="landing-form">
          <label className="landing-label">Username:</label>
          <input id="signin-username" className="landing-input" type="text" placeholder="Username..." required />
          <label className="landing-label">Password:</label>
          <input id="signin-password" className="landing-input" type="password" placeholder="Password..." required />
          <button className="landing-submit" type="submit">Sign in</button>
        </form>

        <br /><br /><h2>OR</h2><br /><br />

        <h2>Signup</h2>
        <form id="signup-form" className="landing-form">
          <label className="landing-label">Username:</label>
          <input id="signup-username" className="landing-input" type="text" placeholder="Username..." required />
          <label className="landing-label">Password:</label>
          <input id="signup-password" className="landing-input" type="password" placeholder="Password..." required />
          <label className="landing-label">Email:</label>
          <input id="signup-email" className="landing-input" type="text" placeholder="Email..." required />
          <button className="landing-submit" type="submit">Sign up</button>
        </form>
      </Fragment>
    );
  }
}

let mapStateToProps = state => ({
  room: state.room,
  socket: state.socket,
});
let mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);