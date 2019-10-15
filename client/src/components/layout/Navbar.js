import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    return (
        <div className="navbar">
            <h1>{title}</h1>   
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Fun Cheap Bay Area',
}

export default Navbar
