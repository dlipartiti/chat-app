import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewUserMessage } from '../../reducers/counterSlice';

const UserMessageInput = ({ userNumber }) => {
  const dispatch = useDispatch();
  const addNewMessage = (userMessage) => dispatch(addNewUserMessage(userMessage));

  const [message, setMessage] = useState('');
  const submitButtonClasses = `user-inputs-container--input_submit user${userNumber > 4? 1 : userNumber} ${!message? 'disabled' : ''}`;

  const inputOnChangeHandler = ({ target }) => {
    setMessage(target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (message) {
      addNewMessage({ fromUser: userNumber, messageText: message, date: new Date() });
      setMessage('');
    }
  }

  return (
    <div key={`user-message-input-${userNumber}`} className="user-inputs-container--input">
      <form>
        <input onChange={inputOnChangeHandler} value={message} placeholder="Type here" />
        <button onClick={onSubmitHandler} className={submitButtonClasses} type="submit" />
      </form>
    </div>
  );
};

UserMessageInput.propTypes = {
  userNumber: PropTypes.number.isRequired
};

export default UserMessageInput;
