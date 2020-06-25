import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';

export default function App() {
  return (
    <header>
      <Container fluid className="app-search-main">
        <Form>
          <Form.Row float="center">

            <Col xs={7}>
              <Form.Control placeholder="Search for movies, series or episodes..." size="lg" />
            </Col>

            <Col>
              <Form.Control as="select" size="lg">
                <option>All</option>
                <option>Movies</option>
                <option>Series</option>
                <option>Episodes</option>
              </Form.Control>
            </Col>

            <Col>
              <Button type="submit" block size="lg">
                Go!
              </Button>
            </Col>

          </Form.Row>
        </Form>
      </Container>
    </header>
  );
}
