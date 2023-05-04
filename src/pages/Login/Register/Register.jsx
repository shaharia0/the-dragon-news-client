import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container className='mx-auto w-25'>
    <h3>Please Login</h3>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name='name' placeholder="Enter your name" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Photo URL</Form.Label>
      <Form.Control type="text" name='photo' placeholder="Enter Photo url" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name='email' placeholder="Enter email" required/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name='password' placeholder="Password" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" name='accept' label="Accept Terms & Conditions" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Register
    </Button>
    <br />
    <Form.Text className='text-secondary'>
      Already Have an Account? Please <Link to="/login"> Login</Link>
    </Form.Text>
    <Form.Text className="text-success">

</Form.Text>
    <Form.Text className="text-danger">

</Form.Text>
  </Form>
  </Container>
  );
};

export default Register;