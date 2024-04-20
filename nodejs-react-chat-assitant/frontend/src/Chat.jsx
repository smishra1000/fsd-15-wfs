// Chat.js

import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleQuerySubmit = async () => {
    if (query.trim() === '') return;

    // Add user query to the conversation
    setConversation([...conversation, { type: 'user', text: query }]);
    setQuery('');

    try {
      // Send user query to the backend
      const res = await axios.post('http://localhost:7000/api/orders/process-query', { query });
      if (res.data.status === 'success') {
        // Add bot response to the conversation
        const botResponse = `Order status: ${res.data.data.order_status}, Estimated delivery: ${res.data.data.estimated_delivery}`;
        setConversation([...conversation, { type: 'bot', text: botResponse }]);
      } else {
        // Add error message to the conversation
        setConversation([...conversation, { type: 'bot', text: 'Error processing query' }]);
      }
    } catch (error) {
      console.error('Error:', error);
      // Add error message to the conversation
      setConversation([...conversation, { type: 'bot', text: 'Error processing query' }]);
    }
  };

  return (
    <div>
      <h1>Order Tracking Chatbot</h1>
      <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
        {conversation.map((message, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            {message.type === 'user' ? <span style={{ fontWeight: 'bold' }}>You:</span> : <span style={{ fontWeight: 'bold' }}>Bot:</span>} {message.text}
          </div>
        ))}
      </div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleQuerySubmit}>Submit</button>
    </div>
  );
}

export default Chat;
