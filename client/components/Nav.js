import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store';

const Nav = ({ handleClick , isLoggedIn, name }) => {
  return ( 
    <div>
      {isLoggedIn ? (
        <nav className="level">
          <div className="level-left">
            <h1 className="level-item title is-4">Welcome, {name}!</h1>
          </div>
          <div className="level-right">
            <p className="level-item">
              <Link to='/'>
                <u>home</u>
              </Link>
            </p>
            <p className="level-item" onClick={handleClick}><a className="button is-success">Log Out</a></p>
          </div>
        </nav>
        ): (
          <nav className="level">
          <div className="level-left">
          </div>
          <div className="level-right">
            <p className="level-item">
              <Link to='/'>
                <u>home</u>
              </Link>
            </p>
            <p className="level-item">
              <Link to='/signin'>
                <u>Sign In</u>
              </Link>
            </p>
          </div>
        </nav>
        )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)