import SendButton from '../../components/buttons/SendButton';
import { useEffect, useState } from 'react';
import SentMessage from '../../components/messages/SentMessage';
import InputField from '../../components/messages/InputField';

const Home = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/messages');
      const json = await response.json();

      if (response.ok) {
        setMessages(json);
      }
    }

    fetchMessages();
  });

  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="Messages">
        { messages && messages.map((message) => (
          <SentMessage message={message} key={message.id} />
        )) }
      </div>
      <InputField user={"Developer"} thread="real-time" />
      <SendButton />
    </div>
  );
}

export default Home;