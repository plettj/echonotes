import SendButton from '../../components/buttons/SendButton';
import { useEffect, useState } from 'react';
import SentMessage from '../../components/messages/SentMessage';
import InputField from '../../components/messages/InputField';
import { useMessageContext } from '../../hooks/useMessageContext';

const Home = () => {
  const { messages, dispatch } = useMessageContext();

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/messages');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_MESSAGES', payload: json });
      }
    }

    fetchMessages();
  }, [dispatch]);

  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="Messages">
        { messages && messages.map((message) => (
          <SentMessage message={message} key={message._id} />
        )) }
      </div>
      <InputField user={"Developer"} thread="real-time" />
      <SendButton />
    </div>
  );
}

export default Home;