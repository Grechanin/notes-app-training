import { createSlice } from '@reduxjs/toolkit';

import { NotesState } from 'store/notes-slice.types';

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
    setNotes(state, action) {
      action.payload ? (state.notes = action.payload) : (state.isLoading = false);
    },
    addNote(state, action) {
      state.notes = [...state.notes, action.payload];
    },
    deleteNoteInState(state, action) {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    resetIsNotesFetching(state) {
      state.isLoading = false;
    },
    editNoteInState(state, action) {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return {
            name: action.payload.name,
            content: action.payload.content,
            id: note.id,
            comments: note.comments,
          };
        }
        return note;
      });
    },
    addComment(state, action) {
      state.notes = state.notes.map((note) => {
        if (note.id == action.payload.id) {
          return {
            ...note,
            comments: action.payload.comments,
          };
        }
        return note;
      });
    },
  },
});

export default notesSlice.reducer;
export const {
  setIsNotesFetching,
  editNoteInState,
  deleteNoteInState,
  addNote,
  setNotes,
  resetIsNotesFetching,
  addComment,
} = notesSlice.actions;
