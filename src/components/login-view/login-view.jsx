import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://cryptic-taiga-17986.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        alert(
          "User does not exist. Please register"
        );
        window.open("/register", "_self");
        console.log(e);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <CardGroup>
            <Card style={{ marginTop: 100 }}>
              <Card.Body>
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

                  <Link to={"/register"}>
                    <Button variate="primary" type="submit">
                      Sign up
                    </Button></Link>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container >
  );
}
