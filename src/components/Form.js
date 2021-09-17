import React, { useState } from "react";
import * as emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Form.css';
import { Link } from 'react-router-dom';

function contactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')

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

  setTimeout(function () {
    setError('');
    return;
  }, 4000);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (event, callback) => {
    event.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setError('Invalid Credentials')
      setTimeout(callback, 500);
      return;
    }

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
    <div className='formLayer'>
      <div>
        <p>To zerreod@outlook.com...</p>
        <Form onSubmit={handleSubmit}>

          <Form.Group>
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control name='name' type='text' placeholder='Your Name' value={name} onChange={handleChange} />
          </Form.Group>
          {/*  */}
          <Form.Group>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control name='email' type='email' placeholder='Your Contact' value={email} onChange={handleChange} />
          </Form.Group>
          {/*  */}
          <Form.Group>
            {/* <Form.Label>Message</Form.Label> */}
            <Form.Control as='textarea' rows={3} name='message' placeholder='Message me something...' value={message} onChange={handleChange} />
          </Form.Group>
          {/*  */}
          <div className='submit'>
            <Button><Link to={'/'} >Back</Link></Button>
            <Button type='submit'>Submit</Button>
          </div>
          {error && (
            <p>{error}</p>
          )}
        </Form>
      </div>
    </div>
  );
}

export default contactForm;