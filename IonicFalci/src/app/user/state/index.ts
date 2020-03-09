/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
    products: UserState;
}

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);
