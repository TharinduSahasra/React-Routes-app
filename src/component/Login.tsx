import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type LoginProps = {
  setIsAuthenticated: (auth: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [loggedOutMessage, setLoggedOutMessage] = useState(false);


  const handleLogin = () => {
    setIsAuthenticated(true);
    setLoggedOutMessage(false); 
    navigate('/dashboard');
  };

 
  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoggedOutMessage(true); 
    navigate('/'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login Page</h2>
      {loggedOutMessage && <p style={{ color: 'red' }}>Please Login</p>}
      <div>
        <button onClick={handleLogin} style={{ marginRight: '10px', padding: '10px 20px' }}>
          Login
        </button>
        <button onClick={handleLogout} style={{ padding: '10px 20px' }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
