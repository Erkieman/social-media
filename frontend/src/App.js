import Button from 'react-bootstrap/Button';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Dashboard from './screens/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  function handleCredentialResponse(response) {
    console.log("JWT_" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log('decoded jewt', userObject);
    setUser(userObject);
  };

  const LogOut = () => {
    /* global google */
    //google.accounts.id.disableAutoSelect();
    localStorage.removeItem('data-skip_prompt_cookie');
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    console.log('initialized', user);

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )
  }, []);

  return (
    <div className="App">
      {user.email_verified ? (
        <Button onClick={LogOut}>Sign Out</Button>
      ) : (
        <div id="signInDiv"></div>
      ) }
    </div>

  );
}

export default App;
