import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container, Form, SubmitButton, Title } from './FirstPage.styles';

const FirstPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && phone && email) {
      localStorage.setItem('user', JSON.stringify({ name, phone, email }));
      navigate('/second');
    } else {
      alert('Please enter all details');
    }
  };

  return (
    <Container>
      <Title>
        <Typography variant="h5">
          GrowMeOrganic React Assignment
        </Typography>
      </Title>
      <Form>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default FirstPage;
