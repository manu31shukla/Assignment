import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#ADD8E6', 
});

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '400px',
  width: '100%', 
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundColor: '#fff', 
});

export const SubmitButton = styled(Button)({
  marginTop: '16px',
});

export const Title = styled('div')({
    color: '#fff',
    textAlign: 'center',
    marginRight: '26px',
  });