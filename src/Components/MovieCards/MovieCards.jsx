import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import './MovieCards.css';

export default function MovieCards({ movies }) {

	if (movies.length === 0) {
		return (
			<p>No results</p>
		);
	}
	return (
		<Container>
			<CardDeck>
				{
					movies.map((movie, idx) => {
						return (
							<Col key={`movie-item-${idx}`} sm={4}>
								<Card className="movie-card-item" data-imdb-id={movie.imdbID} >
									<Card.Img className="movie-card-pic" variant="top" src={movie.Poster} />
									<Card.Body>
										<Card.Title>{movie.Title}</Card.Title>
										<Card.Text>{movie.Year}</Card.Text>
									</Card.Body>
									<Card.Footer>
										<small className="text-muted">Full details...</small>
									</Card.Footer>
								</Card>
							</Col>
						);
					})
				}
			</CardDeck>
		</Container>
	);
}

MovieCards.propTypes = {
	//movies: PropTypes.arrayOf(PropTypes.object).isRequired
	movies: PropTypes.array.isRequired
};