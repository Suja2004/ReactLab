import React from 'react';
import propTypes from 'prop-types';

function Footer({ copyright }) {
    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    );
}

Footer.propTypes = {
    copyright: propTypes.string.isRequired,
}
export default Footer;