import { Action } from '@ngrx/store';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function authReducer(payload, action: Action) {
  switch (action.type) {
    case 'SetUser':
      return payload.userData;

    default:
      return payload;
  }
}
