import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';

export default function App() {

  const [titleQuery, setTitleQuery] = useState('')
  const [titleType, setTitleType] = useState('all');

  const handleUserSearch = (e) => {
    // stop form submitting
    e.preventDefault(); 
    console.log(titleQuery);
    console.log(titleType);
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
