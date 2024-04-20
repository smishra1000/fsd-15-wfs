// import logo from './logo.svg';
// import './App.css';
// import Chat from './Chat';

// function App() {
//   return (
//     <div className="App">
//      <Chat/>
//     </div>
//   );
// }

// export default App;

// App.js

import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');

  const handleMessageSend = async () => {
    const newMessages = [...messages, { sender: 'Customer', message: query }];
    setMessages(newMessages);
    setQuery('');

    try {
      const response = await axios.post('http://localhost:7000/api/orders/process-query', { query });
      const botResponse = response.data.data.response;
      const botMessage = { sender: 'Bot', message: botResponse };
      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error('Error processing query:', error);
    }
  };

  return (
    <div className="App">
      <div className="ChatBox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'Bot' ? 'BotMessage' : 'CustomerMessage'}>
            <strong>{msg.sender}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="InputBox">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type your message..." />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default App;

