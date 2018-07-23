import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

class Nav extends Component {
    static defaultProps = {
        toggleForm() {}
    }
    
    static propTypes = {
        toggleForm: PropTypes.func
    }

    render() {
        return (
            <div className="nav-bar">
                <h2><a>Recipe App</a></h2>
                <nav className="nav-links">
                    <li><a onClick={this.props.toggleForm}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </div>
        )
    }
}

export default Nav;