import { useGoogleLogin } from '@react-oauth/google';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  return (
    <div className="App">
      <Button onClick={() => login()}>
      Sign in with Google 🚀{' '}
      </Button>;
    </div>

  );
}

export default App;
