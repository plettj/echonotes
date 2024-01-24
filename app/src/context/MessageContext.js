import { createContext, useReducer } from 'react';

export const MessageContext = createContext();

export const messageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return {
        messages: action.payload
      }
    case 'SEND_MESSAGE':
      return {
        messages: [...state.messages, action.payload]
      }
    case 'DELETE_MESSAGE':
      return {
        messages: state.messages.filter(message => message._id !== action.payload._id)
      }
    default:
      return state;
  }
}

export const MessageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, {
    messages: [],
    loading: true,
    error: null
  });

  // dispatch({ type: 'SET_MESSAGES', payload: [] });

  return (
    <MessageContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
}