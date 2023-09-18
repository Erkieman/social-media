import { useGoogleLogin } from '@react-oauth/google';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const authHandler = async (data) => {
    try {
    const response = await axios.post('http://localhost:5000/auth/google/callback', data);
    console.log(response.data);
    return response.data
    } catch (error) {
      console.log(error.response);
    };
  };

  const login = useGoogleLogin({
    onSuccess: codeResponse => authHandler(codeResponse),
    flow: 'auth-code',
  });

  return (
    <div className="App">
      <Button onClick={() => login()}>
      Sign in with Google 🚀{' '}
      </Button>
    </div>

  );
}

export default App;
