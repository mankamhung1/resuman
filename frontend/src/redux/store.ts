import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { authReducer as AuthReducer, AuthState } from './auth/reducer';
import { targetReducer } from './target/reducer';

// import { GroupState, reducer as GroupReducer } from './group/reducer';
// import { reducer as UserReducer, UserState } from './user/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (enhancer: StoreEnhancer) => StoreEnhancer;
  }
}

export interface RootState {
  // group: GroupState;
  // user: UserState;
  auth: AuthState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    // group: GroupReducer,
    // user: UserReducer,
    auth: AuthReducer,
    target: targetReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);