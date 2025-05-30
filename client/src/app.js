import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const moodOptions = ["motivation", "anxiety", "talk"];

  const handleAuth = async (endpoint) => {
    const response = await fetch(`/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) setLoggedInUser(username);
    else alert(data.error);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setMessages([{ sender: "user", text: option }]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          option: selectedOption,
          message: input,
          username: loggedInUser,
        }),
      });

      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.response }]);
    } catch (err) {
      setMessages([...newMessages, { sender: "bot", text: "Error getting response" }]);
    }

    setInput("");
  };

  if (!loggedInUser) {
    return (
      <div className="auth-container">
        <h2>Login / Register</h2>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={() => handleAuth("login")}>Login</button>
        <button onClick={() => handleAuth("register")}>Register</button>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <h2>Welcome, {loggedInUser}</h2>

      {!selectedOption ? (
        <div className="options-box">
          <h4>Select how you feel:</h4>
          {moodOptions.map((option, index) => (
            <button key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="chat-box">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="input-box">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
            <button onClick={handleSend}>Send</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
