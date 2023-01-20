import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { firestoreReducer } from 'redux-firestore';

import notesSlice from './notes-slice';

const rootReducers = combineReducers({
  notesPage: notesSlice,
  firestore: firestoreReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppStateType = ReturnType<typeof store.getState>;
