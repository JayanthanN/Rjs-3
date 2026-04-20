import React, { useState } from "react";


function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;

    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="app">
      <div className="chat-container">
        <h2 className="title">Mini Chat 💬</h2>

        <div className="chat-box">
          {messages.length === 0 ? (
            <p className="empty">No messages yet...</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))
          )}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;