import React from 'react';
import propTypes from 'prop-types';

function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};
Header.propTypes = {
    title: propTypes.string.isRequired,
}
export default Header;