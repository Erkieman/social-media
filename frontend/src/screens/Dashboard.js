//create basic react component view for a dashboard that just says "you are logged in" 
import Button from 'react-bootstrap/Button';
import React from 'react';

const Dashboard = (data) => {
  
  const LogOut = () => {
    /* global google */
    //google.accounts.id.disableAutoSelect();
    localStorage.removeItem('data-skip_prompt_cookie');
  };

  const GetLocalStorage = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div>
      <h1>You are logged in</h1>
      <GetLocalStorage />
      <Button onClick={LogOut}>Sign Out</Button>
    </div>
    
  );
}

export default Dashboard;