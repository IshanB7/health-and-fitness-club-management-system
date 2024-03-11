import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Login({setIsLoggedIn}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setLogin] = useState(true);

  document.body.style.background = 'url(/public/image1.jpg)';

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username': username, 'password': password, 'isLogin': isLogin})
    });

    if (response.ok) {
      if (isLogin) {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
      } else {
        alert("Account created");
        window.location.reload(true);
      }
    } else {
      const data = await response.text();
      alert(data);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="card-custom">
        <Card.Body>
          <Card.Title className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="username" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                className='mb-3'
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className='mb-3'
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <p 
              className='mt-3 mb-0 text-center' style={{color: 'blue', cursor: 'pointer'}}
              onClick={() => setLogin(!isLogin)}
            >
              {isLogin ? 'Don\'t have an account? ': 'Have an account? '}
              <span style={{textDecoration: 'underline'}}>
                {isLogin ? 'Sign Up' : 'Login'}
              </span>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
