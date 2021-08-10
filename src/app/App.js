import React from 'react';
import ChatMessagesList from './components/ChatMessagesList';
import UserInputsContainer from './components/UserMessageInput';

import './App.scss';

function App() {
  return (
    <main className="app">
      <div className="chat-container">
        <ChatMessagesList />
        <UserInputsContainer />
      </div>
    </main>
  );
}

export default App;
