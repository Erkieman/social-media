import { useGoogleLogin } from '@react-oauth/google';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  return (
    <div className="App">
      <Button onClick={() => login()}>
      Sign in with Google 🚀{''}
      </Button>
    </div>

  );
}

export default App;
