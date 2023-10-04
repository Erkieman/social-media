import Button from 'react-bootstrap/Button';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

function App() {

  function handleCredentialResponse(response) {
    console.log("JWT_" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);  
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>

  );
}

export default App;
