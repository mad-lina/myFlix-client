import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(false);

    axios.post('https://cryptic-taiga-17986.herokuapp.com//users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self');
      })
      .catch(e => {
        console.log('error registering the user')
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
                  <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                      value={username}
                      type="text"
                      onChange={e => setUsername(e.target.value)}
                      required
                      placeholder='Enter a username'
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      value={password}
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                      required
                      minLength="8"
                      placeholder='Password must be 8 characters or longer'
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      value={email}
                      type="email"
                      onChange={e => setEmail(e.target.value)}
                      required
                      placeholder='Enter your email'
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday </Form.Label>
                    <Form.Control
                      value={birthday}
                      type="date"
                      onChange={e => setBirthday(e.target.value)}
                      required
                      placeholder="What's your birthday?"
                    />
                  </Form.Group>

                  <Button type="submit" onClick={handleSubmit}>Register</Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}