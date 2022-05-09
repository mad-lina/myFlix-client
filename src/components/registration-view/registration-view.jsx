import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegister(false);
  };

  return (
    <Form>

      <Form.Group>
        <Form.Label>Username: </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          placeholder="Enter a username" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password: </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength="8"
          placeholder="Enter a password" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter an email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Birthday: </Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          required
          placeholder="Enter your brithday" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>Create</Button>
    </Form>
  );
}