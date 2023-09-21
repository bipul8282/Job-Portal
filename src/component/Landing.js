import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Landing() {
  const [language, setLanguage] = useState('');
  const user = useSelector((state) => state.user);
   console.log(user)
  return (
    <div>
      <h2>Landing Page</h2>
      {user ? (
        <p>Welcome, {user.username}</p>
      ) : (
        <p>Please login or signup to continue.</p>
      )}
      <form>
        <input
          type="text"
          placeholder="Enter programming language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Landing;