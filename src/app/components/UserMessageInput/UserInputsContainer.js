import React from 'react';
import PropTypes from 'prop-types';

import UserMessageInput from './UserMessageInput';

const UserInputsContainer = props => {
  return (
    <div className="user-inputs-container">
      <UserMessageInput userNumber={1} />
      <UserMessageInput userNumber={2} />
    </div>
  );
};

UserInputsContainer.propTypes = {};

export default UserInputsContainer;
