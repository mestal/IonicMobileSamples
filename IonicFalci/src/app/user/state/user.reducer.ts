import { User } from '../user';

import { UserActions, UserActionTypes } from './user.actions';

// State for this feature (User)
export interface UserState {
  currentUser: User;
}

const initialState: UserState = {
  currentUser: null
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LoginSuccess:
      return {
        ...state,
        currentUser: action.payload
      };

    case UserActionTypes.LoginFail:
      return {
        ...state,
        currentUser: null
      };

    default:
      return state;
  }
}