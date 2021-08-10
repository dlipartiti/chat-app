import React from 'react';
import { useDispatch } from 'react-redux';

import ChatMessagesList from './components/ChatMessagesList';
import UserInputsContainer from './components/UserMessageInput';

import './App.scss';
import { deleteUserMessage } from "./reducers/chatSlice";

function App() {
  const dispatch = useDispatch();
  const clearMessagesStored = () => {
    localStorage.clear();
    dispatch(deleteUserMessage());
  }

  return (
    <main className="app">
      <div className="chat-container">
        <ChatMessagesList />
        <UserInputsContainer />
      </div>
      <button onClick={clearMessagesStored} className="chat-clear-messages">DELETE MESSAGES</button>
    </main>
  );
}

export default App;
