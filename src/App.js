import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';

export default function App() {

  const [movies, setMovies] = useState([]);
  const [titleQuery, setTitleQuery] = useState('');
  const [titleType, setTitleType] = useState('all');
  const [alert, setAlert] = useState({});

  const handleUserSearch = (e) => {
    // stop form submitting
    e.preventDefault(); 
    
    axios({
      method: 'GET',
      url: process.env.REACT_APP_ENDPOINT_OMDB,
      params: {
        apikey: process.env.REACT_APP_API_KEY_OMDB,
        s: titleQuery,
        type: titleType === 'all' ? '' : titleType
      }
    })
    .then((res) => {
      console.log(res);
      if (res.data.Response === 'True') {
        // handle search results
        setMovies(res.data.Search || []);
      } else if (res.data.Error === 'Movie not found!') {
        // handle movie not found / no results
        setMovies([]);
        setAlert({ varient: 'primary', message: 'No results found. Please check your spelling or try another search.' });
      } else {
        // other type of error from api
        setMovies([]);
        setAlert({ varient: 'danger', message: res.data.Error });
      }
    })
    .catch((err) => console.error(err));
  };

  return (
    <header>
      <Container fluid className="app-search-main">
        <Form onSubmit={(e) => handleUserSearch(e)}>
          <Form.Row float="center">

            <Col xs={7}>
              <Form.Control
                placeholder="Search for movies, series or episodes..."
                size="lg"
                value={titleQuery}
                onChange={(e) => setTitleQuery(e.currentTarget.value)}
              />
            </Col>

            <Col>
              <Form.Control as="select"
                size="lg"
                value={titleType}
                onChange={(e) => setTitleType(e.currentTarget.value)}
              >
                <option value="all">All</option>
                <option value="movie">Movies</option>
                <option value="series">Series</option>
                <option value="episode">Episodes</option>
              </Form.Control>
            </Col>

            <Col>
              <Button type="submit" size="lg" block>
                Go!
              </Button>
            </Col>

          </Form.Row>
        </Form>
      </Container>
    </header>
  );
}
