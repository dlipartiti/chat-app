import { createSlice } from '@reduxjs/toolkit';
import messagesListMock from '../../mocks/messagesListMock'

const useMock = false;
const messagesPersisted = !useMock? localStorage.getItem('usersMessages') : messagesListMock;

const convertStringDatesToObjectDates = (messages) => {
  return messages.map(({ fromUser, messageText, date }) => ({ fromUser, messageText, date: new Date(date)}));
}

const initialState = {
  messages: messagesPersisted? convertStringDatesToObjectDates(JSON.parse(messagesPersisted)) : []
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addNewUserMessage: (state, action) => {
      state.messages.push(action.payload);
    }
  },
});

export const { addNewUserMessage } = chatSlice.actions;

export const getMessages = (state) => state.chat.messages;

export default chatSlice.reducer;
