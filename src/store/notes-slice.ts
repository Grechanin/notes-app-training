import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Note, NotesState } from 'store/notes-slice.types';

const initialState: NotesState = {
  notes: [],
  isLoading: false,
};

const notesSlice = createSlice({
  name: 'notesPage',
  initialState,
  reducers: {
    setIsNotesFetching(state) {
      state.isLoading = true;
    },
    setNotes(state, { payload }: PayloadAction<Note[]>) {
      payload ? (state.notes = payload) : (state.isLoading = false);
    },
    addNote(state, { payload }: PayloadAction<Note>) {
      state.notes = [...state.notes, payload];
    },
    deleteNoteInState(state, { payload }: PayloadAction<string>) {
      state.notes = state.notes.filter((item) => item.id !== payload);
    },
    resetIsNotesFetching(state) {
      state.isLoading = false;
    },
  },
});

export default notesSlice.reducer;
export const { setIsNotesFetching, deleteNoteInState, addNote, setNotes, resetIsNotesFetching } = notesSlice.actions;
