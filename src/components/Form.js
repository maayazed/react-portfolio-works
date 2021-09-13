import React, { useState } from "react";
import * as emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function contactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { target } = event;
    const input = target.name;
    const value = target.value;

    if (input === 'name') {
      setName(value);
    } else if (input === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      to_name: 'MAAYAZED',
      message: message,
      from_email: email,
      reply_to: email
    };
    emailjs.send(
      "service_0bo4ur7",
      "template_1og8cze",
      templateParams,
      'user_HreZEXyUeAAEDrbrk1xIk'
    );
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type='text' placeholder='Your Name' value={name} onChange={handleChange} />
        </Form.Group>
        {/*  */}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type='email' placeholder='Your Contact' value={email} onChange={handleChange} />
        </Form.Group>
        {/*  */}
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} name='message' placeholder='Message me something...' value={message} onChange={handleChange} />
        </Form.Group>
        {/*  */}
        <Button type='submit'>Submit</Button>
      </Form>
      <h1><a href='/'>Home</a></h1>
    </div>
  );
}

export default contactForm;