import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useMessageContext } from '../../hooks/useMessageContext';

const InputField = ({ user, thread }) => {
  const { dispatch } = useMessageContext();
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
        setError(null);
        setMessage('');
        console.log("Message sent successfully!", data.content);
        dispatch({ type: 'SEND_MESSAGE', payload: data })
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
