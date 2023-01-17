import { createSelector } from '@reduxjs/toolkit';
import { AppStateType } from 'redux/redux-store';

export const selectNoteById = createSelector(
  [(state: AppStateType) => state.notesPage.notes, (state, noteId: string | undefined) => noteId],
  (notes, noteId) => notes.find((note) => noteId && note.id === noteId)
);

export const selectAllNotes = (state: AppStateType) => state.notesPage.notes;
