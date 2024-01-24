import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import DeleteButton from '../buttons/DeleteButton';
import { useMessageContext } from '../../hooks/useMessageContext';

const MessageContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SentMessage = ({ message }) => {
  const { dispatch } = useMessageContext();

  const handleDeleteClick = async (e) => {
    console.log('Deleting message with ID: ' + message._id);

    const response = await fetch('/api/messages/' + message._id, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_MESSAGE', payload: json });
    } else {
      console.log('Error deleting message with ID: ' + message._id);
    }
  }

  return (
    <MessageContainer
      sx={{
        padding: 2,
        borderRadius: 2,
        marginBottom: 2,
      }}
    >
      <Typography variant="h6">{message.user}</Typography>
      <Typography variant="h7">{message.thread}</Typography>
      <Typography variant="body1">{message.content}</Typography>
      <Typography variant="body1">{message.reactions}</Typography>
      <p>{message.createdAt}</p>
      <DeleteButton
        onClick={handleDeleteClick}
        style={{ position: 'absolute', top: 0, right: 0 }}
      />
    </MessageContainer>
  );
};

export default SentMessage;
