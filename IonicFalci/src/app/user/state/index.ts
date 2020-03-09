/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
    products: UserState;
}

// Selector functions
const getUserState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(
  getUserState,
  state => state.currentUser
);
