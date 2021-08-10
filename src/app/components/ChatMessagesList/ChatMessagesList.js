import React, { useRef } from 'react';

import { getMessages } from '../../reducers/chatSlice'
import { useSelector } from 'react-redux';

import ChatMessage from './ChatMessage';
import { getDateLabel } from '../../../helpers/dateHelper';

const ChatMessagesList = () => {
  const messages = useSelector(getMessages);
  const firstRender = useRef(true);

  React.useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('usersMessages', JSON.stringify(messages));
    } else {
     firstRender.current = false;
    }
  }, [messages]);

  const messagesQuantity = messages.length;

  const shouldShowDate = (currentMessageDate, currentMessagePosition) => {
    if (currentMessagePosition === messagesQuantity-1) {
      // Show date if it's the first and unique message of the list
      return (messagesQuantity === 1);
    }

    const nextMessageDate = messages[currentMessagePosition + 1]?.date;
    return (currentMessagePosition === 0 || currentMessageDate.getDate() !== nextMessageDate?.getDate() || currentMessageDate.getMonth() !== nextMessageDate?.getMonth());
  };

  return (
    <div className="chat-messages-list">
      {messages?.map(({ fromUser, messageText, date }, index) => (
        <>
          {shouldShowDate(date, index) && <span className="chat-messages-list--date-separator">{getDateLabel(date)}</span>}
          <ChatMessage userNumber={fromUser} text={messageText} />
        </>
      ))}
    </div>
  );
};

export default ChatMessagesList;
