//create basic react component view for a dashboard that just says "you are logged in" 
import Button from 'react-bootstrap/Button';
import React from 'react';

const Dashboard = (data) => {

  const LogOut = () => {
    /* global google */
    google.accounts.id.disableAutoSelect();
    console.log('Logged out');
    console.log(data)
  };

  return (
    <div>
      <h1>You are logged in</h1>
      <Button onClick={LogOut}>Sign Out</Button>
    </div>
  );
}

export default Dashboard;