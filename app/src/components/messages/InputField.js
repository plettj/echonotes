import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const InputField = ({ user, thread }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async (e) => {
    e.preventDefault();
    
    const newMessage = {
      user: user,
      thread: thread,
      content: message,
      reactions: []
    };

    // Send POST request to our API
    fetch('/api/messages/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessage)
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from the API if needed
        setError(null);
        setMessage('');
        console.log("Message sent successfully!", data.content);
      })
      .catch(error => {
        setError(error.message)
      });
  };

  return (
    <div>
      <TextField
        label="Message"
        value={message}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleSendClick}>
        <SendIcon />
      </Button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default InputField;
