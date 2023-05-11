import { ADD_USER_INFO } from '../Action/index';

const initialState = {
  name: '',
  age: '',
  gender: '',
  email: ''
};

 const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default userReducer