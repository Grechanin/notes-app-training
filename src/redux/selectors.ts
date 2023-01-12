import { createSelector } from '@reduxjs/toolkit';
import { AppStateType } from 'redux/redux-store';

export const selectNoteById = createSelector(
  [(state) => state.notesPage.notes, (state, id) => id],
  (notes, id) => notes[id]
);

export const selectNotes = (state: AppStateType) => state.notesPage.notes;

export const getNoteById = (id: string | undefined) =>
  createSelector(selectNotes, (allNotes) => {
    return allNotes && id
      ? allNotes.find((note) => {
          return note.id === id;
        })
      : undefined;
  });
