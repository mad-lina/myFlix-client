import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, CardGroup, Container } from 'react-bootstrap';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <CardGroup>
            <Card style={{ marginTop: 100 }}>
              <Card.Title>Welcome to myFlix!</Card.Title>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username: </Form.Label>
                  <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password: </Form.Label>
                  <Form.Control type="text" onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                <Button>Register</Button>
              </Form>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container >
  );
}
