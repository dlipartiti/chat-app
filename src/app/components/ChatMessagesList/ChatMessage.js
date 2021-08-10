import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ChatMessage = memo(({ userNumber, text }) => {
  const speechBubbleClasses = `chat-messages-list--speech-bubble user${userNumber}`;

  return (
    <div className={speechBubbleClasses}>
      {text}
    </div>
  );
});

ChatMessage.propTypes = {
  userNumber: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default ChatMessage;
