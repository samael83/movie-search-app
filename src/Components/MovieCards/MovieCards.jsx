import React from 'react';
import PropTypes from 'prop-types';

import './MovieCards.css';

export default function MovieCards({ movies }) {
	return (
		<p>MovieCards</p>
	);
}

MovieCards.propTypes = {
	//movies: PropTypes.arrayOf(PropTypes.object).isRequired
	movies: PropTypes.array.isRequired
};