import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import React, {useEffect, useState} from 'react';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/message/sync')
      .then(response => {
        console.log(response.data)
        setMessages(response.data);
      })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('38396fbe96b0b27bd045', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">

      <Sidebar />
      <Chat messages={messages}/>
      </div>
   
    
    </div>
  );
}

export default App;
