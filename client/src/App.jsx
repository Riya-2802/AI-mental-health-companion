import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/chat', { message }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResponse(res.data.response);
    } catch (err) {
      setResponse('Error: ' + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>AI Mental Health Companion</h2>
      <input
        type="text"
        placeholder="Paste your token here"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <textarea
        rows={4}
        placeholder="How are you feeling today?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <button onClick={sendMessage}>Send</button>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
