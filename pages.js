// pages/index.js
import React, { useState } from 'react';
import Tree from '../components/Tree';

const IndexPage = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h1>Welcome, {username}</h1>
          <Tree tree={[{ value: 1 }, { value: 2 }, { value: 3 }]} />
        </div>
      )}
    </div>
  );
};

export default IndexPage;
