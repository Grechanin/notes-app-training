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
    setIsNotesFetching(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setNotes(state, { payload }: PayloadAction<Note[]>) {
      payload ? (state.notes = payload) : (state.isLoading = false);
    },
    editNote(state, { payload }: PayloadAction<Note>) {
      state.notes = state.notes.map((note: Note) => {
        if (note.id === payload.id) {
          note.name = payload.name;
          note.content = payload.content;
        }
        return note;
      });
    },
    addNote(state, { payload }: PayloadAction<Note>) {
      state.notes = [...state.notes, payload];
    },
    deleteNoteInState(state, { payload }: PayloadAction<string>) {
      state.notes = state.notes.filter((item) => item.id !== payload);
    },
  },
});

export default notesSlice.reducer;
export const { setIsNotesFetching, deleteNoteInState, addNote, setNotes, editNote } = notesSlice.actions;
