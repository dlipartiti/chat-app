import React from 'react';
import PropTypes from 'prop-types';

import { getMessages } from '../../reducers/counterSlice'
import { useSelector } from 'react-redux';

import ChatMessage from './ChatMessage';

const ChatMessagesList = props => {
  const messages = useSelector(getMessages);

  return (
    <div className="chat-messages-list">
      {messages?.map(({ fromUser, messageText, date }, index) => (
        <>
          <ChatMessage userNumber={fromUser} text={messageText} />
          {(index > 0 && date.getDate() !== messages[index - 1]?.date?.getDate()) && <span style={{alignSelf: 'center'}}>{date.getDate()}</span>}
        </>
      ))}
    </div>
  );
};

ChatMessagesList.propTypes = {};

export default ChatMessagesList;
