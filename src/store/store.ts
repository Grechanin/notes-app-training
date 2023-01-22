import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { firestoreReducer } from 'redux-firestore';

import notesSlice from './notes-slice';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

const rootReducers = combineReducers({
  notesPage: notesSlice,
  firestore: firestoreReducer,
});

export type AppStateType = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
