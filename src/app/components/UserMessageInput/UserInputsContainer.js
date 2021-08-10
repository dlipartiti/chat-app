import React from 'react';

import UserMessageInput from './UserMessageInput';

const UserInputsContainer = () => {
  return (
    <div className="user-inputs-container">
      <UserMessageInput userNumber={1} />
      <UserMessageInput userNumber={2} />
    </div>
  );
};

export default UserInputsContainer;
